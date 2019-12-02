<?php

/***
* Groups class
* Allows user to select which groups to subscribe to.
* Sends data for Notifications and Mail class
*/

class Groups{

	private $groups;
	private $groupstring;
	private $cookieName;
	private $dbh;

	/***
	* Initiates variables
	*/

	public function __construct($dbh, $cookieName){
		
		$this->dbh = $dbh;
		$this->cookieName = $cookieName;

	}

	/***
	* Gets the user's selected groups from the stored cookie
	*/

	public function getGroups(){

		if (isset($_COOKIE[$this->cookieName])) {
			return explode("-", $_COOKIE[$this->cookieName]);
		} else{
			return array("beavers", "cubs", "scouts", "explorers");
		}

	}

	/***
	* Adds user's selected groups into a cookie 
	*/

	public function addGroups($beavers = "", $cubs = "", $scouts = "" , $explorers = ""){

		// Add groups selected to array
		$this->groups = array($beavers, $cubs, $scouts, $explorers);

		// Change array of groups into string separated by -
		foreach ($this->groups as $group) {
			// echo $group;
			if ($this->groupstring != "") {
				$this->groupstring = $this->groupstring . '-' . $group;
			} else{
				$this->groupstring = $group;
			}
		}

		// Set cookie with the given name & string of groups
		setcookie($this->cookieName, $this->groupstring, time() + (86400 * 365 * 2), '/'); // 86400 = 1 day

	}
	
	/***
	* Gets emails from mail list
	*/

	public function getEmails($group){

		$query = $this->dbh->prepare("SELECT email FROM {$group}");

		$query->execute();

		return $query->fetchAll();

	}
	
	/***
	* Add user's email to their selected group's mail list
	*/

	public function addMail($groups, $email){

		foreach ($groups as $group) {
			if($group != ""){
				$emails = $this->getEmails($group);

				// foreach ($emails as $list_email) {

					if (!$this->in_array_r($email, $emails)) {
						$query = $this->dbh->prepare("INSERT INTO {$group} (email) VALUES (?)");

						$query->execute(array($email));
					}
				// }
				
			}
			
		}

	}

	/***
	* Sends notifications to all users in a groups's mail list
	*/

	public function mailUsers($group, $type, $title, $extra = ""){

		$emailarray = $this->getEmails($group);

		switch ($type) {
			case 'post':
				$new = "a new post";
				$link = strtolower(ucfirst($group)) . "/";
				break;

			case 'photos':
				$new = "new photos";
				$link = strtolower(ucfirst($group)) . "/photos/" . $title;
				break;

			case 'file':
				$new = "a new file";
				$file_with_ext = explode(".", $title);
				$title = str_replace("." . end($file_with_ext), "", $title);
				$extra = "A " . strtoupper(end($file_with_ext)) . " file.";
				$link = strtolower(ucfirst($group)) . "/documents/";
				break;

			default:
				break;
		}

		foreach ($emailarray as $emails => $email) {
			if (!empty($email['email'])) {
				$to = $email['email'];
				//$to = "benm123@yahoo.com";
				$subject = "Scout Website Notification | New " . ucfirst($type);
				$message = "
							<html>
								<head>
									<title>1st Lytchett Matravers Scout Group | Notification</title>
								</head>
								<body>
									<h1>" . ucfirst($group) . " have added ". $new ."</h1>
									<div>
										<b>Title: </b> ". $title ."<br>
										<b>Message/Description: </b>". nl2br($extra) ."<br>
										<br><br>
										<a href='https://1stlytchettscoutgroup.co.uk/?target=sections/" . $link . "'>Click here to log in and view this.</a>
										<hr>
										<small>
											To unsubscribe from these notification emails, click <a href='https://1stlytchettscoutgroup.co.uk/_includes/groups/unsubscribe.php?email=" . $email['email'] . "'>here</a><br>
											Sent from <a href='https://1stlytchettscoutgroup.co.uk'>1st Lytchett Matravers Scout Group's</a> website.<br>
											" . $_SERVER['REMOTE_ADDR'] . "</br>" .
											 $_SERVER['SERVER_PROTOCOL'] . "</br>" . 
											 $_SERVER['SERVER_SOFTWARE'] . "</br>" . 
											 $_SERVER['SERVER_ADDR'] . "</br>
										</small>
									</div>
								</body>
							</html>
							";
			
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
				$headers .= "From: do-not-reply@1stlytchettscoutgroup.co.uk" . "\r\n";

				mail($to,$subject,$message,$headers);
			}
		}

	}

	/***
	* Removes user's email from all mail lists
	*/

	public function unsubscribe($email){

		$beavers = $this->dbh->prepare("DELETE FROM beavers WHERE email = ?");
		$cubs = $this->dbh->prepare("DELETE FROM cubs WHERE email = ?");
		$scouts = $this->dbh->prepare("DELETE FROM scouts WHERE email = ?");
		$explorers = $this->dbh->prepare("DELETE FROM explorers WHERE email = ?");

		if (!$beavers->execute(array($email)) || !$cubs->execute(array($email)) || !$scouts->execute(array($email)) || !$explorers->execute(array($email))){
			return false;
		}

		return true;

	}

	private function in_array_r($needle, $haystack, $strict = false) {
	    foreach ($haystack as $item) {
	        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && $this->in_array_r($needle, $item, $strict))) {
	            return true;
	        }
	    }

	    return false;
	}

	
}	
