class TimeoutLock{
	constructor(){
		this.startTimeout();
		document.querySelectorAll("body *").forEach(
			item => {
				item.ontouchstart = (e) => {
					e.stopPropagation();
					clearTimeout(this.timeout);
					this.startTimeout();
				}
			}
		);
	}
	startTimeout(){
		this.timeout = setTimeout(
			() => {
				if(!document.querySelector(".aux-frame")){
					let a = document.createElement("iframe");
					a.src = "applock.php";
					a.className = "aux-frame border-0 po-abs top-0 left-0 vw100 vh100";
					a.title = "dismiss";
					document.body.appendChild(a);
				}
			},
			JSON.parse(decodeURIComponent(this.getCookie("MR_ABATI"))).applock_timeout * 1000
		);
	}
	getCookie(cookieName){
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
	continueTimeout(){
		document.querySelector(".aux-frame").remove();
		this.startTimeout();
	}
}
var timeoutLock = new TimeoutLock();