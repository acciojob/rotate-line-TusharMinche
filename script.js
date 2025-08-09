//your JS code here. If required.
let deg = 0;
let line = document.getElementById("line");
setInterval(()=> {
	if(deg === 360) deg = 0;
	line.style.transform = `rotate(${deg++}deg)`;
}, 20);