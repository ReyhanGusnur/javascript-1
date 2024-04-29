function reverseString(inputString) {
    let reverseString = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      reverseString += inputString[i];
    }
  
    return reverseString;
  }
  
  console.log(reverseString("hello")); // 'olleh'
  console.log(reverseString("world")); // 'dlrow'
  console.log(reverseString("")); // ''
  console.log(reverseString("h")); // 'h'