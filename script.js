let inputSlider = document.querySelector("#pwd-range");
// console.log(inputSlider);
let pwdLengthLabel = document.querySelector(".pwd-length");
pwdLengthLabel.innerHTML = inputSlider.value;
// on click of inputslider password length will display the value chosen by slider

inputSlider.addEventListener("click", (event) => {
  pwdLengthLabel.innerHTML = Number(event.target.value);
});

const lowercaseString = "abcdefghijklmnopqrstuvwxyz";
const uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersString = "0123456789";
const symbolsString = "~!@#$%^&*";

const generatePassword = () => {
  let combinedStr = "";
  let lowerCaseFlag = document.querySelector("#lower-case").checked;
  let upperCaseFlag = document.querySelector("#upper-case").checked;
  let numberFlag = document.querySelector("#numbers").checked;
  let symbolFlag = document.querySelector("#symbols").checked;
  combinedStr +=
    (lowerCaseFlag ? lowercaseString : "") +
    (upperCaseFlag ? uppercaseString : "") +
    (numberFlag ? numbersString : "") +
    (symbolFlag ? symbolsString : "");

  let generatedPassword = "";
  for (let i = 0; i < inputSlider.value; i++) {
    let randomIndex = Math.floor(Math.random() * combinedStr.length + 0);
    generatedPassword += combinedStr[randomIndex];
  }

  document.querySelector("#pwd-box").value = generatedPassword;
};
let generatePwdButton = document.querySelector(".genBtn");
generatePwdButton.addEventListener("click", (event) => {
  generatePassword();
});
const copyIcon = document.querySelector("#copyIcon");
copyIcon.addEventListener("click", (event) => {
  let copiedText = document.querySelector("#pwd-box").value;
  if (copiedText.length !== 0) {
    navigator.clipboard.writeText(copiedText);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";
    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, [3000]);
  }
});
