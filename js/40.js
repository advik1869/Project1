// tags
let l = document.getElementById('login');
let s = document.getElementById('signup');
let c = document.getElementById('confirm');
let ov = document.getElementById('overlay');

// buttons
let lb = document.getElementById('Loginbtn');
let sb = document.getElementById('Signupbtn');
let cb = document.getElementById('Confirmbtn');


function hideAll()
{
	l.style.opacity = "0";
	s.style.opacity = "0";
	c.style.opacity = "0";

	l.style.visibility = "hidden";
	s.style.visibility = "hidden";
	c.style.visibility = "hidden";
}


lb.addEventListener("click", function(){

	hideAll();

	l.style.visibility = "visible";
	l.style.opacity = "1";

	ov.style.visibility = "visible";
	ov.style.opacity = "1";
});


sb.addEventListener("click", function(){

	hideAll();

	s.style.visibility = "visible";
	s.style.opacity = "1";

	ov.style.visibility = "visible";
	ov.style.opacity = "1";
});



cb.addEventListener("click", function(){

	hideAll();

	c.style.visibility = "visible";
	c.style.opacity = "1";

	ov.style.visibility = "visible";
	ov.style.opacity = "1";
});


ov.addEventListener("click", function(){

	hideAll();

	ov.style.opacity = "0";
	ov.style.visibility = "hidden";
});