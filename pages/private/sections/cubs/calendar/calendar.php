<? include '../../../../../_config/config.php'; ?>

<html>
	<head>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">	
		<!-- Calendar -->
		<script>gcal$perf$serverTime=20;gcal$perf$headStartTime=new Date().getTime()</script>
		<link type="text/css" rel="stylesheet" href="//calendar.google.com/calendar/static/602b0e91a1cc907d8548e62cff527beeembedcompiled_fastui.css">
	
		<script type="text/javascript" src="<?= $_PUBLIC_DIR ?>_js/calendar.js"></script>
		<script>function _onload() {window._init({"features":[1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0],"loggedin":true,"cids":{"qj7f5eeb6ugmqe32q5923ujt9o@group.calendar.google.com":{"color":"#182c57","access":70,"title":"Cubs"}},"view":"month","weekstart":1,"format24hour":false,"dateFieldOrder":0,"preloadStart":"","preloadEnd":"","container":"container","baseUrl":"/","imagePath":"images/","timezone":"Europe/London","timezoneLocalized":"London","timezoneOffsetMs":0,"nowMs":"","timezoneNextTransitionMs":"1459040400000","timezoneNextOffsetMs":3600000,"showNavigation":true,"showDateMarker":true,"showTabs":true,"showCalendarMenu":false,"showCurrentTime":true,"showTz":false,"showPrintButton":true,"showElementsLogo":false,"collapseAllday":false,"showSubscribeButton":false,"proxyUrl":"https://clients6.google.com","calendarApiVersion":"v3","developerKey":"AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs"});}</script>
		<script type="text/javascript">
		      var pageLoaded_ = false;
		      var clientLibraryLoaded_ = false;

		      function clientLibraryLoaded() {
		        clientLibraryLoaded_ = true;
		        if (pageLoaded_) _onload();
		      }

		      function pageLoaded() {
		        pageLoaded_ = true;
		        if (clientLibraryLoaded_) _onload();
		      }
		    </script>
		<script type="text/javascript" src="https://apis.google.com/js/client.js?onload=clientLibraryLoaded"></script>
		<style type="text/css">
			.view-cap, .view-container-border{
				background-color: #b7d884;
			}

			.mv-daynames-table{
				background-color: #b7d884;
			}

			.mv-dayname{
				color: white;
			}

		   .logo-plus-button{
				display: none;
			}

			.today-button{
				width: 60%;
			}

			/*.bubble {
		        position: relative;
		        visibility: visible;
		        left:0;
		        top:0;
		        font-size:9pt;
		        width: 50%;
			}*/
			.st-bg { 
				border-left:none; 
			}

			.st-dtitle { 
				border:none; 
				background:white; 
			}

			.date-top{
				padding-left: 2vw;
			}

			.tab-name{
				display: none;
			}

			.view-container-border{
				overflow: hidden;
			}

			html, body{
				background-color: white;
			}
			/*.st-bg-today{
				background-color: white;
				border: none;
			}*/
			.ui-rtsr-unselected, .ui-rtsr-first-tab, .ui-rtsr-name{
				color: black;
			}
	    </style>
	</head>
	<body onload="pageLoaded()">
		<div class="calendar">
			<span id="calendarTitle">Cubs</span>
			<div id="container" style="width:100%" class="locale-en_gb  locale-en "></div>
		</div>
	</body>
</html>