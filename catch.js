const form = document.getElementById('submission'); // Replace with your form's ID

function createPosting() {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
  // Create an empty object to store form values
    const formData = {};
  // Loop through all form inputs
    for (const input of form.elements) {
    // Skip submit button
      if (input.type === "submit") continue;
    // Get the value of the input and add it to the formData object
      formData[input.name] = input.value;
    }
  // Convert the formData object to JSON
    const jsonData = JSON.stringify(formData);
  // Do something with the jsonData (e.g., send it to the backend)
    console.log(jsonData); // Log the JSON data to the console
  });
}