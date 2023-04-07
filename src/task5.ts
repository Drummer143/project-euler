// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// answer: 232792560

const primeNumbersInProduct = new Map();
primeNumbersInProduct.set(2, 1);
primeNumbersInProduct.set(3, 1);

export const task5 = () => {
    for (let i = 4; i <= 20; i++) {
        let number = i;

        const primeNumberInCurrentNumber = new Map();

        // divide by known primes
        for (const primeNumber of primeNumbersInProduct.keys()) {
            let countOfNumber = 0;

            while (number % +primeNumber === 0) {
                number /= +primeNumber;

                countOfNumber++;
            }

            if (countOfNumber) {
                primeNumberInCurrentNumber.set(primeNumber, countOfNumber);
            }

            if (number === 1) {
                break;
            }
        }

        if (number !== 1) {
            primeNumberInCurrentNumber.set(number, 1);
        }

        // update primes in product
        for (const [key, value] of primeNumberInCurrentNumber.entries()) {
            const prevCount = primeNumbersInProduct.get(key) || 1;

            primeNumbersInProduct.set(key, prevCount > value ? prevCount : value);
        }
    }

    let product = 1;

    for (const [key, value] of primeNumbersInProduct) {
        product *= Math.pow(key, value);
    }

    return product;
}
