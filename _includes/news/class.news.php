<?php

/***
* News class
* Connects to database and returns news in array
*/

class News{

	private $group;
	private $dbh;

	/***
	* Initiates variables
	*/

	public function __construct($group, $dbh){
		
		$this->group = $group;
		$this->dbh = $dbh;
		
	}

	/***
	* Retrieves posts from database
	*/

	public function pull(){
		$query = $this->dbh->prepare("SELECT * FROM {$this->group} ORDER BY id DESC");
		$query->execute();

		return $query->fetchAll();
	}

	/***
	* Adds posts to database
	*/

	public function push($title, $comment, $date){
		$query = $this->dbh->prepare("INSERT INTO {$this->group} (title, comment, date) VALUES (?, ?, ?)");

		if(!$query->execute(array($title, nl2br($comment), $date))) {
			return false;
		}

		return true;
	}

	public function pushNewsflash($comment, $group, $date){
		// echo $comment . $group . $date;
		$query = $this->dbh->prepare("UPDATE {$this->group} SET comment=?, group_name=?, date=? WHERE id = 1");

		if(!$query->execute(array($comment, $group, $date))) {
			// return false;
			echo "nope";
		}

		return true;
	}

	/***
	* Deletes posts from database
	*/

	public function delete($id){
		$query = $this->dbh->prepare("DELETE FROM {$this->group} WHERE id = ?");

		if(!$query->execute(array($id))) {
			return false;
		}

		return true;
	}

	/***
	* Updates posts in database
	*/

	public function update($id, $title, $comment){
		$query = $this->dbh->prepare("UPDATE {$this->group} SET title=?, comment=? WHERE id=?");

		if(!$query->execute(array($title, nl2br($comment), $id))) {
			return false;
		}

		return true;
	}

}