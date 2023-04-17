function getValues() {
  // get the users input aka entry point aka controller
  // decide what to do with it
  let userInput = document.getElementById("message").value;

  const regex = /[^a-z0-9]/gi
    userInput = userInput.replace(regex, "");


  let reversedInput = checkForPalindrome(
    userInput.toLowerCase().replaceAll(" ", "")

    
  );

  //added the replaceAll for removing spaces and toLowerCase for case omission

  displayResults(reversedInput);
  // you are now calling the function
}

function checkForPalindrome(string) {
  let strLength = string.length;


  for (let index = 0; index < strLength / 2; index++) {
    if (string[index] !== string[strLength - 1 - index]) {
      return; // false
    }
  }
  return `You entered "${string}" which is a palindrome.`; // true
}

function displayResults(reversedInput) {
  // show the string on page aka view function
  if (reversedInput) {
    document.getElementById("msg").textContent = reversedInput;
  } else {
    document.getElementById("msg2").textContent = reversedInput;
  }

  if (reversedInput) {
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("alerttwo").classList.add("d-none");
  } else {
    document.getElementById("alerttwo").classList.remove("d-none");
    document.getElementById("alert").classList.add("d-none");
  }
}

// Swal.fire({
//   backdrop: false,
//   title: "Top Spot",
//   text: msg,
// });
