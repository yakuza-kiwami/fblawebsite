function validator() {
  let inputPswd = document.getElementById("validate").value;
  let correctPwd = "mango";
  if (inputPswd === correctPwd) {
    alert("Welcome...! You have successfully logged in." + "\n" + "Please wait while we redirect you to the backend...");
    document.getElementById("container").style.display = "block";
    document.getElementById("pswd").style.display = "none";
  } else {
    alert("Incorrect password!");
  }
}

function companySignin() {
  let inputUser = document.getElementById("validateUser").value;
  let inputPswd = document.getElementById("validatePswd").value;
  let correctUser = "khanaz-kp";
  let correctPwd = "wearebigbacks";
  if (inputUser === correctUser && inputPswd === correctPwd) {
    alert("Welcome...! You have successfully logged in.");
    document.getElementById("newposting").style.display = "block";
    document.getElementById("pending").style.display = "block";
    document.getElementById("applicants").style.display = "block";
    document.getElementById("pswd").style.display = "none";
  } else {
    alert("Incorrect password!");
  }
}
