function schoolSignin() {
  let inputUser = document.getElementById("validateAdmin").value;
  let inputPswd = document.getElementById("validateAdminPwd").value;
  let correctUser = "zakriya.khan";
  let correctPswd = "mango";
  if (inputUser === correctUser && inputPswd === correctPswd) {
    alert("Welcome! You have successfully logged in.");
    document.getElementById("signin").style.display = "none";
    document.getElementById("container").style.display = "block";
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
    document.getElementById("signin").style.display = "none";
    document.getElementById("newposting").style.display = "block";
    document.getElementById("postings").style.display = "block";
    document.getElementById("applicants").style.display = "block";
  } else {
    alert("Incorrect password! Please try again.");
  }
}
