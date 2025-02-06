function schoolSignin() {
  let inputUser = document.getElementById("validateAdmin").value;
  let inputPswd = document.getElementById("validateAdminPwd").value;
  let correctUser = "jonkler";
  let correctPswd = "mango";
  if (inputUser == correctUser && inputPswd == correctPswd) {
    alert("Welcome! You have successfully logged in.");
    $("authForm").fadeOut();
    $("#container").fadeIn();
    document.getElementById("login").style.display = "none";
  } else if (inputUser == "" || inputPswd == "") {
    alert("Please enter both your username and password.");
  } else {
    alert("Incorrect password! Please try again.");
  }
}

function employerSignin() {
  let inputUser = document.getElementById("validateEmployer").value;
  let inputPswd = document.getElementById("validateEmployerPwd").value;
  let correctUser = "whysoserious";
  let correctPswd = "thosewhoknow";
  if (inputUser == correctUser && inputPswd == correctPswd) {
    alert("Welcome! You have successfully logged in.");
    $("authForm").fadeOut();
    $("#newposting").fadeIn();
    $("#postings").fadeIn();
    $("#applicants").fadeIn();
    document.getElementById("login").style.display = "none";
  } else if (inputUser == "" || inputPswd == "") {
    alert("Please enter both your username and password.");
  } else {
    alert("Incorrect password! Please try again.");
  }
}