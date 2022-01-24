//Create variables to define all the different names used in the form
let firstName = document.querySelector(".fName");
let secondName = document.querySelector(".sName");
let username = document.querySelector(".uName");
let emailAdress = document.querySelector(".eAdress");

//Create a variable defining the user form
let userForm = document.querySelector(".userForm");

//Create the validate button
let validateBtn = document.querySelector(".validateBtn");
let validationMsg = "OK!";

//Create a message to display once the user clicks the validation button
let participationMsg =
  "Thank you for participating in our giveaway." +
  "<br>" +
  "You will recieve a notification via email if you've been selected for the prize ! Good luck !";

//Create the error messages to display on screen if the user doesn't enter the correct information or nothing at all
let errorText = document.querySelector(".errTxt");
let errorTextTwo = document.querySelector(".errTxtTwo");
let errorTextThree = document.querySelector(".errTxtThree");
let errorTextFour = document.querySelector(".errTxtFour");

//Create card variable
let cards = document.querySelector(".userForm");

//Create a variable to access the loader animation and hide it before correctly triggering it
let loader = document.querySelector(".lds-roller");
loader.style.display = "none";

//Create a variable to include which domain names will work for the email adress
let domainName = [".com", ".co.uk", ".net"];

//Defines how long the loading animation will last
let fiveSecond = 3000;

//This is the function that will run the whole app. It checks to see if the user has inputted the correct info and will validate the information if they have
const runApp = () => {
  const validateFirstName = () => {
    if (firstName.value == "" || firstName.value.length < 1) {
      errorText.innerHTML = "Please enter a valid name";
      errorText.style.color = "red";
    } else {
      errorText.innerHTML = validationMsg;
      errorText.style.color = "green";
    }
  };

  const validateLastName = () => {
    if (secondName.value == "" || username.value.length < 1) {
      errorTextTwo.innerHTML = "Please enter your last name";
      errorTextTwo.style.color = "red";
    } else {
      errorTextTwo.innerHTML = validationMsg;
      errorTextTwo.style.color = "green";
    }
  };

  const validateUserName = () => {
    if (username.value == "" || username.value.length < 6) {
      errorTextThree.innerHTML = "Please enter a valid username";
      errorTextThree.style.color = "red";
    } else {
      errorTextThree.innerHTML = validationMsg;
      errorTextThree.style.color = "green";
    }
  };

  const validateEmail = () => {
    if (
      (emailAdress.value.includes("@") &&
        emailAdress.value.includes(domainName[0])) ||
      emailAdress.value.includes(domainName[1]) ||
      emailAdress.value.includes(domainName[2])
    ) {
      errorTextFour.innerHTML = validationMsg;
      errorTextFour.style.color = "green";
    } else {
      errorTextFour.innerHTML = "Please enter a valid email adress";
      errorTextFour.style.color = "red";
    }
  };

  //Shows the text after everything has been validated, also shows the loading animation
  const resultText = () => {
    loader.style.display = "";
    cards.style.color = "black";
    cards.innerHTML = "Please wait...";
    setTimeout(function () {
      cards.innerHTML = participationMsg;
      loader.style.display = "none";
    }, fiveSecond);
  };

  //Gives functionality to the validate button on screen.
  const validate = () => {
    validateBtn.addEventListener("click", function () {
      validateFirstName();
      validateLastName();
      validateUserName();
      validateEmail();
      if (
        errorText.innerHTML == validationMsg &&
        errorTextTwo.innerHTML == validationMsg &&
        errorTextThree.innerHTML == validationMsg &&
        errorTextFour.innerHTML == validationMsg
      ) {
        resultText();
      }
    });
  };

  validate();
};
runApp();
