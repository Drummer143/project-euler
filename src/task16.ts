// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

// answer: 1366

import { measureTime, setStartMark } from "./utils";

export const task16 = () => {
    setStartMark();

    const num = BigInt(Math.pow(2, 1000)).toString();

    const result = num.split("").reduce((prev, curr) => prev + +curr, 0);

    measureTime();

    return result;
}
