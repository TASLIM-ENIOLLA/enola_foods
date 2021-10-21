class DisplayContent{
	constructor(){
		window.onload = () => {
			window.onpopstate();
		}
		window.onpopstate = () => {
			let hash_value = decodeURIComponent(document.location.hash) || "main_html";
			if(hash_value != null){
				hash_value = hash_value.toString().replace(" " ,"_").replace("#", "");
				var xmlHttp = new XMLHttpRequest();
			    xmlHttp.onreadystatechange = function(){
			        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			            let responseText = xmlHttp.responseText;
			            let script = document.createElement("script");
		            	document.querySelector(".a").innerHTML = responseText;
			            script.src = "../js/" + hash_value + ".js";
			            document.querySelector(".a").appendChild(script);
			        }
			    };
			    xmlHttp.open(
			        "POST",
			        "../html/" + hash_value + ".html",
			        true
			    );
			    xmlHttp.setRequestHeader(
			        "Content-type",
			        "application/x-www-form-urlencoded"
			    );
			    xmlHttp.send();
			}
		}
	}
}
let display = new DisplayContent();
