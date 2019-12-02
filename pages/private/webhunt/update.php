<?php
	include '../../../_config/config.php';

	

	//Check if cookie is set, and if so check if it is valid
	if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
		//Set $logged to true for !isset workaround (!isset not working)
		
		$uid = $auth->getPermission($_COOKIE[$auth->config->cookie_name]);
		if ($uid == 3 || $uid == 100) {
			$logged = true;
		}
	}else{
		//If it is not set or is not valid, redirect to homepage
		header("Location: ../../../../");
		exit();
	}

	//If $logged is true, display logged in page
	if ($logged = true) {
		$user = $auth->getUser($auth->getSessionUID($auth->getSessionHash()));
		
		if ($_POST["data"] === "name") {
			echo $user['email'];
		}
		if ($_POST["data"] === "members") {
			echo $user['members'];
		}

		// Change user data
		if ($_POST['data'] === "updateUserData") {

			// WEB_HUNT DB
			$query = $webhuntDBH->prepare("ALTER TABLE  `questions` CHANGE  `" . $user['email'] . "` `" . $_POST['name'] . "` TEXT CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL ;");
			$query->execute(/*array($user['email'])*/);


			$query = $dbh->prepare("UPDATE users SET email = ? WHERE id = ?");
			$query->execute(array(htmlspecialchars($_POST['name']), $user['id']));

			$query = $dbh->prepare("UPDATE users SET members = ? WHERE id = ?");
			$query->execute(array(htmlspecialchars($_POST['members']), $user['id']));

			$query = $webhuntDBH->prepare("UPDATE scores SET name = ? WHERE id = ?");
			$query->execute(array(htmlspecialchars($_POST['name']), $user['id']));

		}


		// Section2
		if ($_POST['data'] == "section2") {

			$answer = "1. " . htmlspecialchars($_POST['1']) . " <br> 2. " . htmlspecialchars($_POST['2']) . " <br> 3. " . htmlspecialchars($_POST['3']) . " <br> 4. " . htmlspecialchars($_POST['4']) . " <br> 5. " . htmlspecialchars($_POST['5']);

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 1");
			$query->execute(array($answer));
			
		}

		// Section3
		if ($_POST['data'] == "section3") {

			$answer = "1. " . $_POST['1'] . " <br> 2. " . $_POST['2'] . " <br> 3. " . $_POST['3'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 2");
			$query->execute(array($answer));
			
		}

		// Section4
		if ($_POST['data'] == "section4") {

			$answer = "1. " . $_POST['1'] . " <br> 2. " . $_POST['2'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 3");
			$query->execute(array($answer));
			
		}

		// Section5
		if ($_POST['data'] == "section5") {

			$answer = "1. " . $_POST['1'] . " <br> 2. " . $_POST['2'] . " <br> 3. " . $_POST['3'] . " <br> 4. " . $_POST['4'] . " <br> 5. " . $_POST['5'] . " <br> 6. " . $_POST['6'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 4");
			$query->execute(array($answer));
			
		}

		// Section6
		if ($_POST['data'] == "section6") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 5");
			$query->execute(array($answer));
			
		}

		// Section7
		if ($_POST['data'] == "section7") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 6");
			$query->execute(array($answer));
			
		}

		// Section8
		if ($_POST['data'] == "section8") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 7");
			$query->execute(array($answer));
			
		}
		
		// Section9
		if ($_POST['data'] == "section9") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 8");
			$query->execute(array($answer));
			
		}

		// Section10
		if ($_POST['data'] == "section10") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 9");
			$query->execute(array($answer));
			
		}

		// Section11
		if ($_POST['data'] == "section11") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 10");
			$query->execute(array($answer));
			
		}

		// Section12
		if ($_POST['data'] == "section12") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 11");
			$query->execute(array($answer));
			
		}

		// Section13
		if ($_POST['data'] == "section13") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 12");
			$query->execute(array($answer));
			
		}

		// Section14
		if ($_POST['data'] == "section14") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 13");
			$query->execute(array($answer));
			
		}

		// Section15
		if ($_POST['data'] == "section15") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 14");
			$query->execute(array($answer));
			
		}

		// Section16
		if ($_POST['data'] == "section16") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 15");
			$query->execute(array($answer));
			
		}

		// Section17
		if ($_POST['data'] == "section17") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 16");
			$query->execute(array($answer));
			
		}

		// Section18
		if ($_POST['data'] == "section18") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 17");
			$query->execute(array($answer));
			
		}

		// Section19
		if ($_POST['data'] == "section19") {

			$answer = $_POST['1'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 27");
			$query->execute(array($answer));
			
		}

		// Section21
		if ($_POST['data'] == "section21") {

			$answer = "Cost: " . $_POST['1'] . " <br>Travel: " . $_POST['2'];

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 19");
			$query->execute(array($answer));
			
		}

		// Section22
		if ($_POST['data'] == "section22") {

			$answer = "Cost 2: " . $_POST['1'] ;

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 20");
			$query->execute(array($answer));
			
		}

		// Section23
		if ($_POST['data'] == "section23") {

			$answer = "Cost 3: " . $_POST['1'] ;

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 21");
			$query->execute(array($answer));
			
		}

		// Section26
		if ($_POST['data'] == "section26") {

			$answer = $_POST['1'] ;

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 28");
			$query->execute(array($answer));
			
		}
		
		// SectionEnd
		if ($_POST['data'] == "sectionEnd") {

			$answer = $_POST['1'] ;

			$query = $webhuntDBH->prepare("UPDATE questions SET " . $user['email'] . " = ? WHERE id = 29");
			$query->execute(array($answer));
			
		}
}
?>