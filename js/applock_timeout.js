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

document.querySelector(".back-but").addEventListener(
	"click",
	() => {
		history.back();
	}
);

// document.querySelectorAll(".see_passcode").forEach(
// 	item => {
// 		item.addEventListener(
// 			"click",
// 			(e) => {
// 				if(e.srcElement.previousElementSibling.value.length > 0){
// 					if(e.srcElement.previousElementSibling.type == "password"){
// 						e.srcElement.previousElementSibling.type = "text";
// 						e.srcElement.classList.remove("text-muted");
// 						e.srcElement.classList.add("theme-color");
// 						e.srcElement.classList.remove("fa-eye-slash");
// 						e.srcElement.classList.add("fa-eye");
// 					}
// 					else{
// 						e.srcElement.previousElementSibling.type = "password";
// 						e.srcElement.classList.add("text-muted");
// 						e.srcElement.classList.remove("theme-color");
// 						e.srcElement.classList.add("fa-eye-slash");
// 						e.srcElement.classList.remove("fa-eye");
// 					}
// 				}
// 			}
// 		);
// 	}
// );

// document.querySelector("#change_passcode").addEventListener(
// 	"click",
// 	() => {
// 		let cookie = JSON.parse(decodeURIComponent(getCookie("MR_ABATI")));
// 		let old_passcode = document.querySelector("#old_passcode");
// 		let new_passcode = document.querySelector("#new_passcode");

// 		if(old_passcode.length < 8 || new_passcode.length < 8){
// 			alert("Passcode length must be greater than 7 characters!");
// 		}
// 		else if(old_passcode.length > 15 || new_passcode.length > 15){
// 			alert("Passcode length must be less than 16 characters!");
// 		}
// 		else if(old_passcode.value !== cookie.applock_passcode){
// 			alert("Old passcode seems incorrect!");
// 		}
// 		else{
// 			cookie.applock_passcode = new_passcode.value;
// 			cookie = JSON.stringify(cookie);

// 			let xmlHtttp = new XMLHttpRequest();
//             xmlHtttp.onreadystatechange = function(){
//                 if(this.readyState == 4 && this.status == 200){
//                     var responseText = this.responseText;
//                     if(responseText == "success"){
//                     	alert("Passcode changed successfully!");
//                     }
//                 }
//             };
//             xmlHtttp.open(
//                 "POST",
//                 "../php/processes/security.php",
//                 true
//             );
//             xmlHtttp.setRequestHeader(
//                 "Content-type",
//                 "application/x-www-form-urlencoded"
//             );
//             xmlHtttp.send("data=" + cookie);
// 		}
// 	}
// );