function validate()
{
	let n=document.getElementById('name').value;
	let c=document.getElementById('contact').value;
	let m1=document.getElementById('nameerror');
	let m2=document.getElementById('contacterror');
	let m3=document.getElementById('roomerror');
	let m4=document.getElementById('serviceerror');
	let m5=document.getElementById('termserror');
	
	m1.innerHTML = "";
	m2.innerHTML = "";
	m3.innerHTML = "";
	m4.innerHTML = "";
	m5.innerHTML = "";
	if(n=="")
	{
		m1.innerHTML="guest name is required.";
		m1.style.color="red";
		return false;
	}
	if(c=="")
	{
		m2.innerHTML="contact number is required.";
		m2.style.color="red";
		return false;
	}

	let r=document.getElementsByName("room");
	let rs=false;
	for(let i=0;i<r.length;i++)
	{
		if(r[i].checked)
		{
			rs=true;
			break;
		}
	}
	if(!rs)
	{
		m3.innerHTML="please select the room type."
		m3.style.color="red"
		return false;
	}


	let s=document.getElementsByName('service');
	let ss=false;
	for(let i=0;i<s.length;i++)
	{
		if(s[i].checked)
		{
			ss=true;
			break;
		}
	}
	if(!ss)
	{
		m4.innerHTML="Select at least one additional service"
		m4.style.color="red"
		return false;
	}

	let t=document.getElementById('terms');
	if(!t.checked)
	{
		m5.innerHTML="You must accept Terms & Conditions";
		m5.style.color="red";
		return false;
	}
	let res=document.getElementById('res');
	res.innerHTML="Booking confirmed";
	res.style.color="green";
	return true;
}