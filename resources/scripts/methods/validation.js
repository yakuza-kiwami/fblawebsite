function schoolSignin(event) {
  event.preventDefault();
  let inputUser = document.getElementById("validateAdmin").value;
  let inputPswd = document.getElementById("validateAdminPwd").value;
  let correctUser = "fcps";
  let correctPswd = "mango";
  if (inputUser == correctUser && inputPswd == correctPswd) {
    alert("Welcome! You have successfully logged in.");
    // document.getElementById("container").style.display = "block";
    $("#container").fadeIn();
    document.getElementById("authForm").style.display = "none";
  } else if (inputUser == "" || inputPswd == "") {
    alert("Please enter both your username and password.");
  } else {
    alert("Incorrect password! Please try again.");
  }
}

function employerSignin(event) {
  event.preventDefault();
  let inputUser = document.getElementById("validateEmployer").value;
  let inputPswd = document.getElementById("validateEmployerPwd").value;
  let correctUser = "khanaz-kp";
  let correctPswd = "thosewhoknow";
  if (inputUser == correctUser && inputPswd == correctPswd) {
    alert("Welcome! You have successfully logged in.");
    // document.getElementById("newposting").style.display = "block";
    // document.getElementById("postings").style.display = "block";
    // document.getElementById("applicants").style.display = "block";
    $("#newposting").fadeIn();
    $("#postings").fadeIn();
    $("#applicants").fadeIn();
    document.getElementById("authForm").style.display = "none";
  } else if (inputUser == "" || inputPswd == "") {
    alert("Please enter both your username and password.");
  } else {
    alert("Incorrect password! Please try again.");
  }
}