<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group</title>
		<!-- <meta name="viewport" content="width=device-width, initial-scale=0.65"> -->
		<link rel="stylesheet" type="text/css" href="_templates/default/css/main.css">
		<link rel="shortcut icon" type="image/png" href="favicon.png">
		<meta charset="UTF-8">
		<meta name="msvalidate.01" content="58F462BEF49765C47C6B60E9783AA587">
		<meta name="description" content="Welcome to the site for the 1st Lytchet Matravers Scout Group. We have a Beaver group, Cub group, Scout group, and Explorer group.">
	    <meta name="keywords" content="lytchett, matravers, scouts, cubs, beavers, explorers, group, hut">
	    <meta name="robots" content="index, follow">
		<!--[if 1t IE 9]>
	    <script>
	        document.createElement("article");
	        document.createElement("aside");
	        document.createElement("footer");
	        document.createElement("header");
	        document.createElement("main");
	        document.createElement("main_nav");
	        document.createElement("section");
	    </script>
	    <![endif]-->  
	</head>

	<body>

		<!-- HEADER -->
		<header>
			<a class="logo" href=""></a>
			<nav>
				<ul>
					<li><a href="#about">Home</a></li> | 
					<li><a href="#beavers">Beavers</a></li> | 
					<li><a href="#cubs">Cubs</a></li> | 
					<li><a href="#scouts">Scouts</a></li> | 
					<li><a href="#explorers">Explorers</a></li> | 
					<li><a href="#contact">Contact Us</a></li>
				</ul>
			</nav>
		</header>

		<!-- MAIN -->
		<section class="section-main fullheight">
				<h1><span class="title-highlight">1st Lytchett Matravers Scout Group</span></h1>
				<a class="arrow-down" href="#about"><h1>v</h1></a>
		</section>

		<!-- ABOUT -->
		<section class="section-about fullheight" id="about">
			<br>
			<div class="text-content">
				<br>
				<br>
				<br>
				<br>
				<p class="bg-quote">
					<b>
						"Two things matter in life: following your dreams 
						and looking after your friends. This is what I love 
						about Scouting. It's about doing great things, loving 
						and enjoying the great adventures and helping others 
						to do the same."
					</b>
					<br>
					<span style="font-family: Courier New; font-size: 0.5em;">-Bear Grylls, Chief Scout-<span>
				</p>
				<br>
				<br>
				<p class="text-welcome">
					Welcome to the 1st Lytchett Matravers Scout Group's website. The ages for our groups are: Beavers 6-8, Cubs 8-10½, Scouts 10½-14, and <br> Explorers 14-18.
				
				<br>

				</p>

				<a class="arrow-down" href="#beavers"><h1>v</h1></a>
			</div>
		</section>

		<!-- BEAVERS -->
		<section class="section-beavers fullheight" id="beavers">
			<div class="hero-container">
				<h1 class="group-title">Beavers</h1>
				<img class="groups-hero" src="_templates/default/img/beavers-hero.jpg">
			</div>
			<br>
			<div class="text-content">
				<p class="beavers-about">Beavers are the youngest Section of the Scouting family - their activities are based around making things, outdoor activities, singing, playing games, going out on visits, investigating nature, listening to stories, learning how to be safe and most importantly, making new friends.</p>
				<a class="arrow-down" href="#cubs"><h1>v</h1></a>
			</div>
		</section>

		<!-- CUBS -->
		<section class="section-cubs fullheight" id="cubs">
			<div class="hero-container">
				<h1 class="group-title">Cubs</h1>
				<img class="groups-hero" src="_templates/default/img/cubs-hero.jpg">
			</div>
			<br>
			<div class="text-content">
				<p class="cubs-about">Cubs are the second Section of the Scouting movement. There are loads of fun things that you can do as a Cub Scout - you will get a chance to try lots of different activities like swimming, music, exploring, computing and collecting - if you do them well you can get a badge which you can wear on your uniform. Cub Scouts also get to go on trips and days out to places like the zoo, theme parks or a farm - you'll also get to go camping with the rest of your Pack - this will mean sleeping in a tent and doing loads of outdoor activities.</p>
				<a class="arrow-down" href="#scouts"><h1>v</h1></a>
			</div>
		</section>

		<!-- SCOUTS -->
		<section class="section-scouts fullheight" id="scouts">
			<div class="hero-container">
				<h1 class="group-title">Scouts</h1>
				<img class="groups-hero" src="_templates/default/img/scouts-hero.jpg">
			</div>
			<br>
			<div class="text-content">
				<p class="scouts-about">Scouts are the third Section of the Scouting movement. Scouts are encouraged to take part in a wide range of activities as part of their programme - participation is the key approach and for the Scout who wants to be recognised for their achievements there are a number of Challenges, Awards and Activity Badges... Scouts take part in a balanced programme that helps them to find out about the world in which they live, encourages them to know their own abilities and the importance of keeping fit and helps develop their creative talents, it also provides opportunities to explore their own values and personal attitudes. Being outdoors is important and half the programme is given over to taking part in both the traditional Scouting skills such as camping, survival and cooking as well as the wide range of adventurous activities, anything from abseiling to yachting. Scouting is about being with friends, as part of a team, participating fully in the adventure and opportunities of life.</p>
				<a class="arrow-down" href="#explorers"><h1>v</h1></a>
			</div>
		</section>

		<!-- EXPLORERS -->
		<section class="section-explorers fullheight" id="explorers">
			<div class="hero-container">
				<h1 class="group-title">Explorers</h1>
				<img class="groups-hero" src="_templates/default/img/explorers-hero.jpg">
			</div>
			<br>
			<div class="text-content">
				<p class="explorers-about">Not all Units meet every week, partly due to activities, holidays, exams and the other commitments that crop up in a teenager's life, and also because Explorers tend to get out and about at weekends more often than other sections. Explorer Scouts often get the chance to work with other Explorer Scouts in their District, not just their own Unit, so can take part in an even wider spectrum of activities. There is also a range of ambitious badges and awards, through which Explorers can demonstrate their proficiencies and expand their interests.</p>
				<a class="arrow-down" href="#contact"><h1>v</h1></a>
			</div>
		</section>

		<!-- CONTACT -->
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
		
		<!-- FOOTER -->
		<footer>
			<div class="text-content">
				<img class="footer-logo-1" src="_templates/default/img/scout-logo.png">
				<img class="footer-logo-2" src="_templates/default/img/scout-logo.png">
				<p class="footer-text-1">
					&copy; 1st lytchett Matravers Scout Group 2014-2017. 
					<br>
					All Rights Reserved.
					<br>
					Part of the Scout Association

				</p>
			
				<p class="footer-text-2">
					<a href="#beavers">Beavers</a><br>
					<a href="#cubs">Cubs</a><br>
					<a href="#scouts">Scouts</a><br>
					<span class="log-in"><a href="#about">Log In</a></span>
					<a href="#explorers">Explorers</a><br>
					<a href="#hallbookings">Hall Bookings</a><br>
					<a href="#contact">Contact Us</a><br><br>
					<a href="privacy.html">Privacy Policy</a><br>
				</p>
			</div>
		</footer>

		<!-- <div style="height:2000px; z-index:-999;"></div> -->
		
	</body>
	<script src="_js/jquery.1.11.3.js"></script>
	<script src="_js/jquery.2.1.4.js"></script>
	<script src="_js/scroll.js"></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-55858968-1', 'auto');
	  ga('send', 'pageview');
	</script>
</html>