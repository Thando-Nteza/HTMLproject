var firebaseConfig = {
    apiKey: "AIzaSyBeybq6iXoUDc4j6EXwzTyfcGrQReQjGE0",
    authDomain: "thando-tyler.firebaseapp.com",
    databaseURL: "https://thando-tyler.firebaseio.com",
    projectId: "thando-tyler",
    storageBucket: "thando-tyler.appspot.com",
    messagingSenderId: "190684733394",
    appId: "1:190684733394:web:e42ba13f37c5262e26b20b",
    measurementId: "G-E3ZHZJSRE4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal("firstname");
  var lastname = getInputVal("lastname");
  var number = getInputVal("number");
  var email = getInputVal("email");
  var subject = getInputVal("subject");

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector("alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display = "none";
  },3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:firstname,
    lastname:lastname,
    number:number,
    email:email,
    subject:subject
  });
}