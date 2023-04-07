// The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385,
// The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025,
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 
// 3025 - 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// answer: 25164150

const sumOfSequenceOfNumbers = (lastNumber: number) => lastNumber * (lastNumber + 1) / 2;

const sumOfSequenceOfSquaresOfNumbers = (lastNumber: number) => lastNumber * (lastNumber + 1) * (2 * lastNumber + 1) / 6;

export const task6 = () => {
    const lastNumber = 100;

    return Math.pow(sumOfSequenceOfNumbers(lastNumber), 2) - sumOfSequenceOfSquaresOfNumbers(lastNumber);
}
