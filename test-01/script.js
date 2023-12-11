// 숫자 생성
function generateNumberCombinations(numbers) {
  const result = [];

  function generateCombinationsHelper(currentIndex, currentCombination, used) {
    if (currentIndex === numbers.length) {
      result.push(currentCombination.slice());
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!used[i]) {
        currentCombination.push(numbers[i]);
        used[i] = true;
        generateCombinationsHelper(currentIndex + 1, currentCombination, used);
        currentCombination.pop();
        used[i] = false;
      }
    }
  }

  generateCombinationsHelper(0, [], Array(numbers.length).fill(false));

  return result;
}

// 무작위로 생성할 수
const inputNumbers = [1, 3, 5, 7, 9];
const combinations = generateNumberCombinations(inputNumbers);

// 생성된 두 수 곱셈
function multiplyTwoNumbers(number1, number2) {
  return number1 * number2;
}

// 최대값 저장
let maxProduct = 0;
let maxNumbers = [];

// 최대값 업데이트
for (const combination of combinations) {
  for (let i = 1; i < inputNumbers.length; i++) {
    const number1 = combination.slice(0, i).join("");
    const number2 = combination.slice(i).join("");
    const result = multiplyTwoNumbers(number1, number2);

    if (result > maxProduct) {
      maxProduct = result;
      maxNumbers = [number1, number2];
    }

    console.log(`${number1} * ${number2} = ${result}`);
  }
}

console.log(
  `${maxProduct}가 가장 큰 값이며, 두 숫자는 ${maxNumbers[0]}, ${maxNumbers[1]} 입니다`
);
