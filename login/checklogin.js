
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
	
	
	var pass = document.getElementById('psw').value;
	
	
	// validate username
	
	if (user == "")
	{
		errors[errors.length] = "You must enter a valid username"
	}
	
	// validate password
	
	if (pass == "")
	{
		errors[errors.length] = "password should not be empty";
	}

	
	if (errors.length > 0)
	{
		reportErrors(errors);
		return false;
	}
	return true;
	
}
