<?php
	if(isset($_COOKIE["MR_ABATI"])){
		header("Location: applock.php");
	}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../font-awesome/font-awesome/font-awesome.css">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/security.css">
    <title>security</title>
</head>
<body>
	<div class="a vh100 vw100 overflow-y-auto bg-light text-white user-select-0">
		<div class="pt-5 pb-3">
			<div class="mx-auto shadow" style ="width: 110px; height: 110px; border-radius: 50%; background: url(../img/user.png); background-size: cover; background-position: center;"></div>
		</div>
		<div class="text-c theme-color">
			<div class="bold letter-spacing-1 text-capitalize px-2" style ="font-size: 20px;">create passcode</div>
			<div class="text-capitalize px-3 letter-spacing-1">this passcode will be used to unlock this app at every entry</div>
		</div>
		<div class="px-4 pt-5">
			<div class="flex-h j-c-c a-i-c py-1 theme-border rounded">
				<input id="applock_passcode" type = "password" class="theme-color bg-clear pl-3 outline-0 flex-1 p-2 border-0 bold letter-spacing-1" placeholder="Enter Passcode">
				<span class="mx-2 fa fa-eye-slash text-muted" id = 'see_password' style="font-size: 20px;"></span>
			</div>
			<div class="mt-3">
				<span class="text-capitalize bold letter-spacing-1 px-2 theme-color">choose app lock timeout</span>
				<select id="applock_timeout" class="theme-color mt-2 d-block w-100 bg-clear outline-0 theme-border rounded" style ="padding: 12px;">
					<option value = "300" class="text-dark bold letter-spacing-1">5 minutes</option>
					<option selected value = "600" class="text-dark bold letter-spacing-1">10 minutes</option>
					<option value = "900" class="text-dark bold letter-spacing-1">15 minutes</option>
					<option value = "1200" class="text-dark bold letter-spacing-1">20 minutes</option>
					<option value = "1500" class="text-dark bold letter-spacing-1">25 minutes</option>
					<option value = "1800" class="text-dark bold letter-spacing-1">30 minutes</option>
				</select>
			</div>
			<div class="pt-4">
				<input id="save_passcode" type="submit" value = "save passcode & proceed" class = "flicker outline-0 d-block w-100 theme-bg text-white border-0 rounded shadow bold letter-spacing-1 text-capitalize text-c" style ="padding: 12px;">
			</div>
		</div>
	</div>
	<script type="text/javascript" src="../js/security.js"></script>
</body>
</html>
