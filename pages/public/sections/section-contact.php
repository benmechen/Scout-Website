<?php

	if (isset($_POST['contact-submit'])) {
		$inputArray = array($_POST['contact-name'], $_POST['contact-email'], $_POST['contact-subject'], $_POST['contact-message'], $_POST['contact-to']);

	    foreach ($inputArray as $input) {
		    if(empty($input)){
			    $error = array();
			    array_push($error, 1);
			    $enteredName = $_POST['contact-name'];
			    $enteredEmail = $_POST['contact-email'];
			    $enteredSubject = $_POST['contact-subject'];
			    $enteredMessage = $_POST['contact-message'];
		    }else{}
	    } 

	    if (isset($error) && in_array(1, $error)) {
		    $messageEmail = "<span style='color: #800000;'>Please fill in every input.</span>";
		    $enteredName = $_POST['contact-name'];
		    $enteredEmail = $_POST['contact-email'];
		    $enteredSubject = $_POST['contact-subject'];
		    $enteredMessage = $_POST['contact-message'];
	    }else{
	    	if (!filter_var($_POST['contact-email'], FILTER_VALIDATE_EMAIL)) {
				$messageEmail = "<span style='color: #800000;'>Invalid email format</span>"; 
				$enteredName = $_POST['contact-name'];
			    $enteredEmail = $_POST['contact-email'];
			    $enteredSubject = $_POST['contact-subject'];
			    $enteredMessage = $_POST['contact-message'];
			}else{
				switch ($_POST['contact-to']) {
					case 'beavers':
						$to = 'lytchettmatraversbeavers@gmail.com';
						break;

					case 'cubs':
						$to = 'lytchettmatraverscubs@gmail.com';
						break;

					case 'scouts':
						$to = 'lytchettscouts@gmail.com';
						break;

					case 'explorers':
						$to = 'thebrightsideesu@gmail.com';
						break;

					case 'hallbookings':
						$to = 'lytchettscouthall@gmail.com';
						break;
					
					case 'members':
						$to = 'mofletcher@btinternet.com';
						break;

					case 'admin':
						$to = 'benm123@yahoo.com';
						break;

					default:
						$to = 1;
						break;
				}

				// echo $_POST['contact-to'];

				if ($to != 1) {
					// $to = $_POST['contact-to'];
					$subject = "Scout Website Contact | New Public Message";
					$message = "
								<html>
									<head>
										<title>1st Lytchett Matravers Scout Group | Contact</title>
									</head>
									<body>
										<h1>". htmlspecialchars($_POST['contact-subject']) ."</h1>
										<div>
											<b>From: </b> ". htmlspecialchars($_POST['contact-name']) ."<br>
											<b>Email: </b> ". htmlspecialchars($_POST['contact-email']) ."<br>
											<b>Sent: </b> ". date('l jS \of F Y h:i:s A') ."
											<br><br>
											<b>Message: </b><br>". htmlspecialchars($_POST['contact-message']) ."
											<br><br>
											Do not reply to this email. Send your reply to <a href'mailto:" . htmlspecialchars($_POST['contact-email']) . "'>" . htmlspecialchars($_POST['contact-email']) . "</a>
											<hr>
											<small>
												Sent using 1st Lytchett Matravers Scout Group's public contact form.<br>
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
					$headers .= 'Cc: webmaster@1stlytchettscoutgroup.co.uk' . "\r\n";

					mail($to,$subject,$message,$headers);

					$messageEmail = "<span style='color: forestgreen;'>Email sent!</span>";
				}else{
					$messageEmail = "<span style='color: #800000;'>Please choose who to send your email to using the dropdown menu below.</span>";
					$name = $_POST['contact-name'];
				    $email = $_POST['contact-email'];
				    $subject = $_POST['contact-subject'];
				    $to = $_POST['contact-to'];
				    $message = $_POST['contact-message'];
				}
		    	
			}
	    }
	}

?>
<section class="section-contact fullheight" id="contact">
<!-- 	<div class="hero-container">
 -->		<!-- <br><br><br><br> -->
		<h1 class="group-title">Contact Us</h1>
	<!-- </div> -->
	<!-- <br><br><br><br><br><br><br> -->
	<div class="text-content">
		<br><br>
		
			<form action="#contact" method="post" class="contact-form">
				<br><br>
				<?= $messageEmail ?>
				<div class="input-container">
					<input type="text" autocomplete="off" placeholder="Your Name" class="input-name" name="contact-name" value="<?= $enteredName ?>" required>
					<input type="email" autocomplete="off" placeholder="Your Email" class="input-email" name="contact-email" value="<?= $enteredEmail ?>" required>
					<input type="text" autocomplete="off" placeholder="Email Subject" class="input-subject" name="contact-subject" value="<?= $enteredSubject ?>" required>
					<br>
					<select name="contact-to" required>
						<option disabled selected>Select who to send to</option>
						<option value="beavers">Beavers</option>
						<option value="cubs">Cubs</option>
						<option value="scouts">Scouts</option>
						<option value="explorers">Explorers</option>
						<option value="hallbookings">Hall Bookings</option>
						<option value="members">Membership Enquiry</option>
						<option value="admin">Admin</option>
					</select>
					<br>
					<textarea rows="7" placeholder="Your Message" name="contact-message" required><?= $enteredMessage ?></textarea>
					<input type="submit" value="Send" name="contact-submit">
				</div>
			</form>

		<a class="arrow-down" href="#about"><h1>^</h1></a>
	</div>
</section>