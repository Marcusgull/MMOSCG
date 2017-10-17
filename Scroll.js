//Funskjonen virker som en smooth-scroll når gitt argumentene dis og speed
//Dis er hvor du skal "lande" 0-for toppen, mens speed er hastigheten
function ScrollToPoss(elem, speed) {
	if (elem === parseInt(elem, 10))
		var dis = elem;
	else {
		var el = document.getElementById(elem);
		var dis = Math.ceil((el.offsetTop - el.offsetHeight- 200)/100)*100;
	}
	var dir = Math.ceil(window.scrollY/100)*100;
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

function MoveNavBar(id, head) {
		var obj = document.getElementsByTagName(id)[0];
		var pos = window.scrollY;
		var objhed = document.getElementById(head);
		var limit = objhed.offsetHeight;
	
		if(pos < limit) {
			obj.style.position = "relative";
		}
		else {
			obj.style.position = "fixed";
			obj.style.width = "100%";
			obj.style.top = "0";
		}
}