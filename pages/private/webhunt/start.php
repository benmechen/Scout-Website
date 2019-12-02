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
		if (isset($_POST['section'])) {
			setcookie("section", '', time() - 3600);
			setcookie("section", $_POST['section'], time() + (86400 * 30), "/"); // 86400 = 1 day
		}
		$query = $dbh->prepare("SELECT id FROM users WHERE email = ?");
		$uid = $query->execute(array($user));

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
	
	<style>
		#endtitle{
    -webkit-animation: color-change 1s infinite;
    -moz-animation: color-change 1s infinite;
    -o-animation: color-change 1s infinite;
    -ms-animation: color-change 1s infinite;
    animation: color-change 1s infinite;
}

@-webkit-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: green; }
    50% { color: blue; }
    0% { color: red; }
}
@-moz-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: green; }
    50% { color: blue; }
    0% { color: red; }
}
@-ms-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: green; }
    50% { color: blue; }
    0% { color: red; }
}
@-o-keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: green; }
    50% { color: blue; }
    0% { color: red; }
}
@keyframes color-change {
    0% { color: red; }
    50% { color: blue; }
    100% { color: green; }
    50% { color: blue; }
    0% { color: red; }
}
	</style>
	
	<!-- Javascript -->
	<script src="js/jquery.js"></script>
	<script>
			// Cookie check
			function getCookie(cname) {
			    var name = cname + "=";
			    var ca = document.cookie.split(';');
			    for(var i=0; i<ca.length; i++) {
			        var c = ca[i];
			        while (c.charAt(0)==' ') c = c.substring(1);
			        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
			    }
			    return "";
			}

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

			function changeUserDetails(){
				var name = $("#newName").val();
				var members = $("#newMembers").val();
				// Returns successful data submission message when the entered information is stored in database.
				var dataString = 'data=updateUserData&name='+ name + '&members='+ members;
				if(name==''||members==''){
					alert("Please Fill All Fields");
				}
				else{
					console.log(dataString);
					$.ajax({
						type: "POST",
						url: "update.php",
						data: dataString,
						cache: false,
						success: function(result){
							// Run Update to change name & members at top of page
							update();

							// Change the page content to next question
							section2();
						}
					});
				}
				return false;
			}

			function submit(section){
				switch(section){
					case 2:
						// console.log($("#section2-1").val());
						var dataString = 'data=section2&1='+ $("#section2-1").val() + '&2=' + $("#section2-2").val() + '&3=' + $("#section2-3").val() + '&4='+ $("#section2-4").val() + '&5=' + $("#section2-5").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section3();
							}
						});
						break;
					case 3:
						var dataString = 'data=section3&1='+ $("#section3-1").val() + '&2=' + $("#section3-2").val() + '&3=' + $("#section3-3").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section4();
							}
						});
						break;
					case 4:
						var dataString = 'data=section4&1=Title: '+ $("#section4-1-1").val() + ' Lyrics: ' + $("#section4-1-2").val() + '&2=Title: ' + $("#section4-2-1").val() + ' Lyrics: ' + $("#section4-2-2").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section5();
							}
						});
						break;
					case 5:
					    var dataString = 'data=section5&1='+ $("#section5-1").val() + '&2=' + $("#section5-2").val() + '&3=' + $("#section5-3").val() + '&4='+ $("#section5-4").val() + '&5=' + $("#section5-5").val() + '&6=' + $("#section5-6").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section6();
							}
						});
						break;
					case 6:
					    var dataString = 'data=section6&1='+ $("#section6-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section7();
							}
						});
						break;
					case 7:
					    var dataString = 'data=section7&1='+ $("#section7-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section8();
							}
						});
						break;
					case 8:
					    var dataString = 'data=section8&1='+ $("#section8-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section9();
							}
						});
						break;
					case 9:
						var item = [];
						$("input[name='scouts[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section9&1=' + item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section10();
							}
						});
						break;
					case 10:
					    var dataString = 'data=section10&1='+ $("#section10-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section11();
							}
						});
						break;
					case 11:
					    var dataString = 'data=section11&1='+ $("#section11-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section12();
							}
						});
						break;
					case 12:
					    var dataString = 'data=section12&1='+ $("#section12-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section13();
							}
						});
						break;
					case 13:
					    var dataString = 'data=section13&1='+ $("#section13-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section14();
							}
						});
						break;
					case 14:
					    var item = [];
						$("input[name='noOfScouts[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section14&1=' +  item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section15();
							}
						});
						break;
					case 15:
					    var dataString = 'data=section15&1=' + $("#section15-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section16();
							}
						});
						break;
					case 16:
					    var item = [];
						$("input[name='TVShows[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section16&1=' + item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section17();
							}
						});
						break;
					case 17:
					    var item = [];
						$("input[name='noInUKPerDay[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section17&1=' + item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section18();
							}
						});
						break;
					case 18:
					    var item = [];
						$("input[name='oneHundredYears[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section18&1=' + item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section19();
							}
						});
						break;
					case 19:
					    var dataString = 'data=section19&1=' + $("#section19-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section20();
							}
						});
						break;
					case 20:
						section21();
						break;
					case 21:
					    var dataString = 'data=section21&1=' + $("#section21-1").val() + '&2=' + $("#section21-2").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){  
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section22();
							}
						});
						break;
					case 22:
					    var dataString = 'data=section22&1=' + $("#section22-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){  
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section23();
							}
						});
						break;
					case 23:
					    var dataString = 'data=section23&1=' + $("#section23-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){  
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								section24();
							}
						});
						break;
					case 24:
						section25();
						break;
					case 25:
						section26();
						break;
					case 26:
						var item = [];
						$("input[name='jamboree[]']:checked").each(function(){item.push($(this).val());});
					    var dataString = 'data=section26&1=' + item;
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();

								// Change the page content to next question
								sectionEnd();
							}
						});
						break;
					case 27:
					    var dataString = 'data=sectionEnd&1=' + $("#sectionEnd-1").val();
						$.ajax({
							type: "POST",
							url: "update.php",
							data: dataString,
							cache: false,
							success: function(result){
								// Run Update to change name & members at top of page
								// update();
								// Change the page content to next question
								// $("#sectionEndYT").update("(for extra points, find the funniest youtube video and paste the link here: <input type='text' id='sectionEnd-1' placeholder='Video submitted! Paste a new link if you want to change your video'><input id='submit' type='button' value='Submit' onclick='submit('end');'>)");
								document.getElementById('sectionEndYT').innerHTML = "(Video submitted! Paste a new link if you want to change your video here: <input type='text' id='sectionEnd-1' placeholder='YouTube link'><input id='submit' type='button' value='Submit' onclick='submit('end');'>)";
							}
						});
						break;
				}
			}
		</script>

		<?php
			// If is Explorers1
			if($uid == "4"){ ?>
				<script>

					function section2(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q1. What 5 original scouting destinations would you visit in 5 different countries?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "2" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>Place, Country</p><input type='text' placeholder='1.' id='section2-1'><input type='text' placeholder='2.' id='section2-2'><input type='text' placeholder='3.' id='section2-3'><input type='text' placeholder='4.' id='section2-4'><input type='text' placeholder='5.' id='section2-5'><br><input id='submit' type='button' value='Submit' onclick='submit(2);'><input type='hidden' value='<?  ?>'>").fadeIn(1000);
		                });
					}

					function section3(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q2. Find 3 of the strangest scouting badges from around the world.</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "3" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>Enter names:</p><input type='text' placeholder='1.' id='section3-1'><input type='text' placeholder='2.' id='section3-2'><input type='text' placeholder='3.' id='section3-3'><br><input id='submit' type='button' value='Submit' onclick='submit(3);'>").fadeIn(1000);
		                });
					}

					function section4(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q3. Find 2 of the weirdest scout songs.</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "4" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:-5%;'>Enter title and lyrics:</p><input type='text' placeholder='1. Title' id='section4-1-1'><br><textarea placeholder='1. Lyrics' id='section4-1-2' cols='26.9' rows='3'></textarea><br><input type='text' placeholder='2. Title' id='section4-2-1'><br><textarea placeholder='2. Lyrics' id='section4-2-2' cols='26.9' rows='3'></textarea><br><input id='submit' type='button' value='Submit' onclick='submit(4);'>").fadeIn(1000);
		                });
					}

					function section5(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q4. Which 6 countries don’t have scouting?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "5" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>Enter countries:</p><input type='text' placeholder='1.' id='section5-1'><input type='text' placeholder='2.' id='section5-2'><input type='text' placeholder='3.' id='section5-3'><input type='text' placeholder='4.' id='section5-4'><input type='text' placeholder='5.' id='section5-5'><input type='text' placeholder='6.' id='section5-6'><br><input id='submit' type='button' value='Submit' onclick='submit(5);'>").fadeIn(1000);
		                });
					}

					function section6(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q5. Write your team name using the phonetic alphabet</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "6" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' placeholder='Team name using phonetic alphabet' id='section6-1'><br><input id='submit' type='button' value='Submit' onclick='submit(6);'>").fadeIn(1000);
		                });
					}

					function section7(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q6. How many of the 12 people to have walked the moon were scouts?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "7" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' placeholder='Number of people' id='section7-1'><br><input id='submit' type='button' value='Submit' onclick='submit(7);'>").fadeIn(1000);
		                });
					}

					function section8(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q7. Who is the Chief of An-Najah Scout group?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "8" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' placeholder='Name' id='section8-1'><br><input id='submit' type='button' value='Submit' onclick='submit(8);'>").fadeIn(1000);
		                });
					}

					function section9(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q8. Who of these three were scouts?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "9" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='checkbox' id='section9-1' name='scouts[]' value='Barack Obama'><label for='section9-1'>Barack Obama</label><br><input type='checkbox' id='section9-2' name='scouts[]' value='Paul McCartney'><label for='section9-2'>Sir Paul McCartney</label><br><input type='checkbox' id='section9-3' name='scouts[]' value='Michael Jackson'><label for='section9-3'>Michael Jackson</label><br><input id='submit' type='button' value='Submit' onclick='submit(9);'>").fadeIn(1000);
		                });
					}

					function section10(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q9. What year was the Boy Scouts of America founded?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "10" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section10-1' placeholder='Year'><br><input id='submit' type='button' value='Submit' onclick='submit(10);'>").fadeIn(1000);
		                });
					}

					function section11(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q10. Where was the 2007 Australian Jamboree held?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "11" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section11-1' placeholder='Place'><br><input id='submit' type='button' value='Submit' onclick='submit(11);'>").fadeIn(1000);
		                });
					}

					function section12(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q11. How many Colombian scouts attended the Scouting 2007 Centenary?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "12" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section12-1' placeholder='Number'><br><input id='submit' type='button' value='Submit' onclick='submit(12);'>").fadeIn(1000);
		                });
					}

					function section13(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q12. What year did Brownies start in New Zealand?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "13" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section13-1' placeholder='Year'><br><input id='submit' type='button' value='Submit' onclick='submit(13);'>").fadeIn(1000);
		                });
					}

					function section14(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q13. How many people are active in Scouting across the world?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "14" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>In 2013, there were: </p><input type='radio' id='section14-1' name='noOfScouts[]' value='31 million'><label for='section14-1'>31 million scouts</label><br><input type='radio' id='section14-2' name='noOfScouts[]' value='10 million'><label for='section14-2'>10 million scouts</label><br><input type='radio' id='section14-3' name='noOfScouts[]' value='129 million'><label for='section14-3'>129 million scouts</label><br><input id='submit' type='button' value='Submit' onclick='submit(14);'>").fadeIn(1000);
		                });
					}

					function section15(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q14. Which country are Lord and Lady Baden-Powell buried?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "15" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section15-1' placeholder='Country'><br><input id='submit' type='button' value='Submit' onclick='submit(15);'>").fadeIn(1000);
		                });
					}

					function section16(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q15. Which TV shows have a scout poster in their cafes?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "16" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='checkbox' id='section16-1' name='TVShows[]' value='Emerdale'><label for='section16-1'>Emerdale</label><br><input type='checkbox' id='section16-2' name='TVShows[]' value='EastEnders'><label for='section16-2'>EastEnders</label><br><input type='checkbox' id='section16-3' name='TVShows[]' value='Coronation Street'><label for='section16-3'>Coronation Street</label><br><input id='submit' type='button' value='Submit' onclick='submit(16);'>").fadeIn(1000);
		                });
					}

					function section17(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q15. True or False - Each day 100,000 people in the UK take part in Scouting activities.</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "17" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='radio' id='section17-1' name='noInUKPerDay[]' value='True'><label for='section17-1'>True</label><br><input type='radio' id='section17-2' name='noOfScouts[]' value='False'><label for='section17-2'>False</label><br><input id='submit' type='button' value='Submit' onclick='submit(17);'>").fadeIn(1000);
		                });
					}

					function section18(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q16. True or False - In the past one hundred years, over half a million men and women have taken the Scout Promise.</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "18" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='radio' id='section18-1' name='oneHundredYears[]' value='True'><label for='section18-1'>True</label><br><input type='radio' id='section18-2' name='oneHundredYears[]' value='False'><label for='section18-2'>False</label><br><input id='submit' type='button' value='Submit' onclick='submit(18);'>").fadeIn(1000);
		                });
					}

					function section19(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q17. What year did scouting start in Mexico?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "19" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section19-1' placeholder='Year'><br><input id='submit' type='button' value='Submit' onclick='submit(19);'>").fadeIn(1000);
		                });
					}

					function section20(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q18. Sing the welcome song sang around scout campfires in Andorra</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "20" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>Use Skype for your team's singing.</p><br><input id='submit' type='button' value='Continue' onclick='submit(20);'>").fadeIn(1000);
		                });
					}

					function section21(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q19. How would you travel to Kandersteg and how much would the travelling cost your team?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "21" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section21-1' placeholder='Cost'><br><textarea cols='26' rows='5' placeholder='How would you travel?' id='section21-2'></textarea><br><input id='submit' type='button' value='Continue' onclick='submit(21);'>").fadeIn(1000);
		                });
					}

					function section22(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q19. Did you remember 30p for the toilets?</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "22" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='text' id='section22-1' placeholder='Cost'><br><input id='submit' type='button' value='Continue' onclick='submit(22);'>").fadeIn(1000);
		                });
					}

					function section23(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q19. Oh no, a volcano has errupted in Switzerland, cancelling all flights and ferries.</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "23" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>The only way to get to Kandersteg is by train. Work out the cost from Poole train station, one way for your whole team first class.</p><input type='text' id='section23-1' placeholder='Cost'><br><input id='submit' type='button' value='Continue' onclick='submit(23);'>").fadeIn(1000);
		                });
					}

					function section24(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q20. Draw the Gerakan Pramuka logo</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "24" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'>Show your drawing on Skype.</p><br><input id='submit' type='button' value='Continue' onclick='submit(24);'>").fadeIn(1000);
		                });
					}

					function section25(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q22. Your whole team has to do the scout promise in sign language</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "25" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'><a href='https://youtu.be/FP2dN2udyUM?t=35s' target='_blank'>https://youtu.be/FP2dN2udyUM?t=35s&havefunhaha</a></p><br><input id='submit' type='button' value='Continue' onclick='submit(25);'>").fadeIn(1000);
		                });
					}

					function section26(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 style='margin-top:-15vh; font-size: 2rem;'>Q23. The first World Scout Jamboree in 1920 was attended by 8,000 Scouts from 34 countries as well as...</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "26" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:0%;'></p><input type='radio' id='section26-1' name='jamboree[]' value='an alligator from Florida, a baby crocodile from Jamaica, a lioness cub from Rhodesia (Zimbabwe), monkeys from South Africa, a baby elephant and a camel'><label for='section26-1'>...an alligator from Florida, a baby crocodile from Jamaica, a lioness cub from Rhodesia (Zimbabwe), monkeys from South Africa, a baby elephant and a camel</label><br><input type='radio' id='section26-2' name='jamboree[]' value='a koala from Australia, a baby sloth from Jamaica, a lion cub from Venezuela, orangutans from Indonesia, a baby rhino and an ostrich'><label for='section26-2'>...a koala from Australia, a baby sloth from Jamaica, a lion cub from Venezuela, orangutans from Indonesia, a baby rhino and an ostrich</label><br><input type='radio' id='section26-3' name='jamboree[]' value='a polar bear from the Artic Circle, a baby chicken from Manchester, a bear cub from Madagascar, zebras from Mozambique, a baby hippo and a snake'><label for='section26-3'>...a polar bear from the Artic Circle, a baby chicken from Manchester, a bear cub from Madagascar, zebras from Mozambique, a baby hippo and a snake</label><br><input id='submit' type='button' value='Continue' onclick='submit(26);'>").fadeIn(1000);
		                });
					}
					
					function sectionEnd(){
						$('#main-title').fadeOut(1000, function(){
						    $(this).html("<h1 id='endtitle' style='margin-top:-30vh; font-size: 5rem;'>Well done, you completed the webhunt!</h1>").fadeIn(1000);
						    $.post( "start.php", { section: "end" } );
                        });
		                $('#main-body').fadeOut(1000, function(){
						    $(this).html("<p style='margin-top:-10%;'>While you wait for the scores, here's a 10 hour nyan cat video <span id='sectionEndYT'>(for extra points, find the funniest youtube video and paste the link here: <input type='text' id='sectionEnd-1' placeholder='YouTube link'><input id='submit' type='button' value='Submit' onclick='submit(27);'>)</span><br><iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/jI-kpVh6e1U?rel=0&amp;controls=0&amp;showinfo=0' frameborder'0' allowfullscreen></iframe></p>").fadeIn(1000);
		                });
					}
					
				</script>
			<? } ?>
		<script>
			$(document).ready(function(){
				if (getCookie('section') == 2) {
					section2();
				};
				if (getCookie('section') == 3) {
					section3();
				};
				if (getCookie('section') == 4) {
					section4();
				};
				if (getCookie('section') == 5) {
					section5();
				};
				if (getCookie('section') == 6) {
					section6();
				};
				if (getCookie('section') == 7) {
					section7();
				};
				if (getCookie('section') == 8) {
					section8();
				};
				if (getCookie('section') == 9) {
					section9();
				};
				if (getCookie('section') == 10) {
					section10();
				};
				if (getCookie('section') == 11) {
					section11();
				};
				if (getCookie('section') == 12) {
					section12();
				};
				if (getCookie('section') == 13) {
					section13();
				};
				if (getCookie('section') == 14) {
					section14();
				};
				if (getCookie('section') == 15) {
					section15();
				};
				if (getCookie('section') == 16) {
					section16();
				};
				if (getCookie('section') == 17) {
					section17();
				};
				if (getCookie('section') == 18) {
					section18();
				};
				if (getCookie('section') == 19) {
					section19();
				};
				if (getCookie('section') == 20) {
					section20();
				};
				if (getCookie('section') == 21) {
					section21();
				};
				if (getCookie('section') == 22) {
					section22();
				};
				if (getCookie('section') == 23) {
					section23();
				};
				if (getCookie('section') == 24) {
					section24();
				};
				if (getCookie('section') == 25) {
					section25();
				};
				if (getCookie('section') == 26) {
					section26();
				};
				if (getCookie('section') == "end") {
					sectionEnd();
				};
			});
	</script>
	<script>
var end = new Date('02/23/2016 9:20 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Time up!';

            return;
        }
        // var days = Math.floor(distance / _day);
        var hours = Math.floor(distance / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = hours + 'hrs ';
        document.getElementById('countdown').innerHTML += minutes + 'mins ';
        document.getElementById('countdown').innerHTML += seconds + 'secs left';
    }

    timer = setInterval(showRemaining, 1000);
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
	<!--$(function () {
        	$('#updateUserData').on('submit', function (e) {

			    e.preventDefault();

			    $.ajax({
			    	type: 'post',
			        url: 'update.php',
			        data: {data: 'updateUserData'}, 
			        data: $('form').serialize(),
			        success: function () {
			        	alert('form was submitted');
			    	}
			    });

		    });
        }-->
	<div class="wrapper">
		<h3 style="padding: 0.1%;margin:0.1%;text-transform:capitalize;" id="name"></h3><small id="members"></small>
		<div id="countdown"></div>
		<ul id="scene" class="scene"
			data-friction-x="0.1"
			data-friction-y="0.1"
			data-scalar-x="25"
			data-scalar-y="15">
			<li class="layer" data-depth="0.00"></li>
			<!-- BG -->
			<li class="layer" data-depth="0.10"><div class="background"></div></li>
			<li class="layer" data-depth="0.15"><div class="triangles"></div></li>

			<!-- Hero -->
			<li class="layer" data-depth="0.20"><div class="title" id="explore"><h2>Explore the Benternet</h2><span class="line"></span></div></li>
			<li class="layer" data-depth="0.25"><div class="sphere"><img src="images/sphere.png" alt="sphere"></div></li>
			<li class="layer" data-depth="0.30"><div class="hero" id="main-title"><h1>Hunt the Web.</h1></div></li>

			

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
			<li class="layer" data-depth="0.33">
				<div id="main-body" class="start" style="margin-top:65vh;">
					<p class="sub-title">Enter your team name:</p>
					<input id="newName" type="text">
					<p class="sub-title">Enter the names of your team members, separated by a comma:</p>
					<input id="newMembers" type="text">
					<br><br>
					<input id="submit" type="button" value="Submit" onclick="changeUserDetails();">
					<span class="line">
					</span>
				</div>
		</li>
		</ul>
	</div>

	<!-- Javascript -->
	<script src="js/plugins.js"></script>
	<script src="js/main.js"></script>
</body>
</html>
<?php
}
?> 