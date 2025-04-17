function validEmail(s) {
	let regex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/;
	return regex.test(s);
}

// Do not change the code below.


const str = prompt("Enter an email address.");
alert(validEmail(str));
