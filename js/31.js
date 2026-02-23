function validate()
{
	let n=document.getElementById("name").value.trim();
	let e=document.getElementById("email").value.trim();
	let p=document.getElementById("password").value;
	let cp=document.getElementById("confirm").value;
	let a=document.getElementById("age").value;
	let m=document.getElementById("message");
	if(n=="" ||e=="" ||p=="" ||cp=="" ||a=="")
	{
		m.innerHTML="All fields are required";
		m.style.color='red';
		return;
	}
	if(p.length<8)
	{
		m.innerHTML="password must be atleast 8 charecters long";
		m.style.color='red';
		return;
	}
	if(p!==cp)
	{
		m.innerHTML="Password does not match with confirm password";
		m.style.color='red';
		return;
	}
	if(a<18)
	{
		m.innerHTML="Age must be 18 or above";
		m.style.color='red';
		return;
	}
	m.innerHTML="Registration succesfull";
	m.style.color="green";
}
