// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// answer: 6857

let target = 600851475143;

const simpleNumbers = [2];

export const task3 = () => {
    while (true) {
        let currentSimpleNumber = simpleNumbers.at(-1);

        while (target % currentSimpleNumber === 0) {
            target /= currentSimpleNumber;
        }

        if (findNextSimpleNumber(currentSimpleNumber)) {
            return target;
        }
    }
}

const findNextSimpleNumber = (currentSimpleNumber: number) => {
    let isFoundSimpleNumber = false;

    const sqrtTarget = Math.sqrt(target);

    if (currentSimpleNumber > sqrtTarget) {
        return true;
    }

    for (let i = currentSimpleNumber + 1; i < sqrtTarget + 1 && !isFoundSimpleNumber; i++) {
        isFoundSimpleNumber = !simpleNumbers.some(n => i % n === 0);

        if (isFoundSimpleNumber) {
            simpleNumbers.push(i);
        }
    }

    return false;
}
