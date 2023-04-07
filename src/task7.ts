// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// answer: 104743

// The Sieve of Eratosthenes

const REQUIRED_PRIME_NUMBER_INDEX = 10001;

const createArraySeq = (lastNumber: number) => new Array(lastNumber - 1).fill(undefined).map((_, i) => i + 2);

export const task7 = () => {
    let array = createArraySeq(120000);

    for (let i = 0; i < array.length; i++) {
        const primes = array.slice(0, i + 1);

        array = primes.concat(array.slice(i + 1).filter(num => {
            return num % array[i] !== 0 || num === array[i]
        }));

        if (i === REQUIRED_PRIME_NUMBER_INDEX + 1) {
            break;
        }
    }

    return array.at(REQUIRED_PRIME_NUMBER_INDEX - 1);
}
