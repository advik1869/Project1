//tags
let e=document.getElementById('email');
let p=document.getElementById('pass');
//error
let ee=document.getElementById('ee');
let pe=document.getElementById('pe');
//pattrens
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&₹]).{8,}$/;

e.addEventListener("input",func1);
function func1()
{
	let ev=e.value;
	if(emailPattern.test(ev))
	{
		ee.innerHTML="Valid email";
		ee.style.color="lime";
		e.style.border="2px solid lime";
	}
	else
	{
		ee.innerHTML="Invalid email format";
		ee.style.color="red";
		e.style.border="2px solid red";
	}
}

p.addEventListener("input",func2);
function func2()
{
	let pv=p.value;
	if(passPattern.test(pv))
	{
		pe.innerHTML="Strong password";
		pe.style.color="lime";
		p.style.border="2px solid lime";
	}
	else
	{
		pe.innerHTML=" 8+ chars, upper, lower, number, symbol required";
		pe.style.color="red";
		p.style.border="2px solid red";
	}
}
