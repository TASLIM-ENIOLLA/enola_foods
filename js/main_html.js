document.querySelector('.dismiss-ads-notify').onclick = () => {
	if(document.querySelector('.ads-notify')){ 
		document.querySelector('.ads-notify').remove(); 
	} 
}; 
document.querySelector('.side-pane').onblur = () => { 
	if(document.querySelector('.side-pane').classList.contains('side-pane-open')){ 
		document.querySelector('.side-pane-but').onclick(); 
	} 
}; 
document.querySelector('.side-pane-but').onclick = () => {
	if(document.querySelector('.side-pane').classList.contains('side-pane-close')){
		document.querySelector('.side-pane').classList.remove('side-pane-close'); 
		document.querySelector('.side-pane').classList.add('side-pane-open'); 
		document.querySelector('.side-pane').focus(); 
	} 
	else{ 
		document.querySelector('.side-pane').classList.add('side-pane-close'); 
		document.querySelector('.side-pane').classList.remove('side-pane-open'); 
		document.querySelector('.side-pane').blur(); 
	} 
}