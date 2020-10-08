const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Functions
//username validation
//Error function
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.classList.add('error');
	const small = formControl.querySelector('small');
	small.innerText = message;
}
//Succes function
function showSucces(input) {
	const formControl = input.parentElement;
	formControl.classList.add('succes');
}

//email validation
function checkEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(String(email.value).toLowerCase())) {
		showSucces(email);
	} else {
		showError(email, 'Email is not valid');
	}
}
//check requierd fields
function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		//console.log(input);
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`); //tambien puedo usar
		} else {
			showSucces(input);
		}
	});
}

//check input length
function checkLength(input, min, max) {
	if (input.value.length < min && input.value.length > 1) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		);
	} else if (input.value.length > max) {
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		);
	} else {
		showSucces(input);
	}
}

//Verify passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	} else {
		showSucces(input2);
	}
}

//get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//EventListeners
form.addEventListener('submit', function (e) {
	e.preventDefault();
	//console.log(username.value);
	//username validation
	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 5, 25);
	checkEmail(email);
	checkPasswordsMatch(password, password2);
});

/* Esta la forma de validar en submit con muchos if
if (username.value === '') {
	shhowError(username, 'username is required');
} else {
	showSucces(username);
}
//email validation
if (email.value === '') {
	shhowError(email, 'email is required');
} else if (!isValid(email.value)) {
	shhowError('email', 'Email is not valid');
} else {
	showSucces(email);
}
//password validation
if (password.value === '') {
	shhowError(password, 'password is required');
} else {
	showSucces(userpasswordname);
}
//password2 validation
if (password2.value === '') {
	shhowError(password2, 'password is required');
} else {
	showSucces(password2);
}
*/
