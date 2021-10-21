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
    <link rel="stylesheet" href="../css/main.css">
    <title>main</title>
</head>
<body>
	<div class="vh100 vw100 overflow-0">
		<div class="a w-100 h-100 flex-h" style="transition: all .3s ease-in-out;">
			<div class="h-100 bg-primary" style="min-width: 100%;"></div>
			<div class="h-100 bg-success" style="min-width: 100%;"></div>
			<div class="h-100 bg-warning" style="min-width: 100%;"></div>
			<div class="h-100 bg-danger" style="min-width: 100%;"></div>
		</div>
		<div class="nav po-abs w-100 flex-h j-c-c a-i-c" style="top: 100%; left: 0; transform: translate(0, -100%);">
			<div class="prev transit flex-1 p-3 bold letter-spacing-1 text-white text-uppercase">previous</div>
			<div class="flex-1 text-c pointers overflow-x-auto flex-h">
				<!-- pointer balls -->
			</div>
			<div class="next transit flex-1 p-3 bold letter-spacing-1 text-white text-uppercase text-r">next</div>
		</div>
	</div>
	<script type="text/javascript" src="../js/main.js"></script>
</body>
</html>