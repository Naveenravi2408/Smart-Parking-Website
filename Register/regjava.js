function reportErrors(errors){
	var msg = "Please Enter valid Data...\n";
	
	for(var i = 0; i<errors.length; i++)
	{
		var numErrors = i+1;
		msg = msg + "\n" + numErrors + "." + errors[i];
	}
	alert(msg);
}

function validate()
{
	var errors = []; // errors.lenght = 1
	var user = document.getElementById('usrname').value;
	var ck_name = /^[A-Za-z]/
	var userLength = (user.length) + 1;
	
	var email = document.getElementById('email').value;
	var ck_mail = /^[a-z0-9._]+@+[a-z]+\.[a-z]/;
	
	
	var pass = document.getElementById('psw').value;
	var repass = document.getElementById('repsw').value;
	var passLength = (pass.length) + 1;
	
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	
	
	// validate username
	
	if (user == "")
	{
		errors[errors.length] = "You must enter a valid username"
	}
	else if(!ck_name.test(user))
	{
		errors[errors.length] = "Username should contain A-Z or a-z characters";
	}
	
	else if(userLength<5 || userLength>10)
	{
		errors[errors.length] = "Username should contain 5 to 10 characters";
	}
	
	
	// validate E-mail

if (email == "")
{
	errors[errors.length] = "You must enter a valid email";
}

else if (!ck_mail.test(email))
{
	errors[errors.length] = "Type correct E-mail address";
}
	
	
	// validate password
	
	if (pass == "")
	{
		errors[errors.length] = "password should not be empty";
	}
	
	else if (passLength < 9)
	{
		errors[errors.length] = "Your password should be more than 8 characters";
	}
	
	else if (pass != repass)
	{
		errors[errors.length] = "Passwords does not match";
	}

	
	// validate radio buttons
	
	if ((male == "")&&(female ==""))
	{
		errors[errors.length] = "Please select your gender";
	}
	
	if (errors.length > 0)
	{
		reportErrors(errors);
		return false;
	}
	return true;
	
}
