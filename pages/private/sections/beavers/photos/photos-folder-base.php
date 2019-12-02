<?php
	session_start();

	include '../../../../../../_config/config.php';

	$_SESSION["upload_dir"] = $_SERVER['REQUEST_URI'];

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

		// Notifications setup
		$notifications = new Notifications($_SERVER['REMOTE_ADDR']);

		$photosCheck = $notifications->checkGroup($photosDBH, "beavers");

		$newsCheck = $notifications->checkGroup($newsDBH, "beavers");

		$documentsCheck = $notifications->checkGroup($documentsDBH, "beavers");

		$commentsCheck = $notifications->checkGroup($commentsDBH, "beavers");

		$photosFolders = new Dir('beavers', $photosDBH);

		$photosData = $photosFolders->pullInfo($dir);

		// Delete individual files
		if(isset($_POST['photos-delete-submit'])){
			$file = $_POST['photos-delete-name'];
			unlink($file);
		}

		if (isset($_POST['download'])) {
			$dirname = "";
			$files = array();
			$images = glob($dirname."*.{jpg,gif,png,JPG,GIF,PNG,mp4,MP4,jpeg,JPEG}", GLOB_NOSORT + GLOB_BRACE);
			
			foreach($images as $image) { 		
				array_push($files, $image);
			}

			array_push($files, "../../../../readme.txt");
 	
			$valid_files = array();
			if(is_array($files)) {
			    foreach($files as $file) {
			        if(file_exists($file)) {
			            $valid_files[] = $file;
			        }
			    }
			}
			 
			if(count($valid_files > 0)){
			    $zip = new ZipArchive();
			    $zip_name = $dir . ".zip";
			    if($zip->open($zip_name, ZIPARCHIVE::CREATE)!==TRUE){
			        $error .= "* Sorry ZIP creation failed at this time";
			    }
			     
			    foreach($valid_files as $file){
			        $zip->addFile($file);
			    }
			     
			    $zip->close();
			    if(file_exists($zip_name)){
			        // force to download the zip
			        header("Pragma: public");
			        header("Expires: 0");
			        header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
			        header("Cache-Control: private",false);
			        header('Content-type: application/zip');
			        header('Content-Disposition: attachment; filename="'.$zip_name.'"');
			        readfile($zip_name);
			        // remove zip file from temp path
			        unlink($zip_name);
			    }
			 
			} else {
			    echo "No valid files to zip";
			}
		}

		if (isset($_POST['rename-submit'])) {

			$filename = $_POST['rename-newname'] . "." . $_POST['rename-extension'];

			if ($pos = strrpos($filename, '.')) {
	           $name = substr($filename, 0, $pos);
	           $ext = substr($filename, $pos);
		    } else {
		           $name = $filename;
		    }

		    $newpath = $filename;
		    $newname = $filename;
		    $counter = 1;
		    while (file_exists($newpath)) {
	           $newname = $name .'('. $counter . ')' . $ext;
	           $newpath = $newname;
	           $counter++;
		    }

			rename($_POST['rename-oldname'], $newname);

		}
		

?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Beavers - <?=$dir?></title>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">
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
			audio,
			canvas,
			progress,
			video {
				display: inline-block;
				vertical-align: baseline;
			}
			@-webkit-keyframes progress-bar-stripes {
				from {
				    background-position: 40px 0;
				}
				to {
				    background-position: 0 0;
				}
			}
			@-o-keyframes progress-bar-stripes {
				from {
				    background-position: 40px 0;
				}
				to {
				    background-position: 0 0;
				}
			}
			@keyframes progress-bar-stripes {
				from {
				    background-pition: 40px 0;
				}
				to {
				    background-sition: 0 0;
				}
			}
			.progress {
				height: 20px;
				margin-bottom: 20px;
				overflow: hidden;
				background-color: #f5f5f5;
				border-radius: 4px;
				-webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
		        		box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
			}
			.progress-bar {
				float: left;
				width: 0;
				height: 100%;
				font-size: 12px;
				line-height: 20px;
				color: #fff;
				text-align: center;
				background-color: #428bca;
				-webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
						box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
				-webkit-transition: width .6s ease;
					 -o-transition: width .6s ease;
						transition: width .6s ease;
			}
			.progress-striped .progress-bar,
			.progress-bar-striped {
				background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				-webkit-background-size: 40px 40px;
			    		background-size: 40px 40px;
			}
			.progress.active .progress-bar,
			.progress-bar.active {
			-webkit-animation: progress-bar-stripes 2s linear infinite;
		    	 -o-animation: progress-bar-stripes 2s linear infinite;
			        animation: progress-bar-stripes 2s linear infinite;
			}
			.progress-bar[aria-valuenow="1"],
			.progress-bar[aria-valuenow="2"] {
				min-width: 30px;
			}
			.progress-bar[aria-valuenow="0"] {
				min-width: 30px;
				color: #777;
				background-color: transparent;
				background-image: none;
				-webkit-box-shadow: none;
				        box-shadow: none;
			}
			.progress-bar-success {
				background-color: #5cb85c;
			}
			.progress-striped .progress-bar-success {
			    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			    background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			    background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			}
			.progress-bar-info {
				background-color: #5bc0de;
			}
			.progress-striped .progress-bar-info {
				background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			}
			.progress-bar-warning {
				background-color: #f0ad4e;
			}
			.progress-striped .progress-bar-warning {
				background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			}
			.progress-bar-danger {
				background-color: #d9534f;
			}
			.progress-striped .progress-bar-danger {
				background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
				background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
			}
		</style>
	</head>

	<body>
		<div class="beavers-header">
			<? include '../../../../modules/header.php'; ?>
		</div>

		<section class="section-beavers" id='main'>
			
			<div class="beavers-hero">
				<h1><span class="title-highlight">Beavers</span></h1>
			</div>

			<div class="beavers-main-content main-content">
				<div class="beavers-page-nav">
					<ul>
						<a href="../../" class="home">
							<li>
								<span class="page-nav-content"><span>Home<? if($newsCheck > 0){ ?><span class="alert" data-badge="<?= $newsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../../documents/" class="documents">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><span class="alert" data-badge="<?= $documentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../" class="photos active">
							<li>
								<span class="page-nav-content"><span>Photos<? if($photosCheck > 0){ ?><span class="alert" data-badge="<?= $photosCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<a href="../../calendar/" class="calendar">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
							</li>
						</a>
						<a href="../../contact/" class="chat">
							<li>
								<span class="page-nav-content"><span>Contact<? if($commentsCheck > 0){ ?><span class="alert" data-badge="<?= $commentsCheck ?>"></span><? } ?></span></span>
							</li>
						</a>
						<span class="stretch"></span>
					</ul>
				</div>
				<h2 class="anim_element anim_element--fadeInLeft"><?= $dir ?></h2>

				

				<div class="beavers-page-main anim_element anim_element--fadeInLeft">
				
					<div class="grid photos">
		
						<?
							$dirname = "";
							$images = glob($dirname."*.{jpg,gif,png,JPG,GIF,PNG,mp4,MP4,jpeg,JPEG}", GLOB_NOSORT + GLOB_BRACE);
							if (count($images) < 1) {
								echo "No images";
							}else{
								foreach($images as $image) { 
									$name = explode(".", $image);
									?>						
									<div  class="photos-tile-photo grid-item">
										<a href="<?=$image?>" class="photo-container" data-lightbox="<?= $dir ?>" data-title="<?=$name['0']?>">
											
												<img class="photos-tile-img" src="<?=$image?>">
												<?= $name['0'] ?>
											
										</a>

										<? if ($uid == 2 || $uid == 100  || $uid == 100) {?>
											<small style="cursor: pointer;" class="rename-element">(rename)</small>
											<form method="post" action="" class="rename-form">
												<input type="input" name="rename-newname" placeholder="New Name">
												<input type="hidden" name="rename-oldname" value="<?= $image ?>">
												<input type="hidden" name="rename-extension" value="<?= $name['1'] ?>">
												<input type="submit" name="rename-submit" value="Change">
											</form>
											<form method="post" action="">
												<input type="hidden" name="photos-delete-name" value="<?= $image ?>">
												<input type="submit" name="photos-delete-submit" class="news-delete-submit" value="Delete">
											</form>
										<? } ?>
									</div>

								<? } 
							} 
						?>
								
									
						
					</div>					
					
				</div>

				<div class="beavers-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn"><?= $dir ?></h2>
					<div class="anim_element anim_element--fadeIn">
						<p><?= count($images) ?> image<? if(count($images) != 1){echo "s";} ?>, created on <?= $photosData['date'] ?>.</p>
						<p><b>Description:</b> <?= $photosData['comment'] ?></p>
						<p>
							<form method="post" action="" class="sidebar-form">
								<input type="submit" name="download" class="download-input" value="Download All">
							</form>
						</p>
						<br>
						
						
						<!-- The file upload form used as target for the file upload widget -->
						<? if ($uid == 2 || $uid == 100  || $uid == 100) {?>
						<div class="upload-photos-container">
						<h3>Upload photos:</h3>
<noscript>
								<p style="font-weight: bold; color: #800000;">Please enable javascript to upload.</p>
								<style type="text/css">
									#fileupload{
										display: none;
									}
								</style>
							</noscript>

						    <form id="fileupload" action="" method="POST" enctype="multipart/form-data">   
						    	<input type="hidden" name="directory" value="<?= dirname($_SERVER["PHP_SELF"]) ?>">
						        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->
						        <div class="row fileupload-buttonbar">
						            <div class="col-lg-7">
						                <!-- The fileinput-button span is used to style the file input field as button -->
						                <button class="btn btn-success fileinput-button">
						                    <i class="glyphicon glyphicon-plus"></i>
						                    <span>Add files...</span>
						                    <input type="file" name="files[]" multiple>

						                </button>
						                <button type="submit" name="upload-photos-submit" class="btn btn-primary start">
						                    <i class="glyphicon glyphicon-upload"></i>
						                    <span>Start upload</span>
						                </button>
						                <button type="reset" class="btn btn-warning cancel">
						                    <i class="glyphicon glyphicon-ban-circle"></i>
						                    <span>Cancel upload</span>
						                </button>
						                
						                <!-- The global file processing state -->
						                <span class="fileupload-process"></span>
						            </div>
						            <br>
						            <!-- The global progress state -->
						            <div class="col-lg-5 fileupload-progress fade">
						                <!-- The global progress bar -->
						                <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
						                    <div class="progress-bar progress-bar-success" style="width:0%;"></div>
						                </div>
						                <!-- The extended global progress state -->
						                <div class="progress-extended">&nbsp;</div>
						            </div>
						        </div>
						        <!-- The table listing the files available for upload/download -->
						        <table role="presentation" class="table table-striped"><tbody class="files"></tbody></table>
						    </form>
						</div>
					    <? } ?>
					
					</div>
				</div>
				<div class="spacer" style="clear: both;"></div>
			</div>

		</section>

		<? include '../../../../modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-beavers").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-beavers").height()/2+"px"});
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
	});
</script>


	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- The jQuery UI widget factory, can be omitted if jQuery UI is already included -->
<script src="<?=$_PUBLIC_DIR?>_js/vendor/jquery.ui.widget.js"></script>
<!-- The Templates plugin is included to render the upload/download listings -->
<script src="//blueimp.github.io/JavaScript-Templates/js/tmpl.min.js"></script>
<!-- The Load Image plugin is included for the preview images and image resizing functionality -->
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

<script>
	$(function () {
	 $('#fileupload').fileupload({
		 dataType: 'json',
		 formData: [{ name: 'custom_dir', value: '/Scout_Website_v2.0/pages/private/sections/beavers/photos/New Folder/' }],
		 done: function (e, data) {
			 $.each(data.result.files, function (index, file) {
			 $('<p/>').text(file.name).appendTo(document.body);
		 });
		 }
	 });
	});
</script>

<script type="text/javascript">
	$('#fileupload')
    .bind('fileuploadadd', function (e, data) {/* ... */})
    .bind('fileuploadsubmit', function (e, data) {/* ... */})
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

	// if (!empty($_POST['directory'])) {
	// 	include($_PUBLIC_DIR . '_includes/upload/server/php/UploadHandler.php');
	// 	$upload_handler = new UploadHandler(dirname(__FILE__));
	// }

	}

?>