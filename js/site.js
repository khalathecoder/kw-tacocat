function getValues() {
  // get the users input aka entry point aka controller
  // decide what to do with it
  let userInput = document.getElementById("message").value;

  let reversedInput = checkForPalindrome(userInput);

  displayResults(reversedInput);
  // you are now calling the function to line 26
}

function checkForPalindrome(string) {
//   let reversedMessage = "";
  let strLength = string.length;

  for (let index = 0; index < strLength / 2; index++) {
    if (string[index] !== string[strLength - 1 - index]); {
        return false;
    }
  }
  return true;
}

function displayResults(reversedMessage) {
  // show the string on page aka view function
  document.getElementById("msg").textContent = reversedMessage;
  document.getElementById("alert").classList.remove("d-none");
}

// Swal.fire({
//   backdrop: false,
//   title: "TacoCat",
//   text: msg,
// });
