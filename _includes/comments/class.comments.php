<?php

/***
* Comments class
* Reads from and inserts into database
*/

class Comments{

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
	* Retrieves comments from database
	*/

	public function pull(){
		$query = $this->dbh->prepare("SELECT * FROM {$this->group} ORDER BY id DESC");
		$query->execute();

		return $query->fetchAll();
	}

	/***
	* Adds comment to database
	*/

	public function push($name, $title, $comment, $date){
		$query = $this->dbh->prepare("INSERT INTO {$this->group} (name, title, comment, date) VALUES (?, ?, ?, ?)");

		if(!$query->execute(array($name, $title, nl2br($comment), $date))) {
			return false;
		}

		return true;
	}

	public function commentAdd($id, $name, $comment, $date){

		$query = $this->dbh->prepare("SELECT comments FROM {$this->group} WHERE id=?");
		$query->execute(array($id));

		$existingComments = $query->fetchAll();

		$query = $this->dbh->prepare("UPDATE {$this->group} SET comments=? WHERE id=?");

		$commentData = $existingComments[0]['comments'] . "|" . $name . "->" . nl2br($comment) . "->" . $date;


		if(!$query->execute(array($commentData, $id))) {
		
			return false;
		
		}

		return true;
	}

	/***
	* Deletes comment from database
	*/

	public function delete($id){
		$query = $this->dbh->prepare("DELETE FROM {$this->group} WHERE id = ?");

		if(!$query->execute(array($id))) {
			return false;
		}

		return true;
	}

	/***
	* Deletes comment on a comment from database
	*/

	public function commentDelete($id, $comment){
		// echo $comment;
		// echo $id;
		$query = $this->dbh->prepare("SELECT comments FROM {$this->group} WHERE id=?");

		$query->execute(array($id));

		$existingComments = $query->fetchAll();


		if (strpos($existingComments[0]['comments'], $comment)) {

			$commentData = str_replace("|" . $comment, "", $existingComments[0]['comments']);
		
		}
		
		$query = $this->dbh->prepare("UPDATE {$this->group} SET comments=? WHERE id=?");
		

		if(!$query->execute(array($commentData, $id))) {
		
			return false;
		
		}

		return true;
	}

	

}