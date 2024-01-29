const firebaseConfig = {
    apiKey: "AIzaSyA9qMsIACf0FBtddd9JS9yuJU55XjaWoEQ",
    authDomain: "sega-computer-link.firebaseapp.com",
    databaseURL: "https://sega-computer-link-default-rtdb.firebaseio.com",
    projectId: "sega-computer-link",
    storageBucket: "sega-computer-link.appspot.com",
    messagingSenderId: "846988316050",
    appId: "1:846988316050:web:38581df973004050c7054b",
    measurementId: "G-Z2JSPETV8D"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var subject = getElementVal("subject");
  var msgContent = getElementVal("textarea");

  saveMessages(name, emailid, msgContent , subject);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert

  document.querySelector('#go-back-main-btn').addEventListener('click' , ()=>{
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 100);
  })
  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, subject, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    subject: subject,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};