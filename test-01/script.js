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

function multiplyTwoNumbers(number1, number2) {
  return parseInt(number1, 10) * parseInt(number2, 10);
}

const inputNumbers = [1, 3, 5, 7, 9];
const combinations = generateNumberCombinations(inputNumbers);

let maxProduct = -1;
let maxNumbers = [];

for (const combination of combinations) {
  for (let i = 1; i < inputNumbers.length; i++) {
      const number1 = combination.slice(0, i).join('');
      const number2 = combination.slice(i).join('');
      const result = multiplyTwoNumbers(number1, number2);

      if (result > maxProduct) {
          maxProduct = result;
          maxNumbers = [number1, number2];
      }
  }
}

console.log(`가장 큰 값: ${maxProduct}, 두 숫자: ${maxNumbers[0]}, ${maxNumbers[1]}`);