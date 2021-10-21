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
	<div class="theme-bg vh100 vw100 overflow-y-auto text-white user-select-0">
		<div class="pb-3 pt-5">
			<div class="mx-auto shadow" style ="width: 110px; height: 110px; border-radius: 50%; background: url(../img/user.png); background-size: cover; background-position: center;"></div>
		</div>
		<div class="text-c">
			<div class="bold letter-spacing-1 text-capitalize px-2" style ="font-size: 20px;">Unlock App</div>
			<div class="text-capitalize px-3 bold letter-spacing-1">enter passcode to unlock app</div>
		</div>
		<div class="px-4 pt-5">
			<div class="py-2">
				<span class="text-capitalize bold letter-spacing-1" style="font-size: 18px;">Enter Passcode</span>
			</div>
			<div class="flex-h j-c-c a-i-c py-1 border rounded">
				<input id="applock_passcode" type = "password" class="text-white text-c bg-clear pl-3 outline-0 flex-1 p-2 border-0 bold letter-spacing-1" placeholder="" style="font-size: 20px; letter-spacing: 5px;">
				<span class="mx-2 fa fa-eye-slash text-muted" id = 'see_password' style="font-size: 20px;"></span>
			</div>
			<div class="py-3 text-r">
				<input type="submit" value = "unlock app" id = "unlock_app" style="padding: 12px;" class="theme-bg w-auto rounded shadow border-0 text-uppercase text-white bold letter-spacing-1 outline-0 flicker">
			</div>
		</div>
	</div>
	<script type="text/javascript">
		document.querySelector("#applock_passcode").focus();
		function getCookie(cookieName){
			let cookie = document.cookie;
			let res;
			cookie = cookie.split(";");
			cookie.forEach(
				item => {
					item = item.split("=");
					if(item[0].trim() == cookieName){
						res = item[1];
					}
				}
			);
			return res;
		}
		document.querySelector("#see_password").addEventListener(
			"click",
			(e) => {
				if(document.querySelector("#applock_passcode").value.length > 0){
					if(document.querySelector("#applock_passcode").type == "password"){
						document.querySelector("#applock_passcode").type = "text";
						e.srcElement.classList.remove("fa-eye-slash");
						e.srcElement.classList.add("fa-eye");
						e.srcElement.classList.remove("text-muted");
						e.srcElement.classList.add("text-white");
					}
					else if(document.querySelector("#applock_passcode").type == "text"){
						document.querySelector("#applock_passcode").type = "password";
						e.srcElement.classList.add("fa-eye-slash");
						e.srcElement.classList.remove("fa-eye");
						e.srcElement.classList.add("text-muted");
						e.srcElement.classList.remove("text-white");
					}
				}
			}
		);
		document.querySelector("#unlock_app").addEventListener(
			"click",
			() => {
				if(document.querySelector("#applock_passcode").value.length < 1){
					alert("Passcode seems empty!");
				}
				else{
					let mr_abati = getCookie("MR_ABATI");
					mr_abati = JSON.parse(decodeURIComponent(mr_abati));
					if(document.querySelector("#applock_passcode").value == mr_abati.applock_passcode.replace(/\s+/, "")){
						if(window.location === window.parent.location){
							window.location.replace("landing.php");
						}
						else{
							parent.timeoutLock.continueTimeout();
							console.log("here");
						}
					}
					else{
						alert("Passcode seems incorrect. Try again!");
					}
				}
			}
		);
	</script>
</body>
</html>
