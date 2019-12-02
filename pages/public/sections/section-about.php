<section class="section-about fullheight" id="about">
	<br>
	<div class="text-content">
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

		<p class="text-welcome">
			Welcome to the 1st Lytchett Matravers Scout Group's website. The ages for our groups are: Beavers 6-8, Cubs 8-10½, Scouts 10½-14, and <br> Explorers 14-18.
		
		<br>
		 <? $newsData = $news->pull(); 
			foreach ($newsData as $data) { ?>
				<span class="text-newsflash">
					<b>NEWS:</b> <?= $data['comment'] ?>
				</span>
				<br><i>Posted by <?= $data['group_name'] ?> on <?= $data['date'] ?>.</i>
			<?
			}
			?> 
		

		</p>

		<p>
			Log into leader’s/parent’s area:
		</p>

		<form autocomplete="off" method="POST" action="">
			<span class="loginMessage" style="color: #800000;"><?=$loginMessage?></span>
			<input type="text" name="username" autocomplete="off" placeholder="Username"><br>
			<input type="password" name="password" autocomplete="off" placeholder="Password"><br>
			<input type="submit" name="auth-submit" value="Login">
		</form>

		<a class="arrow-down" href="#beavers"><h1>v</h1></a>
	</div>
</section>