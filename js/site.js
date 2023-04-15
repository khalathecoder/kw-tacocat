function getValues() {
  // get the users input aka entry point aka controller
  // decide what to do with it
  let userInput = document.getElementById("message").value;

  let reversedInput = checkForPalindrome(userInput.replaceAll(' ', ''));

  displayResults(reversedInput);
  // you are now calling the function
}

function checkForPalindrome(string) {

  let strLength = string.length;

  for (let index = 0; index < strLength / 2; index++) {
    if (string[index] !== string[strLength - 1 - index]) {
        return false;
    }; 
  }
  return "Your phrase reversed is:" ;
}

function displayResults(reversedInput) {
  // show the string on page aka view function
  if(reversedInput) {
    document.getElementById("msg").textContent = reversedInput;
  } else {
    document.getElementById("msg2").textContent = reversedInput;
  }
  
  if(reversedInput){
    document.getElementById("alert").classList.remove("d-none");
    document.getElementById("alerttwo").classList.add("d-none");
  } else {
    document.getElementById("alerttwo").classList.remove("d-none");
    document.getElementById("alert").classList.add("d-none");
  }
}

// Swal.fire({
//   backdrop: false,
//   title: "TacoCat",
//   text: msg,
// });
