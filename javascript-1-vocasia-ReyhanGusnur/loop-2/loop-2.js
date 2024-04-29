function countAndSum(number) {
    if (typeof number !== 'number' || number <= 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      const cucupNumber = (i - 1) % 3 + 1;
      sum += cucupNumber;
    }
  
    return sum;
  }
  
  // Contoh penggunaan fungsi:
  console.log(countAndSum(5)); // 9
  console.log(countAndSum(10)); // 19
  console.log(countAndSum(100)); // 199
  console.log(countAndSum(17)); // 33
  console.log(countAndSum(19)); // 0 (37?)