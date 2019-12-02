<?php

// include "/Scout_Website_v2.0/_config/config.php";

/***
* Calendar class
* Connects to Google Calendar API using Google Client Library
*/

class Calendar{

	private $calendarId;
	private $client;
	private $cal;
	private $calTimeZone;
	private $transition;

	/***
	* Initiates variables
	*/

	public function __construct($calendarId){

		$this->calTimeZone = "Europe/London";

		date_default_timezone_set($this->calTimeZone);
		// var_dump($transition);
		
		include '../../../../../_includes/google/client library/src/Google/autoload.php';

		$this->calendarId = $calendarId;

		//TELL GOOGLE WHAT WE'RE DOING
	    $this->client = new Google_Client();
	    $this->client->setApplicationName("Scout Website"); //DON'T THINK THIS MATTERS
	    $this->client->setDeveloperKey('AIzaSyBBJ-VYH-x8kJJCQRvdS8vknvFF89QX3us'); //GET AT AT DEVELOPERS.GOOGLE.COM
	    $this->cal = new Google_Service_Calendar($this->client);

	    $calendar = new Google_Service_Calendar_Calendar();
	    $calendar->setTimeZone("UTC");
		
	}

	/***
	* Adds event to calendar
	*/

	public function push($title, $desc, $ev_date, $ev_end, $cal_id){

		$client_id = '712988864625-vhh455rkdcamv0k5nekgujattliuaq0s.apps.googleusercontent.com';
	    $service_account_name = 'account-1@prefab-builder-112618.iam.gserviceaccount.com';
	    $key_file_location = '../../../../../_includes/google/credentials.p12';

	    if (!strlen($service_account_name) || !strlen($key_file_location))
	        echo missingServiceAccountDetailsWarning();

	    $client = new Google_Client();
	    $client->setApplicationName("Scout Website");

	    if (isset($_SESSION['service_token'])) {
	        $client->setAccessToken($_SESSION['service_token']);
	    }

	    $key = file_get_contents($key_file_location);
	    $cred = new Google_Auth_AssertionCredentials(
	        $service_account_name, 
	        array('https://www.googleapis.com/auth/calendar'), 
	        $key
	    );
	    $client->setAssertionCredentials($cred);
	    if($client->getAuth()->isAccessTokenExpired()) {
	        $client->getAuth()->refreshTokenWithAssertion($cred);
	    }
	    $_SESSION['service_token'] = $client->getAccessToken();

	    $calendarService = new Google_Service_Calendar($client);
	    $calendarList = $calendarService->calendarList;

	    $this->calTimeZone = $events->timeZone;

	    //Set the Event data

	    $event = new Google_Service_Calendar_Event();
	    $event->setSummary($title);
	    $event->setDescription($desc);

	    $start = new Google_Service_Calendar_EventDateTime();
	    $start->setDateTime($ev_date);
	    // echo $ev_date;
	    $event->setStart($start);

	    $end = new Google_Service_Calendar_EventDateTime();
	    $end->setDateTime($ev_end);
	    // echo $ev_end;
	    $event->setEnd($end);

	    $createdEvent = $calendarService->events->insert($cal_id, $event);

	    // var_dump($createdEvent);

	}

	/***
	* Deletes posts from database
	*/

	public function delete($cal_id, $userid){
		$client_id = '712988864625-vhh455rkdcamv0k5nekgujattliuaq0s.apps.googleusercontent.com';
	    $service_account_name = 'account-1@prefab-builder-112618.iam.gserviceaccount.com';
	    $key_file_location = '../../../../../_includes/google/credentials.p12';

	    if (!strlen($service_account_name) || !strlen($key_file_location))
	        echo missingServiceAccountDetailsWarning();

	    $client = new Google_Client();
	    $client->setApplicationName("Scout Website");

	    if (isset($_SESSION['service_token'])) {
	        $client->setAccessToken($_SESSION['service_token']);
	    }

	    $key = file_get_contents($key_file_location);
	    $cred = new Google_Auth_AssertionCredentials(
	        $service_account_name, 
	        array('https://www.googleapis.com/auth/calendar'), 
	        $key
	    );
	    $client->setAssertionCredentials($cred);
	    if($client->getAuth()->isAccessTokenExpired()) {
	        $client->getAuth()->refreshTokenWithAssertion($cred);
	    }
	    $_SESSION['service_token'] = $client->getAccessToken();

	    $calendarService = new Google_Service_Calendar($client);
	    $calendarList = $calendarService->calendarList;

	    $this->calTimeZone = $events->timeZone;

	    $calendarService->events->delete($cal_id, $userid);
	}

}