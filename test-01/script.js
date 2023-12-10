function findMaxNum(num) {
  let maxNum = 0;
  for (let firstNum = 0; firstNum < num.length; firstNum++) {
    for (let secondNum = firstNum + 1; secondNum < num.length; secondNum++) {
      const multiplyNum = num[firstNum] * num[secondNum];
      if (multiplyNum > maxNum) {
        maxNum = multiplyNum;
      }
    }
  }
  return maxNum;
}

const arrNum = [1, 3, 5, 7, 9];

const result = findMaxNum(arrNum);
console.log(`가장 큰 숫자는 ${result} 입니다`);
