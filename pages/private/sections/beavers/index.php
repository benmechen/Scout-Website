<?php
	include '../../../../_config/config.php';

	//Check if cookie is set, and if so check if it is valid
	if (isset($_COOKIE[$auth->config->cookie_name]) && $auth->checkSession($_COOKIE[$auth->config->cookie_name])) {
		//Set $logged to true for !isset workaround (!isset not working)
		$logged = true;
		$uid = $auth->getPermission($_COOKIE[$auth->config->cookie_name]);
	}else{
		//If it is not set or is not valid, redirect to homepage
		$ref = "$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        header("Location: $_PUBLIC_DIR?ref=$ref");
		exit();
	}

	//If $logged is true, display logged in page
	if ($logged = true) {

		// Setup notifications
		$notifications = new Notifications($_SERVER['REMOTE_ADDR']);

		$photosCheck = $notifications->checkGroup($photosDBH, "beavers");

		$newsCheck = $notifications->checkGroup($newsDBH, "beavers");

		$documentsCheck = $notifications->checkGroup($documentsDBH, "beavers");

		$commentsCheck = $notifications->checkGroup($commentsDBH, "beavers");

		// Set up calendar 		
		$calendarId = 'lytchettscoutgroup@gmail.com';
		$params = array(
		//CAN'T USE TIME MIN WITHOUT SINGLEEVENTS TURNED ON,
		//IT SAYS TO TREAT RECURRING EVENTS AS SINGLE EVENTS
		    'singleEvents' => true,
		    'orderBy' => 'startTime',
		    'timeMin' => date(DateTime::ATOM),//ONLY PULL EVENTS STARTING TODAY
		//'maxResults' => 7 //ONLY USE THIS IF YOU WANT TO LIMIT THE NUMBER
		                  //OF EVENTS DISPLAYED
		 
		);
		//THIS IS WHERE WE ACTUALLY PUT THE RESULTS INTO A VAR
		$events = $cal->events->listEvents($calendarId, $params); 
		$calTimeZone = $events->timeZone; //GET THE TZ OF THE CALENDAR

		//SET THE DEFAULT TIMEZONE SO PHP DOESN'T COMPLAIN. SET TO YOUR LOCAL TIME ZONE.
		 date_default_timezone_set($calTimeZone);



		// Setup news
		$news = new News("beavers", $newsDBH);

		// Setup groups
		$groups = new Groups($groupsDBH, "subscribed_groups");


		// Create a new post
		if (!empty($_POST['news-submit'])) {
			$inputArray = array($_POST['news-title'], $_POST['news-comment']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $message = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{
				$newsPost = $news->push(htmlspecialchars($_POST['news-title']), htmlspecialchars($_POST['news-comment']), date('l jS \of F Y'));
				if ($newsPost == true) {
					$groups->mailUsers("beavers", "post", htmlspecialchars($_POST['news-title']), htmlspecialchars($_POST['news-comment']));
					// header('Location: ../beavers/');
				} else{
					$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
				}
			}
		}


		// Delete a post
		if (!empty($_POST['news-delete-submit'])) {
			$newsDelete = $news->delete($_POST['news-delete-id']);
			if ($newsDelete == true) {
				// header('Location: ../beavers/');
			} else{
				$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
			}
		}


		// Change a post 
		if (isset($_POST['news-update-change-submit'])) {
			$newsUpdate = $news->update($_POST['news-update-id'], $_POST['news-update-title'], $_POST['news-update-comment']);
		}
	
?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Beavers</title>
		<link rel="stylesheet" type="text/css" href="../../../../_templates/default/css/main.private.css">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<meta charset="UTF-8">
		<meta name="robots" content="noindex, follow">
		<script type="text/javascript" src="../../../../_js/jquery.2.1.4.js"></script>
		<script type="text/javascript" src="../../../../_js/animate.js"></script>
		<script type="text/javascript" src="../../../../_js/jquery.smoothState.js"></script>
		<script type="text/javascript" src="../../../../_js/page-transition.js"></script>
		<style type="text/css">
			.event-delete-input, .event-delete-form{
		        display: inline-block;
		        padding-bottom: 3%;
		      }
		</style>
	</head>

	<body>
		<div class="beavers-header">
			<? include '../../modules/header.php'; ?>
		</div>

		<section class="section-beavers" id='main'>
			
			<div class="beavers-hero">
				<h1><span class="title-highlight">Beavers</span></h1>
			</div>

			<div class="beavers-main-content main-content">
				<div class="beavers-page-nav">
					<ul>
						<a href="photos/" class="photos">
							<li>
								<span class="page-nav-content"><span>Photos<? if($photosCheck > 0){ ?><span class="alert" data-badge="<?= $photosCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="documents/" class="documents">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><span class="alert" data-badge="<?= $documentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>

						<a href="" class="home active">
							<li>
								<span class="page-nav-content"><span>Home<? if($newsCheck > 0){ ?><span class="alert" data-badge="<?= $newsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="calendar/" class="calendar">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
							</li>
						</a>
						<a href="contact/" class="chat">
							<li>
								<span class="page-nav-content"><span>Contact<? if($commentsCheck > 0){ ?><span class="alert" data-badge="<?= $commentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<span class="stretch"></span>
					</ul>
				</div>
				<div class="beavers-page-main anim_element anim_element--fadeInLeft">
					<h2>News</h2>
							<? if ($uid == 2 || $uid == 100) { ?>
								<div class="news-tile">
									<?= $message ?>
									<form method="post" action="" name="news-post">
										<input type="text" name="news-title" class="news-post-input" placeholder="Title">
										<textarea name="news-comment" class="news-post-input" placeholder="Comment"></textarea>
										<input type="submit" class="news-post-input" name="news-submit" value="Post">
									</form>
								</div>
								<hr>
							<? } 

						
							$newsData = $news->pull();

							// var_dump($newsData);
							// echo $newsData['message'];

							foreach ($newsData as $data) {
								?>
								<div class="news-tile">
									
									<? if (!isset($_POST['news-update-submit'])) { ?>
										<h3><?= $data['title'] ?></h3>
										<p><?= $data['comment'] ?></p>
										<i><?= $data['date'] ?></i>
										<? if ($uid == 2 || $uid == 100  || $uid == 100) { ?>
											<form action="" method="post">
												<input type="hidden" name="news-update-id" value="<?= $data['id'] ?>">
												<input type="submit" name="news-update-submit" class="news-update-submit" value="Change">
											</form>
											<form method="post" action="">
												<input type="hidden" name="news-delete-id" value="<?= $data['id'] ?>">
												<input type="submit" name="news-delete-submit" class="news-delete-submit" value="Delete">
											</form>
										<? } 
									} elseif(isset($_POST['news-update-submit'])){
										if ($data['id'] === $_POST['news-update-id']) { ?>
											<form action="" method="post">
												<input type="hidden" name="news-update-id" value="<?= $data['id'] ?>">
												<input type="text" name="news-update-title" value="<?= $data['title'] ?>">
												<textarea name="news-update-comment" style="width: 100%;"><?= $data['comment'] ?></textarea>	<br>
												<i><?= $data['date'] ?></i><br>
													<input type="hidden" name="news-update-change-id" value="<?= $data['id'] ?>">
													<input type="submit" name="news-update-change-submit" class="news-update-submit" value="Submit">
											</form>
												<form method="post" action="">
													<input type="hidden" name="news-delete-id" value="<?= $data['id'] ?>">
													<input type="submit" name="news-delete-submit" class="news-delete-submit" value="Delete">
												</form>
											<?
										 }
									}?>
									
								</div>
								


								<? if (count($newsData) > 1) {?>
									<hr>
								<?} ?>

								<?
							}
						?>
				</div>

				<div class="beavers-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn">Upcoming Events</h2>
					<div class="anim_element anim_element--fadeIn">
						<ul><?
													//START THE LOOP TO LIST EVENTS
						    foreach ($events->getItems() as $event) {
						 
						        //Convert date to month and day
						 
						         $eventDateStr = $event->start->dateTime;
						         if(empty($eventDateStr))
						         {
						             // it's an all day event
						             $eventDateStr = $event->start->date;
						         }
						 
						         $temp_timezone = $event->start->timeZone;
						 //THIS OVERRIDES THE CALENDAR TIMEZONE IF THE EVENT HAS A SPECIAL TZ
						         if (!empty($temp_timezone)) {
						         $timezone = new DateTimeZone($temp_timezone); //GET THE TIME ZONE
						                 //Set your default timezone in case your events don't have one
						     } else { $timezone = new DateTimeZone($calTimeZone);
						         }
						 
						         $eventdate = new DateTime($eventDateStr,$timezone);
						     $link = $event->htmlLink;
						                 $TZlink = $link . "&ctz=" . $calTimeZone; //ADD TZ TO EVENT LINK
						                      //PREVENTS GOOGLE FROM DISPLAYING EVERYTHING IN GMT
						         $newmonth = $eventdate->format("m");//CONVERT REGULAR EVENT DATE TO LEGIBLE MONTH
						         $newday = $eventdate->format("j");//CONVERT REGULAR EVENT DATE TO LEGIBLE DAY
						         $newyear = $eventdate->format("y");//CONVERT REGULAR EVENT DATE TO LEGIBLE YEAR

						         $eventId = $event->getId();
								

						 		?>

						        <li><?= $newday ?>/<?= $newmonth ?>/<?= $newyear ?> - <b><?= $event->summary; ?></b></li>
						
						 <?php
						  }
						 
						?>
						</ul>
					</div>
				</div>
				<div class="spacer" style="clear: both;"></div>
			</div>

		</section>

		<? include '../../modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-beavers").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-beavers").height()/2+"px"});
		});		
	</script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-55858968-1', 'auto');
	  ga('send', 'pageview');
	</script>
</html>

<?
		$seen = $notifications->seen($newsDBH, "beavers");
	}

?>