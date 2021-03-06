<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$msg = "";

use PHPMailer\PHPMailer\PHPMailer;

include_once "PHPMailer/PHPMailer.php";
include_once "PHPMailer/SMTP.php";
include_once "PHPMailer/Exception.php";

if (isset($_POST['submit'])) {
  $honeypot = trim($_POST["email"]);

  if (!empty($honeypot)) {
    exit();
  }

  $name = $_POST['name'];
  $email = $_POST['email_real'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mail = new PHPMailer();

  $mail->IsSMTP();
  $mail->SMTPDebug = 0; //1- errors/message 2- messages only
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'denikeandrew@gmail.com';
  $mail->Password = 'yeawenkmvvqblblq';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $mail->Subject = "Contact request from Buildingandbeyond.com";
  $mail->isHTML(true);
  $mail->addAddress('denikeandrew@gmail.com');
  $mail->addAddress('ddenike@buildingandbeyond.com');
  // $mail->addAddress('bbruce@buildingandbeyond.com');
  $mail->addAddress('ehannan@buildingandbeyond.com');

  $mail->setFrom($email);
  $mail->Body =
    'Name: ' .
    $name .
    "<br><br>" .
    'Email: ' .
    $email .
    "<br><br>" .
    'Phone: ' .
    $phone .
    "<br><br>" .
    'Message: ' .
    $message;

  if ($mail->send()) {
    $msg = "Your email has been sent, thank you!";
  } else {
    $msg = "Please enter all contact fields below and try again!";
  }
}
?>


<!DOCTYPE html>

<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta property="og:image" content="images/BB White Logo.jpg" />
	<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
	<link rel="shortcut icon" type="image/png" href="images/bbfavicon.png" />
	<!-- <link href="./css/bbwp.css" rel="stylesheet" type="text/css"> -->
	<link href="./css/style.min.css" rel="stylesheet" type="text/css">
	<title>Building & Beyond</title>
</head>

<body>

	<header>
		<a href="index"><img class="logo" src="images/BB White Logo.jpg"></a>
		<nav>
			<ul>
				<li><a href="about">About</a></li>
				<li><a href="portfolio">Portfolio</a></li>
				<li class="current"><a href="contact">Contact</a></li>
			</ul>
		</nav>

	</header>

	<section class="contactInfo" class="form-style-1">
		<!-- <div class="middleContainer"> -->
		<div class="contactForm">
			<?php if ($msg != "") {
     echo "<div style='color:#25673F;'>" . "$msg<br><br>" . "</div>";
   } ?>
			<h1>Contact Us</h1>
			<p>Building & Beyond, Inc.<br>
				1610 Dell Avenue, Suite M<br>
				Campbell, CA 95008<br>
				CA License #706491</p>

			<p>Phone: 408.379.4757<br>
				Fax: 408.379.4760</p>
		</div>


		<div class="emailform">
			<h1>Email Us</h1>
			<form method="post" action="contact.php">
				<div>
					<label>Name</label><br>
					<input name="name" type="text" placeholder="Name">
				</div>
				<div>
					<input name="email" type="text" style="display: none;">
				</div>
				<div>
					<label>Email</label><br>
					<input name="email_real" type="email" placeholder="Email Address">
				</div>
				<div>
					<label>Phone</label><br>
					<input name="phone" type="phone" placeholder="Phone Number">
				</div>
				<div>
					<label>Message</label><br>
					<textarea name="message" placeholder="Message"></textarea>
				</div>
				<input type="submit" name="submit" value="Submit">
				<!--<button class="button_1" type="submit">Send</button> -->
			</form>



		</div>


		<!-- </div>	 -->
	</section>

	<div class="spacer">
	</div>

	<footer>
		<p>Buildingandbeyond.com, Copyright &copy; CA License #706491</p>
	</footer>

	<script src="js/script.js"></script>

</body>

</html>