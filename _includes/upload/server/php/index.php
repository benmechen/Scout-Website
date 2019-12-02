<?php
	// include "../../../../_config/config.php";
	require "UploadHandler.php";

	// Set up Documents system
    $documentsDBH = new PDO("mysql:host=localhost;dbname=WEB_DOCUMENTS", "lytchettdb", "LytchettDB1");


    // Set up Groups
	$groups = new Groups($groupsDBH, "subscribed-groups");


    // Function to search multidimensional arrays
    function in_array_r($needle, $haystack, $strict = false) {
	    foreach ($haystack as $item) {
	        if (($strict ? $item === $needle : $item == $needle) || (is_array($item) && in_array_r($needle, $item, $strict))) {
	            return true;
	        }
	    }

	    return false;
	}

	// Get the refering url to find where to upload files to
	$referer = str_replace("https://www.1stlytchettscoutgroup.co.uk", "", $_SERVER['HTTP_REFERER']);

	$referer = str_replace("%20", " ", $referer);

	$path = $_SERVER['DOCUMENT_ROOT'] . $referer;


	// Start the upload class, passing in the path to upload files to 
	$upload_handler = new UploadHandler($path);
	

	// If the refering url includes 'documents', insert the files into the database for notifications and recently uploaded
	if (strpos($path, "documents")) {

		// Convert $upload_handler response from object to array
		$upload_array = get_object_vars($upload_handler);

		// Get the group by exploding the refering url and checking if group name is in it
		$upload_dir_split = explode("/", $path);


        if (in_array("beavers", $upload_dir_split)) {
            
            $group = "beavers";

        }elseif (in_array("cubs", $upload_dir_split)) {
            
            $group = "cubs";
        
        }
        elseif (in_array("scouts", $upload_dir_split)) {
        
            $group = "scouts";
        
        }
        elseif (in_array("explorers", $upload_dir_split)) {
        
            $group = "explorers";
        
        }else{
            return false;
        }


        // Select all documents from db to check whether the files from $upload_handler are already in there or not
		$query = $documentsDBH->prepare("SELECT title FROM {$group}");

        $query->execute();

		$db_files_list = $query->fetchAll();

		// Foreach of the $upload_handler's files, convert them to arrays, and check if the file is in the database
		foreach ($upload_array['response']['files'] as $file) {
			$file = get_object_vars($file);

			if ($file['name'] !== "index.php") {

				// If the file is not in the database, insert it
				if(!in_array_r($file['name'], $db_files_list)){
					$query = $documentsDBH->prepare("INSERT INTO {$group} (title, date) VALUES (?, ?)");

					$groups->mailUsers($group, "file", $file['name']);

	                 if(!$query->execute(array($file['name'], date('d/m/y')))) {
	                     return false;
	                }
				}
                
			}
		}

	}
