function schoolSignin() {
  let inputUser = document.getElementById("validateAdmin").value;
  let inputPswd = document.getElementById("validateAdminPwd").value;
  let correctUser = "fcps";
  let correctPswd = "mango";
  if (inputUser === correctUser && inputPswd === correctPswd) {
    alert("Welcome! You have successfully logged in.");
    document.getElementById("authForm").style.display = "none";
    document.getElementById("authForm2").style.display = "none";
    document.getElementById("container").style.display = "block";
    // $("#container").fadeIn();
  } else {
    alert("Incorrect password! Please try again.");
  }
}

function employerSignin() {
  let inputUser = document.getElementById("validateEmployer").value;
  let inputPswd = document.getElementById("validateEmployerPwd").value;
  let correctUser = "khanaz-kp";
  let correctPswd = "thosewhoknow";
  if (inputUser === correctUser && inputPswd === correctPswd) {
    alert("Welcome! You have successfully logged in.");
    document.getElementById("authForm").style.display = "none";
    document.getElementById("authForm2").style.display = "none";
    document.getElementById("newposting").style.display = "block";
    document.getElementById("postings").style.display = "block";
    document.getElementById("applicants").style.display = "block";
    // $("#newposting").fadeIn();
    // $("#postings").fadeIn();
    // $("#applicants").fadeIn();
  } else {
    alert("Incorrect password! Please try again.");
  }
}