<?php

/***
* Newdir class
* Creates new folder
*/

class Dir{

	private $path;
	private $foldername;
	private $group;
	private $dbh;

	/***
	* Initiates variables
	*/

	public function __construct($group, $dbh){
		
		$this->dbh = $dbh;
		$this->group = $group;

		// $this->_create($this->path, $this->foldername);

		// echo $this->path;
		// echo $this->foldername;
		
	}

	/***
	* Creates new folder with given path & name
	*/

	public function create($path, $foldername){

		$this->path = $path;
		$this->foldername = $foldername;
		$newname = $this->_check($path, $foldername);

		// echo $newname;

		if(!mkdir("$newname")){
			$createreturn['success'] = false;
		}

		// echo $path.$foldername;

		$createreturn['success'] = true;
		$createreturn['name'] = $newname;


		return $createreturn;

	}

	/***
	* Checks to see if name already exists, and appends number to the end if it does
	*/

	private function _check($path, $filename){
		if ($pos = strrpos($filename, '.')) {
           $name = substr($filename, 0, $pos);
           $ext = substr($filename, $pos);
	    } else {
	           $name = $filename;
	    }

	    $newpath = $filename;
	    $newname = $filename;
	    $counter = 1;
	    while (file_exists($newpath)) {
	           $newname = $name .'('. $counter . ')' . $ext;
	           $newpath = $newname;
	           $counter++;
	     }

	    return $newname;
	}

	/***
	* Adds dir to database
	*/

	public function push($title, $comment, $date){
		
		$query = $this->dbh->prepare("INSERT INTO {$this->group} (title, comment, date) VALUES (?, ?, ?)");

		if(!$query->execute(array($title, $comment, $date))) {
			return false;
		}

		return true;
	}

	/***
	* Retrieves folders from database
	*/

	public function pull(){
		$query = $this->dbh->prepare("SELECT * FROM {$this->group} ORDER BY id DESC");
		$query->execute();

		return $query->fetchAll();
	}

	/***
	* Gets random photo from directory
	*/

	public function thumbnail($dir){
		$files = glob($dir . "*.{jpg,png,jpeg,JPG,PNG,JPEG}", GLOB_BRACE);
	    $file = array_rand($files);
	    return $files[$file];
	}

	/***
	* Deletes posts from database
	*/

	public function delete($id, $foldername, $newname){
		$query = $this->dbh->prepare("DELETE FROM {$this->group} WHERE id = ?");

		if(!$query->execute(array($id))) {
			$return['database'] = false;
		}

		$return['database'] = true;

		rename($foldername, $newname);
		

		$return['rm'] = true;

		return $return;

		// echo $newname;

	}

	/***
	* Updates posts in database and renames folder
	*/

	public function update($id, $newname, $path, $oldname){

		$this->path = $path;
		$this->foldername = $newname;
		$newname = $this->_check($path, $this->foldername);


		if(!rename($oldname, $newname)){
			return false;
		}

		$query = $this->dbh->prepare("UPDATE {$this->group} SET title=? WHERE id=?");

		if(!$query->execute(array($newname, $id))) {
			return false;
		}

		return true;
	}

	/***
	* Pulls folder information from database
	*/

	public function pullInfo($name){
		$query = $this->dbh->prepare("SELECT * FROM {$this->group} WHERE title = ?");
		$query->execute(array($name));

		return $query->fetch();
	}

	/***
	* Copies template file into new file
	*/

	public function newFileWrite($newfile, $content){

		$file = fopen($newfile, "w") or die($return = false);

		if (!fwrite($file, $content)) {
			$return = false;
		}

		fclose($file);

		$return = true;

		return $return;
	}

}