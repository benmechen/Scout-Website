<?php

/***
* Notifications class
* Checks to see if any new notifications for user & marks as seen
*/

class Notifications{

	private $group;
	private $dbh;
	private $table;
	private $userIP;

	/***
	* Runs getIP
	*/

	public function __construct(){
		
		$this->_getIP();
		
	}

	/***
	* Gets user's IP Address and stores it in variable
	*/

	private function _getIP(){

		$this->userIP = $_SERVER['HTTP_USER_AGENT'];

	}

	/***
	* Checks if user's IP Address is in given group table
	* and returns number of unseen in 
	*/

	public function checkGroup($dbh, $group){

		// If database parameter is an array, push each value to another array for finding IPs
		if (is_array($dbh)) {

			$ips_array = array();
			
			foreach ($dbh as $db) {

				array_push($ips_array, $this->_getIPs($db, $group));
		
			}
		
		}else{

			// If database parameter is not an array, run the normal method for getting the IPs

			$ips = $this->_getIPs($dbh, $group);

		}

		$i = 0;

		// Again, if the database parameter is an array, foreach value in it parsed through from the first is_array, explode the values and check if it is equal to the user's IP

		if (is_array($dbh)) {
			foreach ($ips_array as $ip_array) {
				$ii = 0;
				// For each row, separate IP list and check each one against user's IP
				foreach ($ip_array as $ip) {

					$ips = $ip['ips'];

					$ip_indiv = explode('|', $ips);

					foreach ($ip_indiv as $ip) {

						if ($ip !== $this->userIP) {
							$ii++;
						}else{

						}


					}

					if ($ii == count($ip_indiv)) {
						// If none of the IPs match the user's, increment the amount of unseen
						$i++;
					}

					$ii = 0;

				}
			}
		} else{			

			// If it is not an array, run the same method but without the foreach loop	
			$ii = 0;

			foreach ($ips as $ip) {

				$ips = $ip['ips'];

				$ip_indiv = explode('|', $ips);

				foreach ($ip_indiv as $ip) {

					if ($ip !== $this->userIP) {
						$ii++;
					}else{

					}


				}

				if ($ii == count($ip_indiv)) {
					$i++;
				}

				$ii = 0;

			}

		}

		// Return the amount not seen by the user
		return $i;

	}

	/***
	* Adds IP address to database when user sees
	*/

	public function seen($dbh, $group){

		$query = $dbh->prepare("SELECT ips, id FROM {$group}");
		$query->execute();

		$all = $query->fetchAll();

		$ids = array();

		foreach ($all as $ips) {
			
			$ip_indiv = explode('|', $ips['ips']);

			if (in_array($ips['id'], $ids)) {

			} else{
				foreach ($ip_indiv as $ip) {

					if ($ip === $this->userIP) {

					}else{
						array_push($ids, $ips['id']);
					}


				}
			}
				
		}
		

		$ids = array_unique($ids);

		foreach ($ids as $id) {
			
			$query = $dbh->prepare("SELECT ips FROM {$group} WHERE id = {$id}");
			
			$query->execute();

			$ips = $query->fetch();
			

			$query = $dbh->prepare("UPDATE {$group} SET ips = ?  WHERE id = ?");

			if(!$query->execute(array($ips[0] . '|' . $this->userIP, $id))) {

				return false;
		
			}
		}

		return true;

	}

	/***
	* Gets all IP Addresses from database table
	*/

	private function _getIPs($database, $table){

		$query = $database->prepare("SELECT ips FROM {$table}");
		$query->execute();

		return $query->fetchAll();

	}
}
