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
?>
<!DOCTYPE html>
<!--[if IE 8 ]><html class="ie" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"><!--<![endif]-->
<head>

	<meta charset="utf-8">

	<title>Explore the Benternet</title>

	<!-- Behavioral Meta Data -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

	<!-- Favicon -->
	<link rel="shortcut icon" href="favicon.png" type="image/png">

	<!-- Apple Touch Icons -->
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144x144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114x114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72x72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-57x57-precomposed.png">

	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Montserrat:700|Cardo' rel='stylesheet' type='text/css'>

	<!-- Styles -->
	<link rel="stylesheet" type="text/css" href="css/loader.css"/>
	<link rel="stylesheet" type="text/css" href="css/normalize.css"/>
	<link rel="stylesheet" type="text/css" href="css/style.css"/>

	<!--[if lt IE 9]>
		<link rel="stylesheet" type="text/css" href="css/ie.css" />
	<![endif]-->

	<!-- Javascript -->
	<script src="js/jquery.js"></script>
	<script>
		function update(){
            $.ajax({ 
	            url: 'update.php',
	            data: {data: 'name'},
	            type: 'post',
	            success: function(output) {
	                document.getElementById('name').innerHTML = output;
	                // window.setTimeout(update,10000)
	            }
            });
            $.ajax({ 
	            url: 'update.php',
	            data: {data: 'members'},
	            type: 'post',
	            success: function(output) {
	                document.getElementById('members').innerHTML = output;
	                // window.setTimeout(update,10000)
	            }
            });
        } update();
	</script>
</head>
<body>

	<div class="preloader">
		<div class="loading">
			<h2>Loading...</h2>
			<span class="progress"></span>
		</div>
		<script type="text/javascript">
			$(window).load(function(){
			     $('.preloader').fadeOut('slow');
			});
		</script>
	</div>
	<div class="wrapper">
		<h3 style="padding: 0.1%;margin:0.1%;text-transform:capitalize;" id="name"></h3><small id="members"></small>
		<ul id="scene" class="scene unselectable"
			data-friction-x="0.1"
			data-friction-y="0.1"
			data-scalar-x="25"
			data-scalar-y="15">
			<li class="layer" data-depth="0.00"></li>
			<!-- BG -->
			<li class="layer" data-depth="0.10"><div class="background"></div></li>
			<li class="layer" data-depth="0.15"><div class="triangles"></div></li>

			<!-- Hero -->
			<li class="layer" data-depth="0.20"><div class="title"><h2>Explore the Benternet</h2><span class="line"></span></div></li>
			<li class="layer" data-depth="0.25"><div class="sphere"><img src="images/sphere.png" alt="sphere"></div></li>
			<li class="layer" data-depth="0.30"><div class="hero"><h1>Hunt the Web.</h1><p class="sub-title">Follow the clues to find the answers.</p></div></li>

			

			<!-- Flakes -->
			<li class="layer" data-depth="0.40">
				<div class="depth-1 flake1"><img src="images/flakes/depth1/flakes1.png" alt="flake"></div>
				<div class="depth-1 flake2"><img src="images/flakes/depth1/flakes2.png" alt="flake"></div>
				<div class="depth-1 flake3"><img src="images/flakes/depth1/flakes3.png" alt="flake"></div>
				<div class="depth-1 flake4"><img src="images/flakes/depth1/flakes4.png" alt="flake"></div>
			</li>
			<li class="layer" data-depth="0.50">
				<div class="depth-2 flake1"><img src="images/flakes/depth2/flakes1.png" alt="flake"></div>
				<div class="depth-2 flake2"><img src="images/flakes/depth2/flakes2.png" alt="flake"></div>
			</li>
			<li class="layer" data-depth="0.60">
				<div class="depth-3 flake1"><img src="images/flakes/depth3/flakes1.png" alt="flake"></div>
				<div class="depth-3 flake2"><img src="images/flakes/depth3/flakes2.png" alt="flake"></div>
				<div class="depth-3 flake3"><img src="images/flakes/depth3/flakes3.png" alt="flake"></div>
				<div class="depth-3 flake4"><img src="images/flakes/depth3/flakes4.png" alt="flake"></div>
			</li>
			<li class="layer" data-depth="0.80"><div class="depth-4"><img src="images/flakes/depth4/flakes.png" alt="flake"></div></li>
			<li class="layer" data-depth="1.00"><div class="depth-5"><img src="images/flakes/depth5/flakes.png" alt="flake"></div></li>
			<li class="layer" data-depth="0.33"><div class="start" style="margin-top:70vh;"><a href="start.php" style="text-decoration:none; border-bottom:2px solid #161a1b;"><h2>Start</h2></a><span class="line"></span></div></li>

		</ul>
	</div>

	<!-- Javascript -->
	<script src="js/plugins.js"></script>
	<script src="js/main.js"></script>
</body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-55858968-1', 'auto');
  ga('send', 'pageview');
</script>
</html>
<?php
}
?>