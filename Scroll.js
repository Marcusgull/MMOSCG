//Funskjonen virker som en smooth-scroll når gitt argumentene dis og speed
//Dis er hvor du skal "lande" 0-for toppen, mens speed er hastigheten
var load = false;
function ScrollToPoss(dis, speed) {
	var dir = Math.ceil(window.scrollY/100)*100;
	console.log(dir);
	if (dir < dis) {
		var dr = 100;
	}
	if (dir > dis) {
		var dr = -100;
	}
    var id = setInterval(frame, speed/100);
    function frame() {
        if (dir == dis) {
            clearInterval(id);
        } else {
            dir += dr; 
            window.scrollTo(0, dir);
        }
    }
}

function MoveNavBar(id, limit) {
		var objar = document.getElementsByTagName(id);
		var obj = objar[0];
		var pos = window.scrollY;
	
		if(pos < limit) {
			obj.style.position = "relative";
		}
		else {
			obj.style.position = "fixed";
			obj.style.width = "100%";
			obj.style.top = "0";
		}
}