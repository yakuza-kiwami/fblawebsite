/* Manage applications and postings */
function approvePosting() { // Schools approving postings
  alert("Posting approved!")
  document.getElementById("posting").style.display = "none";
}

function rejectPosting() { // Schools rejecting postings
  alert("Posting rejected.")
  document.getElementById("posting4").style.display = "none";
}

function removePosting() { // Employers removing postings
  alert("Posting removed.")
  document.getElementById("posting").style.display = "none";
}

function submitPost() { // Employers submitting postings
  alert("Posting submitted, and pending approval from school administration.");
};

/* Manage applications */
function submitApp() { // Students submitting applications
  alert("Application submitted, and pending approval from the employer!");
}

function approveApp() { // Employers accepting applications
  alert("Application approved! Contact this applicant using their email or phone number.")
  document.getElementById("app").style.display = "none";
}

function rejectApp() { // Employers rejecting applications
  alert("Application rejected.")
  document.getElementById("app2").style.display = "none";
}