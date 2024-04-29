function getCount(inputString) {
    let vowelCount = 0;
    const lowerCaseString = inputString.toLowerCase();
  
    for (let i = 0; i < lowerCaseString.length; i++) {
      const char = lowerCaseString[i];
  
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  console.log(getCount("my pyx")); // 0
  console.log(getCount("pear tree")); // 4
  console.log(getCount("abracadabra")); // 5
  console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
  