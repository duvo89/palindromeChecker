let palindrome = (value) => {
  value = value.toLowerCase();
  value = value.replace(/\W/g, "");
  for (let i = 0; i <= value.length; i++) {
    if (value[i] !== value[value.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

let x = palindrome("abba");
if (x == true) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
