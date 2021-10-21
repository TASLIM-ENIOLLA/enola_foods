class Security{
	constructor(){
		this.applock_passcode = document.querySelector("#applock_passcode");
		this.applock_timeout = document.querySelector("#applock_timeout");

		document.querySelector(".a #see_password").addEventListener(
			"click",
			(e) => {
				if(document.querySelector("#applock_passcode").value.length > 0){
					if(document.querySelector("#applock_passcode").type == "password"){
						document.querySelector("#applock_passcode").type = "text";
						e.srcElement.classList.remove("fa-eye-slash");
						e.srcElement.classList.add("fa-eye");
						e.srcElement.classList.remove("text-muted");
						e.srcElement.classList.add("theme-color");
					}
					else if(document.querySelector("#applock_passcode").type == "text"){
						document.querySelector("#applock_passcode").type = "password";
						e.srcElement.classList.add("fa-eye-slash");
						e.srcElement.classList.remove("fa-eye");
						e.srcElement.classList.add("text-muted");
						e.srcElement.classList.remove("theme-color");
					}
				}
			}
		);
		
		document.querySelector(".a #save_passcode").addEventListener(
			"click",
			(e) => {
				if(this.applock_passcode.value.length < 1){
					alert("Passcode cannot be empty!");
				}
				else if(this.applock_passcode.value.length < 4){
					alert("Passcode should be at least 4 characters!");
				}
				else if(/\s+/.test(this.applock_passcode.value)){
					alert("Passcode should not contain whitespace!");
				}
				else{
					let a = {
						applock_passcode: this.applock_passcode.value,
						applock_timeout: this.applock_timeout.value,
						applock_active: false
					}
					a = JSON.stringify(a);

					let x = new XMLHttpRequest();
	                x.onreadystatechange = function(){
	                    if(this.readyState == 4 && this.status == 200){
	                        let responseText = this.responseText;
	                        if(responseText === "success"){
	                        	window.location.replace("landing.php");
	                        }
	                        else{
	                        	alert("Some error occured. Please try again!");
	                        }
	                    }
	                };
	                x.open(
	                    "POST",
	                    "../php/processes/security.php",
	                    true
	                );
	                x.setRequestHeader(
	                    "Content-type",
	                    "application/x-www-form-urlencoded"
	                );
	                x.send("data=" + a);
				}
			}
		);
	}
}

var security = new Security();
