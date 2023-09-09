////////////////////////////////////validation input/////////////////////////////////////////////
const email = document.getElementById("email");
const fullname = document.getElementById("fullname");

const formInterface = document.getElementById("formInterface");

/////regex check for inputs
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;

///valitaions of name input and email input

formInterface.addEventListener("submit", validation);
function validation(event) {
  event.preventDefault();

  if (!nameAndEmail(email, fullname)) {
    alert("Email or name is invalid!");
    email.style.boxShadow = "0px 5px 1px red";
    fullname.style.boxShadow = "0px 5px 1px red";
    email.style.color = "red";
    fullname.style.color = "red";
  } else {
    email.style.boxShadow = "0px 5px 1px green";
    fullname.style.boxShadow = "0px 5px 1px green";
    email.style.color = "green";
    fullname.style.color = "green";
    window.open("./leading.html");
  }
}

function nameAndEmail(email, fullname) {
  return emailRegex.test(email.value) && nameRegex.test(fullname.value);
}
