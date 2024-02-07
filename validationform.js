//
//--------------------------------------------input element-------------------------------------------------------------------------------
//
const eleFname = document.getElementById("fname");
const eleLname = document.getElementById("lname");
const eleName = document.getElementById("name");
const eleEmail = document.getElementById("email");
const eleCcode = document.getElementById("ccode");
const elePhone = document.getElementById("phone");
const eleDob = document.getElementById("dob");
const eleDoc = document.getElementById("doc");
const elePic = document.getElementById("pic");
const elePass = document.getElementById("pass");
const eleCpass = document.getElementById("cpass");

//
//--------------------------------------------set err fun---------------------------------------------------------------------------------
//
function seterror(id, info) {
	document.getElementById(id).textContent = info;
	document.getElementById(id).style = "color:red;";
}

function setvalid(id, info) {
	document.getElementById(id).textContent = info;
	document.getElementById(id).style = "color:green;";
}

//

//--------------
function generateRandomString(length) {
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * charset.length);
		result += charset[randomIndex];
	}
	return result;
}

function refreshCaptcha() {
	var captchaText = generateRandomString(6);
	document.getElementById("captcha-text").textContent = captchaText;
}

// Initial captcha generation
refreshCaptcha();
//--------------------------------------------first name-----------------------------------------------------------------------------------
//
function fnameValid() {
	eleFname.value = eleFname.value.trim();
	if (/^$/.test(eleFname.value)) {
		seterror("efname", "*Can not be Empty");
	} else {
		eleFname.value =
			eleFname.value[0].toUpperCase() + eleFname.value.slice(1).toLowerCase();
		if (!/^(?:(.)(?!\1{2}))*$/i.test(eleFname.value)) {
			seterror("efname", "*can't repete one char more than two times");
			eleFname.value = eleFname.value.slice(0, eleFname.value.length - 1);
		} else if (!/^[a-zA-Z0-9]{2,16}$/.test(eleFname.value)) {
			seterror("efname", "*Enter valid First Name");
		} else if (eleFname.value.length > 16) {
			seterror("efname", "max length reached");
			eleFname.value = eleFname.value.slice(0, 16);
		} else {
			setvalid("efname", "Valid");
			eleName.value = eleFname.value + " " + eleLname.value;
		}
		if (document.getElementById("efname").textContent != "Valid") {
			eleName.value = "" + " " + eleLname.value;
		}
	}
}

eleFname.addEventListener("input", function () {
	fnameValid();
});

//
//--------------------------------------------Laast name ----------------------------------------------------------------------------------
//
function lnameValid() {
	eleLname.value = eleLname.value.trim();
	if (/^$/.test(eleLname.value)) {
		seterror("elname", "*Can not be Empty");
	} else {
		eleLname.value =
			eleLname.value[0].toUpperCase() + eleLname.value.slice(1).toLowerCase();
		if (!/^(?:(.)(?!\1{2}))*$/i.test(eleLname.value)) {
			seterror("elname", "*can't repete one char more than two times");
			eleLname.value = eleLname.value.slice(0, eleLname.value.length - 1);
		} else if (!/^[A-Za-z0-9]{2,16}$/.test(eleLname.value)) {
			seterror("elname", "*Enter valid Last Name");
		} else if (eleLname.value.length > 16) {
			seterror("elname", "max length reached");
			eleLname.value = eleLname.value.slice(0, 16);
		} else {
			setvalid("elname", "Valid");
			eleName.value = eleFname.value + " " + eleLname.value;
		}
		if (document.getElementById("elname").textContent != "Valid") {
			eleName.value = eleFname.value + " " + "";
		}
	}
}

eleLname.addEventListener("input", function () {
	lnameValid();
});

//
//--------------------------------------------full Name-----------------------------------------------------------------------------------
//
function nameValid() {
	eleName.value = eleName.value.trimStart();
	if (/^$/.test(eleName.value)) {
		seterror("ename", "*Can not be Empty");
	} else {
		eleName.value =
			eleName.value[0].toUpperCase() + eleName.value.slice(1).toLowerCase();
		if (!/^(?:(.)(?!\1{2}))*$/i.test(eleName.value)) {
			seterror("ename", "*can't repete one char more than two times");
			eleName.value = eleName.value.slice(0, eleName.value.length - 1);
		} else if (!/^[A-Za-z0-9]+[-\s]?[A-Za-z0-9]+$/.test(eleName.value)) {
			seterror("ename", "*Enter valid Full Name");
		} else {
			setvalid("ename", "Valid");
		}
	}
}

eleName.addEventListener("input", function () {
	nameValid();
});

//
//--------------------------------------------email---------------------------------------------------------------------------------------
//
function emailValid() {
	eleEmail.value = eleEmail.value.trim();
	eleEmail.value = eleEmail.value.toLowerCase();
	eleEmail.value = eleEmail.value.slice(0, 30);
	if (/^$/.test(eleEmail.value)) {
		seterror("eemail", "*Can not be Empty");
	} else {
		if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/.test(eleEmail.value)) {
			seterror("eemail", "*Please enter valid email");
		} else {
			setvalid("eemail", "Valid");
		}
	}
}

eleEmail.addEventListener("input", function () {
	emailValid();
});

//
//---------------------------------------------phone and ccode ---------------------------------------------------------------------------
//
function phoneValid() {
	elePhone.value = elePhone.value.trim();
	let phlen = 0;
	if (eleCcode.value == 91) {
		phlen = 10;
	}
	if (eleCcode.value == 977) {
		phlen = 8;
	}
	if (eleCcode.value == 1) {
		phlen = 12;
	}
	elePhone.value = elePhone.value.slice(0, phlen);
	if (/^$/.test(elePhone.value)) {
		seterror("ephone", "*Can not be Empty");
	} else {
		if (!/^[0-9]+$/.test(elePhone.value)) {
			seterror("ephone", "*only digit allowed");
			elePhone.value = elePhone.value.slice(0, elePhone.value.length - 1);
		} else if (!/^[6-9]\d*$/.test(elePhone.value)) {
			seterror("ephone", "*first digit must be 6,7,8,9");
			elePhone.value = elePhone.value.slice(0, elePhone.value.length - 1);
		} else if (eleCcode.value == 91 && elePhone.value.length != 10) {
			seterror("ephone", "*for IND 10 digits required");
		} else if (eleCcode.value == 977 && elePhone.value.length != 8) {
			seterror("ephone", "*for NEP 8 digits required");
		} else if (eleCcode.value == 1 && elePhone.value.length != 12) {
			seterror("ephone", "*for USA 12 digits required");
		} else {
			setvalid("ephone", "Valid");
		}
	}
}

elePhone.addEventListener("input", function () {
	phoneValid();
});
eleCcode.addEventListener("input", function () {
	phoneValid();
});

//
//--------------------------------------------DOB-----------------------------------------------------------------------------------------
//
function dobValid() {
	if (/^$/.test(eleDob.value)) {
		seterror("edob", "*Can not be Empty");
	} else {
		givebdate = new Date(eleDob.value);
		old100date = new Date();
		old100date.setFullYear(old100date.getFullYear() - 100);
		currentDate = new Date();
		old18date = new Date();
		old18date.setFullYear(old18date.getFullYear() - 18);
		if (givebdate > currentDate) {
			seterror("edob", "Date of birth must be in past");
			eleDob.value = "";
		} else if (givebdate > old18date) {
			seterror("edob", "You must be 18 Years old");
			eleDob.value = "";
		} else if (givebdate < old100date) {
			seterror("edob", "You can not 100 Years old");
		} else {
			setvalid("edob", "Valid");
		}
	}
}

eleDob.addEventListener("input", function () {
	dobValid();
});

//
//gender------------------------------------------------------------------------------------------------------
eleGender = document.getElementById("gender");
function genderValid() {
	if (
		!(
			document.getElementById("male").checked == true ||
			document.getElementById("female").checked == true ||
			document.getElementById("prefer-not-to-say").checked == true ||
			document.getElementById("other").checked == true
		)
	) {
		seterror("egender", "*please select gender");
	} else {
		setvalid("egender", "Valid");
	}
}

document.getElementById("male").addEventListener("change", genderValid);
document.getElementById("female").addEventListener("change", genderValid);
document
	.getElementById("prefer-not-to-say")
	.addEventListener("change", genderValid);
document.getElementById("other").addEventListener("change", genderValid);

//--------------------------------------------doc-----------------------------------------------------------------------------------
//
function docValid() {
	if (/^$/.test(eleDoc.value)) {
		seterror("edoc", "*please uplode Document file");
	} else {
		if (
			!/\.(doc|docx|pdf|txt|rtf|odt|ppt|pptx|xls|xlsx|csv|ods|odp|md)$/i.test(
				eleDoc.value
			)
		) {
			seterror(
				"edoc",
				"* File extensin Must be in( doc,docx,pdf,txt,ppt,pptx,xls,xlsx,csv,odp,rtf,odt )"
			);
			eleDoc.value = "";
		} else {
			setvalid("edoc", "Valid");
		}
	}
}

eleDoc.addEventListener("input", function () {
	docValid();
});
//
//--------------------------------------------pic-----------------------------------------------------------------------------------
//
function picValid() {
	if (/^$/.test(elePic.value)) {
		seterror("epic", "*please uplode Image file");
	} else {
		if (!/\.(jpg|jpeg|png|gif|bmp|tiff|ico|svg|webp)$/i.test(elePic.value)) {
			seterror(
				"epic",
				"* File extensin Must be in (jpg,jpeg,png,gif,bmp,tiff,ico,svg,webp )"
			);
			elePic.value = "";
		} else {
			setvalid("epic", "Valid");
		}
	}
}

elePic.addEventListener("input", function () {
	picValid();
});
//
//--------------------------------------------pass----------------------------------------------------------------------------------------
//
function passValid() {
	elePass.value = elePass.value.trim();
	if (/^$/.test(elePass.value)) {
		seterror("epass", "*Can not be Empty");
	} else {
		if (
			!/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/.test(
				elePass.value
			)
		) {
			seterror(
				"epass",
				"*Must be 8 characters(least 1-uppercase, 1-lowercase, 1-number and 1-spacial)"
			);
		} else {
			setvalid("epass", "Valid");
		}
	}
}

elePass.addEventListener("input", function () {
	passValid();
});

//-------------------------------------------cpass----------------------------------------------------------------------------------------
//
function cpassValid() {
	eleCpass.value = eleCpass.value.trim();
	if (/^$/.test(eleCpass.value)) {
		seterror("ecpass", "*Can not be Empty");
	} else {
		if (eleCpass.value != elePass.value) {
			seterror("ecpass", "*Password and confirm password must be same.");
		} else {
			setvalid("ecpass", "Valid");
		}
	}
}

eleCpass.addEventListener("input", function () {
	cpassValid();
});

//
//--------------------------
//
var captcha = document.getElementById("captcha");
var captchaText = document.getElementById("captcha-text");
function captchaValid() {
	captcha.value = captcha.value.trim();
	if (/^$/.test(captcha.value)) {
		seterror("ecaptcha", "*Can not be Empty");
	} else {
		if (captcha.value != captchaText.textContent) {
			seterror("ecaptcha", "captcha does not match!");
		} else {
			setvalid("ecaptcha", "Valid");
		}
	}
}
captcha.addEventListener("input", function () {
	captchaValid();
});

//--------------------------------------------- main validatin ----------------------------------------------------------------------------
function validateForm() {
	var doValid = true;
	//fname
	fnameValid();
	if (document.getElementById("efname").textContent != "Valid") {
		var doValid = false;
	}
	//lname
	lnameValid();
	if (document.getElementById("elname").textContent != "Valid") {
		var doValid = false;
	}
	//name
	nameValid();
	if (document.getElementById("ename").textContent != "Valid") {
		var doValid = false;
	}
	//email
	emailValid();
	if (document.getElementById("eemail").textContent != "Valid") {
		var doValid = false;
	}
	//phone
	phoneValid();
	if (document.getElementById("ephone").textContent != "Valid") {
		var doValid = false;
	}
	//dob
	dobValid();
	if (document.getElementById("edob").textContent != "Valid") {
		var doValid = false;
	}
	//gender
	if (document.getElementById("egender").textContent != "Valid") {
		genderValid();
		doValid = false;
	}
	//doc
	docValid();
	if (document.getElementById("edoc").textContent != "Valid") {
		var doValid = false;
	}
	//pic
	picValid();
	if (document.getElementById("epic").textContent != "Valid") {
		var doValid = false;
	}
	//pass
	passValid();
	if (document.getElementById("epass").textContent != "Valid") {
		var doValid = false;
	}
	//cpass
	cpassValid();
	if (document.getElementById("ecpass").textContent != "Valid") {
		var doValid = false;
	}
	//captcha
	captchaValid();
	if (document.getElementById("ecaptcha").textContent != "Valid") {
		var doValid = false;
	}

	if (doValid == false) {
		alert("Please fill in all required fields correctly before submitting");
		event.preventDefault();
	} else {
		alert("registration successful");
		window.location.reload();
		event.preventDefault();
	}
	console.warn(eleFname)

	//return doValid;
}
//--------------------------------------------utility fun---------------------------------------------------------------------------------
//refresh
document.getElementById("clear").addEventListener("click", function () {
	location.reload();
});

//show pass
function showpass() {
	if (elePass.type === "password") {
		elePass.type = "text";
	} else {
		elePass.type = "password";
	}
}

//show cpass
function showcpass() {
	if (eleCpass.type === "password") {
		eleCpass.type = "text";
	} else {
		eleCpass.type = "password";
	}
}
