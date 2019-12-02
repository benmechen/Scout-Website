<?php

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

		$photosCheck = $notifications->checkGroup($photosDBH, "explorers");

		$newsCheck = $notifications->checkGroup($newsDBH, "explorers");

		$documentsCheck = $notifications->checkGroup($documentsDBH, "explorers");

		$commentsCheck = $notifications->checkGroup($commentsDBH, "explorers");

		// Setup news
		$comments = new comments("explorers", $commentsDBH);


		// Create a new post
		if (!empty($_POST['comments-submit'])) {
			$inputArray = array($_POST['comments-name'], $_POST['comments-title'], $_POST['comments-comment']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $messageComment = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{
				$commentsPost = $comments->push(htmlspecialchars($_POST['comments-name']), htmlspecialchars($_POST['comments-title']), htmlspecialchars($_POST['comments-comment']), date('l jS \of F Y'));
				if ($commentsPost == true) {
					// header('Location: ../explorers/');
				} else{
					$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
				}
			}
		}


		// Delete a post
		if (!empty($_POST['comments-delete-submit'])) {
			$commentsDelete = $comments->delete($_POST['comments-delete-id']);
			if ($commentsDelete == true) {
				// header('Location: ../explorers/');
			} else{
				$message = "<span style='color: #800000;'>Something went wrong. Please try again.</span>";
			}
		}

		// Add a new comment
		if (isset($_POST['new-comments-submit'])) {
			$inputArray = array($_POST['new-comments-name'], $_POST['new-comments-text']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $messageComments = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{
		    	$commentAdd = $comments->commentAdd($_POST['new-comments-id'], $_POST['new-comments-name'], $_POST['new-comments-text'], date('d/m/Y'));
		    }
		}

		// Delete a comment
		if (isset($_POST['comment-delete-submit'])) {
			$inputArray = array($_POST['comment-delete-id'], $_POST['comment-delete-comment']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {

		    }else{
		    	$commentDelete = $comments->commentDelete($_POST['comment-delete-id'], $_POST['comment-delete-comment']);
		    }
		}

		// Send email
		if (isset($_POST['email-submit'])) {
			$inputArray = array($_POST['email-name'], $_POST['email-email'], $_POST['email-title'], $_POST['email-comment']);

		    foreach ($inputArray as $input) {
			    if(empty($input)){
				    $error = array();
				    array_push($error, 1);
			    }else{}
		    } 

		    if (isset($error) && in_array(1, $error)) {
			    $messageEmail = "<span style='color: #800000;'>Please fill in every input.</span>";
		    }else{
		    	if (!filter_var($_POST['email-email'], FILTER_VALIDATE_EMAIL)) {
					$messageEmail = "<span style='color: #800000;'>Invalid email format</span>"; 
				}else{
			    	$to = "thebrightsideesu@gmail.com";
					$subject = "Scout Website Contact | New Private Message";
					$message = "
								<html>
									<head>
										<title>1st Lytchett Matravers Scout Group | Contact</title>
									</head>
									<body>
										<h1>". htmlspecialchars($_POST['email-title']) ."</h1>
										<div>
											<b>From: </b> ". htmlspecialchars($_POST['email-name']) ."<br>
											<b>Email: </b> ". htmlspecialchars($_POST['email-email']) ."<br>
											<b>Sent: </b> ". date('l jS \of F Y') ."
											<br><br>
											<b>Message: </b><br>". htmlspecialchars($_POST['email-comment']) ."
											<hr>
											<small>Sent using 1st Lytchett Matravers Scout Group's private group email.</small>
										</div>
									</body>
								</html>
								";
				
					$headers = "MIME-Version: 1.0" . "\r\n";
					$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
					$headers .= "From: contact@1stlytchettscoutgroup.co.uk" . "\r\n";


					mail($to,$subject,$message,$headers);
				}
		    }
		}

?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Explorers - Contact</title>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
		<link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/_lightbox.css">
		<meta charset="UTF-8">
		<meta name="robots" content="noindex, follow">
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.2.1.4.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/animate.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/jquery.smoothState.js"></script>
		<script type="text/javascript" src="<?=$_PUBLIC_DIR?>_js/page-transition.js"></script>
		<link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.fileupload.css">
		<!-- CSS adjustments for browsers with JavaScript disabled -->
		<noscript><link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.fileupload-noscript.css"></noscript>
		<noscript><link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/jquery.fileupload-ui-noscript.css"></noscript>
		<style type="text/css">
			input.news-post-input-row{
				display: inline-block;
				width: 49%;
			}

			.comments-text{
				width: 100%;
				height: 9em;
			}

			/*input, textarea{*/
				/*padding: 1%;*/
			/*}*/
		</style>
	</head>

	<body>
		<div class="explorers-header">
			<? include '../../../modules/header.php'; ?>
		</div>

		<section class="section-explorers" id='main'>
			
			<div class="explorers-hero">
				<h1><span class="title-highlight">Explorers</span></h1>
			</div>

			<div class="explorers-main-content main-content">
				<div class="explorers-page-nav">
					<ul>
						<a href="../" class="home">
							<li>
								<span class="page-nav-content"><span>Home<? if($newsCheck > 0){ ?><span class="alert" data-badge="<?= $newsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../photos/" class="photos">
							<li>
								<span class="page-nav-content"><span>Photos<? if($pho > 0){ ?><small><span class="alert" data-badge="<?= $photosCheck ?>"></span></small><? } ?></span></span>
							</li>
						</a>
						<a href="" class="chat active">
							<li>
								<span class="page-nav-content"><span>Contact<? if($commentsCheck > 0){ ?><span class="alert" data-badge="<?= $commentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../documents/" class="documents">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><small><span class="alert" data-badge="<?= $documentsCheck ?>"></span></small><? } ?></span></span>
							</li>
						</a>
						
						<a href="../calendar/" class="calendar">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
							</li>
						</a>
						<span class="stretch"></span>
					</ul>
				</div>
				<h2 class="anim_element anim_element--fadeInLeft">Contact Others</h2>
				<div class="explorers-page-main anim_element anim_element--fadeInLeft">
				
					<div class="news-tile">
						<?= $messageComment ?>
						<form method="post" action="" class="new-comment-form" name="comment-post">
							<input type="text" name="comments-name" class="news-post-input news-post-input-row" placeholder="Your Name">
							<input type="text" name="comments-title" class="news-post-input news-post-input-row" placeholder="Title">
							<textarea name="comments-comment" class="news-post-input" placeholder="Comment"></textarea>
							<input type="submit" class="news-post-input" name="comments-submit" value="Post">
						</form>
					</div>
					<h3>Comments</h3>
					<?
					$commentsData = $comments->pull();

					if (count($commentsData) < 1) {
						echo "No Comments";
					}

							foreach ($commentsData as $data) {
								?>
								<div class="news-tile">
									
										<h3><?= $data['title'] ?></h3>
										<p><?= $data['comment'] ?></p>
										<p>Posted by <?= $data['name'] ?></p><i><?= $data['date'] ?></i>

										<? if ($uid == 2 || $uid == 100) { ?>
											<form method="post" action="">
												<input type="hidden" name="comments-delete-id" value="<?= $data['id'] ?>">
												<input type="submit" name="comments-delete-submit" class="news-delete-submit" value="Delete">
											</form>
										<? } ?>	
										<a class="comments-link" style="cursor:pointer;">Comments+</a>
										<br>
										<div class="comments-box" style="display:none;">
											<br>
											<?= $messageComments ?>
											<form action="" method="post" class="comment-add-form">
												<input type="hidden" name="new-comments-id" value="<?= $data['id'] ?> class="news-post-input"">
												<input type="text" name="new-comments-name" placeholder="Your Name" class="news-post-input">
												<textarea name="new-comments-text" class="comments-text" placeholder="Your Comment"></textarea>
												<input type="submit" name="new-comments-submit" placeholder="Post" class="news-post-input">
											</form>
											<? 
											$comments = explode('|', $data['comments']);
											unset($comments[0]);
											foreach ($comments as $comment) { 
												$commentSections = explode("->", $comment);												
											?>
												<p><b><?= $commentSections[0] ?></b></p>
												<p><?= $commentSections[1] ?>
												<br><i><?= $commentSections[2] ?></i></p>
												<? if ($uid == 2 || $uid == 100) { ?>
													<form method="post" action="">
														<input type="hidden" name="comment-delete-id" value="<?= $data['id'] ?>">
														<input type="hidden" name="comment-delete-comment" value="<?= $comment ?>">
														<input type="submit" name="comment-delete-submit" class="news-delete-submit" value="Delete">
													</form>
												<? } ?>
												<hr>
											<? }
											 ?>

										</div>								
								</div>
								


								<? if (count($commentsData) > 1) {?>
									<hr>
								<?} ?>

								<?
							}
						?>
				</div>

				<div class="explorers-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn">Email Explorers Leaders</h2>
					<div class="anim_element anim_element--fadeIn">
						<div class="leaders-email-container">
							<?= $messageEmail ?>
							<form method="post" action="" name="news-post">
								<input type="text" name="email-name" class="news-post-input news-post-input-row" placeholder="Your Name">
								<input type="email" name="email-email" class="news-post-input news-post-input-row" placeholder="Your Email">
								<br><br>
								<input type="text" name="email-title" class="news-post-input" placeholder="Subject">
								<textarea name="email-comment" class="email-leaders-text" placeholder="Comment"></textarea>
								<input type="submit" class="news-post-input" name="email-submit" value="Post">
							</form>
						</div>
					</div>
						
				</div>
				<div class="spacer" style="clear: both;"></div>
			</div>

		</section>

		<? include '../../../modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-explorers").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-explorers").height()/2+"px"});
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


<!--Toggle rename form on click-->
<script>
	$(document).ready(function(){
	    $(".rename-element").click(function(){
	        $(".rename-form").slideToggle("slow");
	    });
	    $(".comments-link").click(function(){
	        $(".comments-box").slideToggle("slow");
	    });
	});
</script>



	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
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
// 		 formData: [{ name: 'custom_dir', value: '/Scout_Website_v2.0/pages/private/sections/explorers/photos/New Folder/' }],
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

		$seen = $notifications->seen($commentsDBH, "explorers");

	}

?>