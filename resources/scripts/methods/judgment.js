const form = document.getElementById('submission'); // Replace with your form's ID

/* Manage applications and postings */
function approvePosting() {
  alert("Posting approved!")
  document.getElementById("posting").style.display = "none";
}

function rejectPosting() {
  alert("Posting rejected.")
  document.getElementById("posting").style.display = "none";
}

function submitPost() {
  alert("yeah... it was most definitely created...");
};

/* Manage applications */
function submitApp() {
  alert("yeah... it was most definitely received... we got that... yeah...");
}