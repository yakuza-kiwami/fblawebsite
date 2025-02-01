function schoolSignin() {
  let inputUser = document.getElementById("validateAdmin")
  let inputPswd = document.getElementById("validateAdminPwd").value;
  let correctUser = "zakriya.khan"
  let correctPwd = "mango";
  if (inputPswd === correctPwd) {
    alert("Welcome! You have successfully logged in.");
    document.getElementById("container").style.display = "block";
    document.getElementById("pswd").style.display = "none";
  } else {
    alert("Incorrect password!");
  }
}

function employerSignin() {
  let inputUser = document.getElementById("validateEmployer").value;
  let inputPswd = document.getElementById("validateEmployerPwd").value;
  let correctUser = "khanaz-kp";
  let correctPwd = "wearebigbacks";
  if (inputUser === correctUser && inputPswd === correctPwd) {
    alert("Welcome! You have successfully logged in.");
    document.getElementById("newposting").style.display = "block";
    document.getElementById("pending").style.display = "block";
    document.getElementById("applicants").style.display = "block";
    document.getElementById("pswd").style.display = "none";
  } else {
    alert("Incorrect password! Please try again.");
  }
}
