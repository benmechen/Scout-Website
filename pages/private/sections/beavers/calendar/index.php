<?php

session_start();
	date_default_timezone_set('Europe/London');

	include '../../../../../_config/config.php';

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


		// Set up Calendar
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


		// Set up calendar object
		$calendar = new Calendar('lytchettscoutgroup@gmail.com');


		// Create a new event
	    if (isset($_POST['new-event-submit'])) {
	      $inputArray = array($_POST['new-event-title'], $_POST['new-event-description'], $_POST['new-event-start_dateLists_day_list'], $_POST['new-event-start_dateLists_year_list'], $_POST['new-event-start-time-hour'], $_POST['new-event-end-time-minute'], $_POST['new-event-end_dateLists_day_list'], $_POST['new-event-end_dateLists_year_list']);

	      foreach ($inputArray as $input) {
	        if(empty($input)){
	          // $error = array();
	          // array_push($error, 1);
	        }else{}
	      } if (isset($error) && in_array(1, $error)) {
	        $message = "<span style='color: #800000;'>Please fill in every input.</span>";
	      }else{
	        $title = $_POST['new-event-title'];
	        $description = $_POST['new-event-description'];

	        $startMonthAdjust = intval($_POST['new-event-start_dateLists_month_list']);
	        $startMonthAdjust = $startMonthAdjust + 1;
	        $startMonthAdjust = strval($startMonthAdjust);

	        $startDate = $_POST['new-event-start_dateLists_year_list'] . "-" . $startMonthAdjust . "-" . $_POST['new-event-start_dateLists_day_list'];
	        $startHourAdjust = $_POST['new-event-start-time-hour'];

	        $bool = date(I, strtotime($startDate));

	        $startTime = "T" . $startHourAdjust . ":" . $_POST['new-event-start-time-minute'] . ":00+0" . $bool;
	        $startDateTime = $startDate . $startTime;


			$bool = date(I, strtotime($DateTime));

	        $endMonthAdjust = intval($_POST['new-event-end_dateLists_month_list']);
	        $endMonthAdjust = $endMonthAdjust + 1;
	        $endMonthAdjust = strval($endMonthAdjust);

	        $endDate = $_POST['new-event-end_dateLists_year_list'] . "-" . $endMonthAdjust . "-" . $_POST['new-event-end_dateLists_day_list'];

	        $bool = date(I, strtotime($endDate));

	        $endTime = "T" . $_POST['new-event-end-time-hour'] . ":" . $_POST['new-event-end-time-minute'] . ":00+0" . $bool;
	        $endDateTime = $endDate . $endTime;


	        $newevent = $calendar->push($title, $description, $startDateTime, $endDateTime , 'lytchettscoutgroup@gmail.com');

	        header('Location: ../calendar/');
	      }
	    }


	    // Delete an event
	    if(isset($_POST['event-delete-submit'])){
	      $deleteevent = $calendar->delete('lytchettscoutgroup@gmail.com', $_POST['event-delete-id']);
	      
	      header('Location: ../calendar/');
	    }
		

?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Beavers - Calendar</title>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
		<link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/_lightbox.css">
		<meta charset="UTF-8">
		<meta name="robots" content="noindex, follow">
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.2.1.4.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/animate.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.smoothState.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/page-transition.js"></script>
    <link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.dateLists.css">
    <script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.dateLists.min.js"></script>
		<!-- CSS adjustments for browsers with JavaScript disabled -->
		<noscript><link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.fileupload-noscript.css"></noscript>
		<noscript><link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.fileupload-ui-noscript.css"></noscript>
		<style type="text/css">
			.calendar{
				height: 100vh;
				border: none;
			}
		    .event-select-time{
			    width: 48%;
		    }
		    .event-delete-input, .event-delete-form{
			    display: inline-block;
			    padding-bottom: 3%;
		    }
		</style>	
    <script type="text/javascript">  
   $().ready(function() {  
       $('#new-event-start').dateDropDowns({ dateFormat: 'dd-MM-yy', defaultCurrentDate: true, yearStart:new Date().getFullYear()-10, yearEnd:new Date().getFullYear()+10 });
       $('#new-event-end').dateDropDowns({ dateFormat: 'dd-MM-yy', defaultCurrentDate: true, yearStart:new Date().getFullYear()-10, yearEnd:new Date().getFullYear()+10 });
   });
  </script> 
    
	</head>

	<body onload="">
		<div class="beavers-header">
			<? include '../../../modules/header.php'; ?>
		</div>

		<section class="section-beavers" id='main'>
			
			<div class="beavers-hero">
				<h1><span class="title-highlight">Beavers</span></h1>
			</div>

			<div class="beavers-main-content main-content">
				<div class="beavers-page-nav">
					<ul>
						<a href="../" class="home">
							<li>
								<span class="page-nav-content"><span>Home<? if($newsCheck > 0){ ?><span class="alert" data-badge="<?= $newsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../photos/" class="photos">
							<li>
								<span class="page-nav-content"><span>Photos<? if($photosCheck > 0){ ?><small><span class="alert" data-badge="<?= $photosCheck ?>"></span></small><? } ?></span></span>
							</li>
						</a>
						<a href="" class="calendar active">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
							</li>
						</a>
						<a href="../documents/" class="documents">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><small><span class="alert" data-badge="<?= $documentsCheck ?>"></span></small><? } ?></span></span>
							</li>
						</a>
						<a href="../contact/" class="chat">
							<li>
								<span class="page-nav-content"><span>Contact<? if($commentsCheck > 0){ ?><span class="alert" data-badge="<?= $commentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<span class="stretch"></span>
					</ul>
				</div>
				<h2 class="anim_element anim_element--fadeInLeft">Calendar</h2>

				

				<div class="beavers-page-main anim_element anim_element--fadeInLeft">
					<iframe src="calendar.php" width="100%" class="calendar"></iframe>
					<!-- <iframe src="https://calendar.google.com/calendar/embed?showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%236acce0&amp;src=lytchettscoutgroup%40gmail.com&amp;color=%23fffff&amp;ctz=Europe%2FLondon" style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no" class="calendar"></iframe>			 -->
					
				</div>

				<div class="beavers-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn">Upcoming Events</h2>
					<div class="anim_element anim_element--fadeIn">
						<ul><?
							// $calendarList = $calendar->pull();
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
						        <li><?= $newday ?>/<?= $newmonth ?>/<?= $newyear ?> - <b><?= $event->summary; ?></b><? if ($uid == 2 || $uid == 100  || $uid == 100) {?> - <form action="" method="post" class="event-delete-form"><input type="hidden" value="<?=$eventId?>" name="event-delete-id"><input type="submit" value="Delete" name="event-delete-submit" class="event-delete-input"></form><? } ?></li>
							<?php
							  }
							
		               if ($uid == 2 || $uid == 100  || $uid == 100) {
		                ?>
									<div class="calendar-form-container">

		                <p><h3><button id="event-add">Add a new event:</button></h3></p>
		                <?=$message?>
						<form method="post" action="" style="display:none;" id="new-event-form">
		                  
							<input type="text" name="new-event-title" placeholder="Event Title" required="required">

					      <p>Start Date:</p>
							<input type="text" id="new-event-start" placeholder="Event Date" required="required">
											
		                  <p>Start Time:</p>
		                  <select name="new-event-start-time-hour" class="event-select-time" required="required">
		                    <option value="" selected disabled>Select Hour</option>
		                    <option value="00">00</option>
		                    <option value="01">01</option>
		                    <option value="02">02</option>
		                    <option value="03">03</option>
		                    <option value="04">04</option>
		                    <option value="05">05</option>
		                    <option value="06">06</option>
		                    <option value="07">07</option>
		                    <option value="08">08</option>
		                    <option value="09">09</option>
		                    <option value="10">10</option>
		                    <option value="11">11</option>
		                    <option value="12">12</option>
		                    <option value="13">13</option>
		                    <option value="14">14</option>
		                    <option value="15">15</option>
		                    <option value="16">16</option>
		                    <option value="17">17</option>
		                    <option value="18">18</option>
		                    <option value="19">19</option>
		                    <option value="20">20</option>
		                    <option value="21">21</option>
		                    <option value="22">22</option>
		                    <option value="23">23</option>
		                  </select>:
		                  <select name="new-event-start-time-minute" class="event-select-time" required="required">
		                    <option value="" selected disabled>Select Minute</option>
		                    <option value="00">00</option>
		                    <option value="01">01</option>
		                    <option value="02">02</option>
		                    <option value="03">03</option>
		                    <option value="04">04</option>
		                    <option value="05">05</option>
		                    <option value="06">06</option>
		                    <option value="07">07</option>
		                    <option value="08">08</option>
		                    <option value="09">09</option>
		                    <option value="10">10</option>
		                    <option value="11">11</option>
		                    <option value="12">12</option>
		                    <option value="13">13</option>
		                    <option value="14">14</option>
		                    <option value="15">15</option>
		                    <option value="16">16</option>
		                    <option value="17">17</option>
		                    <option value="18">18</option>
		                    <option value="19">19</option>
		                    <option value="20">20</option>
		                    <option value="21">21</option>
		                    <option value="22">22</option>
		                    <option value="23">23</option>
		                    <option value="24">24</option>
		                    <option value="25">25</option>
		                    <option value="26">26</option>
		                    <option value="27">27</option>
		                    <option value="28">28</option>
		                    <option value="29">29</option>
		                    <option value="30">30</option>
		                    <option value="31">31</option>
		                    <option value="32">32</option>
		                    <option value="33">33</option>
		                    <option value="34">34</option>
		                    <option value="35">35</option>
		                    <option value="36">36</option>
		                    <option value="37">37</option>
		                    <option value="38">38</option>
		                    <option value="39">39</option>
		                    <option value="40">40</option>
		                    <option value="41">41</option>
		                    <option value="42">42</option>
		                    <option value="43">43</option>
		                    <option value="44">44</option>
		                    <option value="45">45</option>
		                    <option value="46">46</option>
		                    <option value="47">47</option>
		                    <option value="48">48</option>
		                    <option value="49">49</option>
		                    <option value="50">50</option>
		                    <option value="51">51</option>
		                    <option value="52">52</option>
		                    <option value="53">53</option>
		                    <option value="54">54</option>
		                    <option value="55">55</option>
		                    <option value="56">56</option>
		                    <option value="57">57</option>
		                    <option value="58">58</option>
		                    <option value="59">59</option>
		                  </select>
		                  <p>End Date:</p>
		                  <input type="text" id="new-event-end" placeholder="Event End Date" required="required">
		                  
		                  <p>End Time:</p>
		                  <select name="new-event-end-time-hour" class="event-select-time" required="required">
		                    <option value="" selected disabled>Select Hour</option>
		                    <option value="00">00</option>
		                    <option value="01">01</option>
		                    <option value="02">02</option>
		                    <option value="03">03</option>
		                    <option value="04">04</option>
		                    <option value="05">05</option>
		                    <option value="06">06</option>
		                    <option value="07">07</option>
		                    <option value="08">08</option>
		                    <option value="09">09</option>
		                    <option value="10">10</option>
		                    <option value="11">11</option>
		                    <option value="12">12</option>
		                    <option value="13">13</option>
		                    <option value="14">14</option>
		                    <option value="15">15</option>
		                    <option value="16">16</option>
		                    <option value="17">17</option>
		                    <option value="18">18</option>
		                    <option value="19">19</option>
		                    <option value="20">20</option>
		                    <option value="21">21</option>
		                    <option value="22">22</option>
		                    <option value="23">23</option>
		                  </select>:
		                  <select name="new-event-end-time-minute" class="event-select-time" required="required">
		                    <option value="" selected disabled>Select Minute</option>
		                    <option value="00">00</option>
		                    <option value="01">01</option>
		                    <option value="02">02</option>
		                    <option value="03">03</option>
		                    <option value="04">04</option>
		                    <option value="05">05</option>
		                    <option value="06">06</option>
		                    <option value="07">07</option>
		                    <option value="08">08</option>
		                    <option value="09">09</option>
		                    <option value="10">10</option>
		                    <option value="11">11</option>
		                    <option value="12">12</option>
		                    <option value="13">13</option>
		                    <option value="14">14</option>
		                    <option value="15">15</option>
		                    <option value="16">16</option>
		                    <option value="17">17</option>
		                    <option value="18">18</option>
		                    <option value="19">19</option>
		                    <option value="20">20</option>
		                    <option value="21">21</option>
		                    <option value="22">22</option>
		                    <option value="23">23</option>
		                    <option value="24">24</option>
		                    <option value="25">25</option>
		                    <option value="26">26</option>
		                    <option value="27">27</option>
		                    <option value="28">28</option>
		                    <option value="29">29</option>
		                    <option value="30">30</option>
		                    <option value="31">31</option>
		                    <option value="32">32</option>
		                    <option value="33">33</option>
		                    <option value="34">34</option>
		                    <option value="35">35</option>
		                    <option value="36">36</option>
		                    <option value="37">37</option>
		                    <option value="38">38</option>
		                    <option value="39">39</option>
		                    <option value="40">40</option>
		                    <option value="41">41</option>
		                    <option value="42">42</option>
		                    <option value="43">43</option>
		                    <option value="44">44</option>
		                    <option value="45">45</option>
		                    <option value="46">46</option>
		                    <option value="47">47</option>
		                    <option value="48">48</option>
		                    <option value="49">49</option>
		                    <option value="50">50</option>
		                    <option value="51">51</option>
		                    <option value="52">52</option>
		                    <option value="53">53</option>
		                    <option value="54">54</option>
		                    <option value="55">55</option>
		                    <option value="56">56</option>
		                    <option value="57">57</option>
		                    <option value="58">58</option>
		                    <option value="59">59</option>
		                  </select>
		                  <p>End Description:</p>
		                  
						<textarea placeholder="Event Description" class="news-post-input" name="new-event-description" required="required"></textarea>

		                  <input type="submit" value="Add event" name="new-event-submit">
						</form>
					</div>
		              <? } ?>

		           </ul>
					</div>
				</div>
				<div class="spacer" style="clear: both;"></div>
			</div>

		</section>

		<? include '../../../modules/footer.php'; ?>

	</body>
  
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-beavers").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-beavers").height()/2+"px"});
		});		
	</script>
    <script type="text/javascript">  
     $().ready(function() {  
          $('#test_fld').dateDropDowns({dateFormat:'dd-mm-yy'});  
     });  
  </script>  

  <!-- Make forms required -->
  <script type="text/javascript">
    //Required attribute fallback
    $('#new-event-form').submit(function() {
      if (!attributeSupported("required") || ($.browser.safari)) {
       //If required attribute is not supported or browser is Safari (Safari thinks that it has this attribute, but it does not work), then check all fields that has required attribute
       $("#new-event-form [required]").each(function(index) {
        if (!$(this).val()) {
         //If at least one required value is empty, then ask to fill all required fields.
         alert("Please fill all required fields.");
         return false;
        }
       });
      }
      return false; //This is a test form and I'm not going to submit it
    }); 
  </script>
	<!-- The template to display files available for upload -->
<script id="template-upload" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    <tr class="template-upload fade">
        <td>
            <span class="preview"></span>
        </td>
        <td>
            <p class="name">{%=file.name%}</p>
            <strong class="error text-danger"></strong>
        </td>
        <td>
            <p class="size">Processing...</p>
            <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
        </td>
        <td>
            {% if (!i && !o.options.autoUpload) { %}
                <button class="btn btn-primary start" disabled>
                    <i class="glyphicon glyphicon-upload"></i>
                    <span>Start</span>
                </button>
            {% } %}
            {% if (!i) { %}
                <button class="btn btn-warning cancel">
                    <i class="glyphicon glyphicon-ban-circle"></i>
                    <span>Cancel</span>
                </button>
            {% } %}
        </td>
    </tr>
{% } %}
</script>
<!-- The template to display files available for download -->
<script id="template-download" type="text/x-tmpl">
{% for (var i=0, file; file=o.files[i]; i++) { %}
    
{% } %}
</script>


<!--Toggle event add form on click-->
<script>
	$(document).ready(function(){
	    $("#event-add").click(function(){
	        $("#new-event-form").slideToggle("slow");
	    });
      $("#event-delete").click(function(){
          $("#delete-event-form").slideToggle("slow");
      });
	});
</script>



<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="<?=$_PUBLIC_DIR?>_js/vendor/jquery.ui.widget.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="//blueimp.github.io/JavaScript-Templates/js/tmpl.min.js"></script>
<!-- The Load image plugin is included for the preview images and image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js"></script>
<!-- The Canvas to Blob plugin is included for image resizing functionality -->
<script src="//blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js"></script>
<!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.iframe-transport.js"></script>
<!-- The basic File Upload plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload.js"></script>
<!-- The File Upload processing plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-process.js"></script>
<!-- The File Upload image preview & resize plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-image.js"></script>
<!-- The File Upload audio preview plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-audio.js"></script>
<!-- The File Upload video preview plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-video.js"></script>
<!-- The File Upload validation plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-validate.js"></script>
<!-- The File Upload user interface plugin -->
<script src="<?=$_PUBLIC_DIR?>_js/jquery.fileupload-ui.js"></script>
<!-- The main application script -->
<script src="<?=$_PUBLIC_DIR?>_js/upload-main.js"></script>

<script src="<?=$_PUBLIC_DIR?>_js/lightbox.js"></script>
<!-- The XDomainRequest Transport is included for cross-domain file deletion for IE 8 and IE 9 -->
<!--[if (gte IE 8)&(lt IE 10)]>
<script src="<?=$_PUBLIC_DIR?>_js/cors/jquery.xdr-transport.js"></script>
<![endif]-->

<!-- <script>
// 	$(function () {
// 	 $('#fileupload').fileupload({
// 		 dataType: 'json',
// 		 formData: [{ name: 'custom_dir', value: '/Scout_Website_v2.0/pages/private/sections/beavers/photos/New Folder/' }],
// 		 done: function (e, data) {
// 			 $.each(data.result.files, function (index, file) {
// 			 $('<p/>').text(file.name).appendTo(document.body);
// 		 });
// 		 }
// 	 });
// 	});
</script>-->

<script type="text/javascript">
	$('#fileupload')
    .bind('fileuploadadd', function (e, data) {/* ... */})
    .bind('fileuploadsubmit', function (e, data) {data.formData = data.context.find(':input').serializeArray();})
    .bind('fileuploadsend', function (e, data) {/* ... */})
    .bind('fileuploaddone', function (e, data) {})
    .bind('fileuploadcompleted', function (e, data) {/*location.reload() ... */})
    .bind('fileuploadfail', function (e, data) {/* ... */})
    .bind('fileuploadalways', function (e, data) {/* ... */})
    .bind('fileuploadprogress', function (e, data) {/* ... */})
    .bind('fileuploadprogressall', function (e, data) {/* ... */})
    .bind('fileuploadstart', function (e) {/* ... */})
    .bind('fileuploadstop', function (e) {location.reload();/* ... */})
    .bind('fileuploadchange', function (e, data) {/* ... */})
    .bind('fileuploadpaste', function (e, data) {/* ... */})
    .bind('fileuploaddrop', function (e, data) {/* ... */})
    .bind('fileuploaddragover', function (e) {/* ... */})
    .bind('fileuploadchunksend', function (e, data) {/* ... */})
    .bind('fileuploadchunkdone', function (e, data) {/* ... */})
    .bind('fileuploadchunkfail', function (e, data) {/* ... */})
    .bind('fileuploadchunkalways', function (e, data) {/* ... */});
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

		$seen = $notifications->seen($documentsDBH, "beavers");

	}

?>