<?php

if($_POST["submit"]) {
    $recipient="your@email.address";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?><!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/png" href="images/bbfavicon.png"/>
	<link href="./css/bbwp.css" rel="stylesheet" type="text/css">
	<title>Building & Beyond</title>
</head>
<body>

	<header>
		<img id="logo" src="images/BB White Logo.jpg">
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="portfolio.html">Portfolio</a></li>
				<li class="current"><a href="contact.php">Contact</a></li>
			</ul>
		</nav>
		
	</header>

	<section id="contactInfo">
		<div class="middleContainer">
			<div id="contactForm">
				<h1>Contact Us</h1>
				<p>Building & Beyond, Inc.<br>
				   1610 Dell Avenue, Suite M<br>
				   Campbell, CA 95008<br>
				   CA License #706491</p>

				<p>Phone: 408.379.4757<br>
				   Fax: 408.379.4760<br>
				   Shop: 831.728.8684</p>
			</div>

			

			<div id="emailform">
				<h1>Email Us</h1>
				<form>
					<div>
						<label>Name</label><br>
						<input type="text" placeholder="Name">
						</div>
					<div>
						<label>Email</label><br>
						<input type="email" placeholder="Email Address">
					</div>
					<div>
						<label>Phone</label><br>
						<input type="phone" placeholder="Phone Number">
					</div>
					<div>
						<label>Message</label><br>
						<textarea placeholder="Message"></textarea>
					</div>
					<button class="button_1" type="submit">Send</button>
				</form>

			</div>
		</div>	
	</section>

	<footer>
		<p>Buildingandbeyond.com, Copyright &copy; CA License #706491</p>
	</footer>

<script src="js/script.js"></script>

</body>
</html>