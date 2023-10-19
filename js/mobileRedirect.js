

// 判断是否为移动设备
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}


function isPC(argument) {
	var p = navigator.platform; 
	system.win = p.indexOf("Win") == 0; 
	system.mac = p.indexOf("Mac") == 0; 
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

	if(system.win||system.mac||system.xll){ 
		return true;  
	}else{
		return false;
	}
}


function getProjectName() {
	var strPath = window.document.location.pathname;
	var postPath = strPath.substring(0,strPath.substr(1).indexOf('/')+1);
	return postPath;
}


function autoRedirect1(argument) {

	// console.log(window.screen.width);
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    let w = window.innerWidth;
    let host = location.host;

    if (host.indexOf("www") == 0) {
    	if (parseInt(w) > 960 && location.href.indexOf("/m/") > 0) {

    	}
    }
    else if(host.indexOf("yyy") == 0){


    }
    
}

function autoRedirect() {
	let w = window.innerWidth;

	if (parseInt(w) <= 960) {
		let mobileHost = getMobileHost();
		let mobileHref = getMobileHref();

		console.log(parseInt(w), location.host, mobileHost, mobileHref)
		if (mobileHost &&  location.host != mobileHost ) {
			location.href = mobileHref;
		}
	}

	

}



function getMobileHost() {

	if (location.host.indexOf("localhost") == 0) {
		return location.host.replace(/(\d+)/,function($1){return parseInt($1)+1})
	}
	else if (location.host.indexOf("yyy.") == 0) {
		return location.host.replace("yyy.", "n.")
	}
	else if (location.host.indexOf("www.") == 0) {
		return location.host.replace("www.", "m.")
	}
	else return location.host;

}



function getMobileHref() {
	let mobileHost = getMobileHost();

	if (mobileHost) {
		return location.href.replace(location.host, mobileHost);

	}
	return false;

}


const debounce = (fn, delay) => {
	let timer;
	return function() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn();
		}, delay);
	}
};

const cancalDebounce = debounce(autoRedirect, 500);



window.addEventListener('resize', cancalDebounce);

autoRedirect()