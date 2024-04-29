function trasureHunter(perjalanan) {
    let nilaiHartaKarun = 0;
  
    for (let i = 0; i < perjalanan.length; i++) {
      const karakter = perjalanan[i];
  
      if (karakter === '$') {
        nilaiHartaKarun += 100;
      } else if (karakter === 'x') {
        nilaiHartaKarun -= 10;
  
      } else if (karakter === '#') {
        nilaiHartaKarun *= 0.5
      }
    }
    return nilaiHartaKarun;
  }
  
  // Contoh penggunaan fungsi:
  console.log(trasureHunter("$x$#x$")); // 185
  console.log(trasureHunter("$$#x$$")); // 290
  console.log(trasureHunter("x$#x$#x$")); // 157.5
  console.log(trasureHunter("xx$#$#$#$###xx")); // 3.125
  
  
  