
window.onload = setTimeout(text,4300);

function text(){
	document.getElementById('para2').style.visibility = 'visible';
	document.getElementById('para1').style.border = 'none';
	
	setTimeout(function(){
		document.getElementById('para2').style.border = 'none';
	},4100);
	
}


var scrollY = 0;
var distance = 11;
var speed = 24;
function autoScrollTo() {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById('sect1').offsetTop;
	var animator = setTimeout('autoScrollTo()',24);
	if(currentY>(screen.height + 20)){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}


window.onload = function change(){
	var no = Math.floor(Math.random() * 10);
	var el = document.getElementById("p1");
	
	if(no<2 || no%5==0){
		el.innerHTML = "Nearly 700 million Chinese people drink contaminated water";
	}else if(no<4 && no>2){
		el.innerHTML = "For every 1 million tons of oil that is shipped, 1 ton is spilled.";
	}else if(no<6 && no>4){
		el.innerHTML = "1 in every 8 deaths on Earth can be linked to air pollution.";
	}else if(no<8 && no>6){
		el.innerHTML = "The pollution hovering above China is visible from space.";
	}else{
		el.innerHTML = "3.4 million people die each year because of water related problems.";
	}
};

window.onscroll = function scroll(){
	var el = document.getElementById('backToTop');
	if(window.pageYOffset > 700){
		el.style.opacity = "1";
		el.style.transition = " 0.5s linear 0s";
	}else{
		el.style.opacity = "0";
		el.style.transition = " 0.5s linear 0s";
	}
};

function backToTop(){
	var el = document.getElementById('first');
	var distance = 40;
		var scrollY = 0;
		var speed = 27;
		var currentY = window.pageYOffset;
		var targetY = el.offsetTop;
		var animator = setTimeout('backToTop()',speed);
		if(currentY > targetY){
			scrollY = currentY - distance;
			window.scroll(0,scrollY);
		}else{
			clearTimeout(animator);
		}
}



