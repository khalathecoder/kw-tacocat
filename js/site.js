function getValues() {
  // get the users input aka entry point aka controller
  // decide what to do with it
  let userInput = document.getElementById("message").value;

  let reversedInput = reverseString(userInput);

  displayString(reversedInput);
  // you are now calling the function to line 26
}

function reverseString(message) {
  // take a string, return it in reverse aka business logic
  let reversedMessage = "";

  for (let index = message.length - 1; index >= 0; index--) {
    reversedMessage += message[index];
  }
  return reversedMessage;
}

function displayString(reversedMessage) {
  // show the string on page aka view function
  document.getElementById("msg").textContent = reversedMessage;
  document.getElementById("alert").classList.remove("d-none");
}

// Swal.fire({
//   backdrop: false,
//   title: "TacoCat",
//   text: msg,
// });
