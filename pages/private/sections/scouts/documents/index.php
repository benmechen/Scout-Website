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

		$photosCheck = $notifications->checkGroup($photosDBH, "scouts");

		$newsCheck = $notifications->checkGroup($newsDBH, "scouts");

		$documentsCheck = $notifications->checkGroup($documentsDBH, "scouts");

		$commentsCheck = $notifications->checkGroup($commentsDBH, "scouts");

		// $photosFolders = new Dir('scouts', $photosDBH);

		// $photosData = $photosFolders->pullInfo($dir);

		// Delete individual files
		if(isset($_POST['documents-delete-submit'])){

			$file = $_POST['documents-delete-name'];

			$query = $documentsDBH->prepare("DELETE FROM scouts WHERE title = ?");

			$query->execute(array($file));

			unlink($file);

		}

		// Rename individual files
		if (isset($_POST['rename-submit'])) {

			$query = $documentsDBH->prepare("UPDATE scouts SET title = ?  WHERE title = ?");

			if(!$query->execute(array(htmlspecialchars($_POST['rename-newname']) . "." . $_POST['rename-extension'], $_POST['rename-oldname']))) {

				return false;
		
			}

			rename($_POST['rename-oldname'], htmlspecialchars($_POST['rename-newname']) . "." . $_POST['rename-extension']);
		}
		

?>

<!DOCTYPE html>
<html>
	<head>
		<title>1st Lytchett Matravers Scout Group | Scouts - Documents</title>
		<link rel="stylesheet" type="text/css" href="<?=$_PUBLIC_DIR?>_templates/default/css/main.private.css">
		<link rel="shortcut icon" type="image/png" href="<?= $_PUBLIC_DIR ?>favicon.png">
		<link rel="stylesheet" href="//blueimp.github.io/Gallery/css/blueimp-gallery.min.css">
		<!-- <link rel="stylesheet" href="<?=$_PUBLIC_DIR?>_templates/default/css/1-tools/_lightbox.css"> -->
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
		<div class="scouts-header">
			<? include '../../../modules/header.php'; ?>
		</div>

		<section class="section-scouts" id='main'>
			
			<div class="scouts-hero">
				<h1><span class="title-highlight">Scouts</span></h1>
			</div>

			<div class="scouts-main-content main-content">
				<div class="scouts-page-nav">
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
						<a href="" class="documents active">
							<li>
								<span class="page-nav-content"><span>Documents<? if($documentsCheck > 0){ ?><small><span class="alert" data-badge="<?= $documentsCheck ?>"></span></small><? } ?></span></span>
							</li>
						</a>
						
						<a href="../calendar/" class="calendar">
							<li>
								<span class="page-nav-content"><span>Calendar</span></span>
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
				<h2 class="anim_element anim_element--fadeInLeft">Documents</h2>

				

				<div class="scouts-page-main anim_element anim_element--fadeInLeft">
				
					<div class="grid photos">
		
						<?
							$dirname = "";
							$documents = glob($dirname."*.{jpg,gif,png,JPG,GIF,PNG,mp4,MP4,pdf,PDF,doc,DOC,docx,DOCX,ppt,PPT,pptx,PPTX,xls,XLS,xlsx,XLSX}", GLOB_NOSORT + GLOB_BRACE);
							if (count($documents) < 1) {
								echo "No documents";
							}else{
								foreach($documents as $document) { 
									$name = explode(".", $document);

									$doc = array('doc', 'DOC', 'docx', 'DOCX');
									$ppt = array('ppt', 'PPT', 'pptx', 'PPTX');
									$xls = array('xls', 'XLS', 'xlsx', 'XLSX');

									if (count(array_intersect($name, $doc)) >= 1) {
										$path = "../../../modules/word-icon.png";
									}elseif (count(array_intersect($name, $ppt)) >= 1) {
										$path = "../../../modules/powerpoint-icon.png";
									}elseif (count(array_intersect($name, $xls)) >= 1) {
										$path = "../../../modules/excel-icon.png";
									}else{
										$path = $document;
									}
									?>						
									<div  class="photos-tile-photo grid-item">
										<a href="<?=$document?>" class="photo-container">
											
												<img class="photos-tile-img" src="<?=$path?>">
												<?= $name['0'] ?>
											
										</a>

										<? if ($uid == 2 || $uid == 100) {?>
											<small style="cursor: pointer;" class="rename-element">(rename)</small>
											<form method="post" action="" class="rename-form">
												<input type="input" name="rename-newname" placeholder="New Name">
												<input type="hidden" name="rename-oldname" value="<?= $document ?>">
												<input type="hidden" name="rename-extension" value="<?= $name['1'] ?>">
												<input type="submit" name="rename-submit" value="Change">
											</form>
											<form method="post" action="">
												<input type="hidden" name="documents-delete-name" value="<?= $document ?>">
												<input type="submit" name="documents-delete-submit" class="news-delete-submit" value="Delete">
											</form>
										<? } ?>
									</div>

								<? } 
							} 
						?>
								
									
						
					</div>					
					
				</div>

				<div class="scouts-page-sidebar main-side">
					<span class="stripe anim_element anim_element--fadeIn"></span>  
					<h2 class="anim_element anim_element--fadeIn"><?= $dir ?></h2>
					<div class="anim_element anim_element--fadeIn">
						<p><?= count($documents) ?> document<? if(count($documents) != 1){echo "s";} ?>.</p>
						<? if (count($documents) > 0) {
						?> <p><b>Recently Uploaded:</b> 
							<ul><?
								$query = $documentsDBH->prepare("SELECT title, date FROM scouts ORDER BY id DESC");

						        $query->execute();

								foreach ($query->fetchAll() as $file) {
									$name = explode(".", $file['title']);
									echo "<li>" . $file['date'] . " - " . $name[0] . "</li>";
								}
							}?>
							</ul>
			            </p>
						<!-- <p>
							<form method="post" action="" class="sidebar-form">
								<input type="submit" name="download" class="download-input" value="Download All">
							</form>
						</p> -->
						<br>
						
						
						<!-- The file upload form used as target for the file upload widget -->
						<? if ($uid == 2 || $uid == 100) {?>
						<div class="upload-photos-container">
						<h3>Upload documents:</h3>
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
						                <input type="hidden" name="documents" value="TRUE">
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

		<? include '../../../modules/footer.php'; ?>

	</body>
	<script type="text/javascript">
		$(document).ready(function(){
		    $(".stripe").css({"padding-top":$(".section-scouts").height()/2+"px"});
		    $(".stripe").css({"padding-bottom":$(".section-scouts").height()/2+"px"});
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

<!--<script src="<?=$_PUBLIC_DIR?>_js/lightbox.js"></script>-->
<!-- The XDomainRequest Transport is included for cross-domain file deletion for IE 8 and IE 9 -->
<!--[if (gte IE 8)&(lt IE 10)]>
<script src="<?=$_PUBLIC_DIR?>_js/cors/jquery.xdr-transport.js"></script>
<![endif]-->

<!-- <script>
// 	$(function () {
// 	 $('#fileupload').fileupload({
// 		 dataType: 'json',
// 		 formData: [{ name: 'custom_dir', value: '/Scout_Website_v2.0/pages/private/sections/scouts/photos/New Folder/' }],
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

		$seen = $notifications->seen($documentsDBH, "scouts");

	}

?>