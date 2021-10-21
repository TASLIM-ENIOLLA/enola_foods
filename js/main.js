class Main{
	constructor(){
		this.slide = 0;
		this.pointer_active_color = "bg-dark";
		this.pointer_default_color = "bg-white";
		this.set_pointers();
		this.nav_activator();
		this.set_pointer_color();

		document.querySelector(".nav .next").addEventListener(
			"click",
			() => {
				if(this.slide != document.querySelectorAll(".a > div").length - 1){
					this.slide++;
					document.querySelector(".a").style.transform = "translate(" + -(this.slide * 100) + "%, 0%)";
					this.nav_activator();
					this.set_pointer_color();
				}
				else if(document.querySelector(".nav .next").innerHTML == "finish"){
					window.location = "security.php";
				}
			}
		);

		document.querySelector(".nav .prev").addEventListener(
			"click",
			() => {
				if(this.slide != 0){
					this.slide--;
					document.querySelector(".a").style.transform = "translate(" + -(this.slide * 100) + "%, 0%)";
					this.nav_activator();
					this.set_pointer_color();
				}
			}
		);
	}
	nav_activator(){
		if(this.slide == 0){
			document.querySelector(".nav .prev").classList.add("visibility-0");
			if(document.querySelector(".nav .next").classList.contains("visibility-0")){
				document.querySelector(".nav .prev").classList.remove("visibility-0");
			}
		}
		else if(this.slide == document.querySelectorAll(".a > div").length - 1){
			document.querySelector(".nav .next").innerHTML = "finish";
		}
		else{
			document.querySelector(".nav .prev").classList.remove("visibility-0");
			document.querySelector(".nav .next").classList.remove("visibility-0");
			document.querySelector(".nav .next").innerHTML = "next";
		}
	}
	set_pointers(){
		let no_of_pointers = document.querySelectorAll(".a > div").length;
		for(let x = 0; x < no_of_pointers; x++){
			let pointer = document.createElement("div");
				pointer.style = "min-width: 10px; height: 10px; border-radius: 50%;";
				pointer.className = "transit d-inline-block bg-white m-2";

			document.querySelector(".pointers").appendChild(pointer);
		}
	}
	set_pointer_color(){
		document.querySelectorAll(".pointers > div").forEach(
			item => {
				if(item.classList.contains(this.pointer_active_color)){
					item.classList.remove(this.pointer_active_color);
					item.classList.add(this.pointer_default_color);
				}
			}
		);
		document.querySelectorAll(".pointers > div")[this.slide].classList.remove(this.pointer_default_color);
		document.querySelectorAll(".pointers > div")[this.slide].classList.add(this.pointer_active_color);
	}
}
var main = new Main();
