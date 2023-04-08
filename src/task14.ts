// The following iterative sequence is defined for the set of positive integers:
//                              n → n/2 (n is even)
//                              n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:
//                      13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), 
// it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
// NOTE: Once the chain starts the terms are allowed to go above one million.


// answer: 837799

import { measureTime, setStartMark } from "./utils";

const cacheMap = new Map();

export const task14 = () => {
    let maxSequenceLength = 1, numberWithMaxSequence = 1;

    setStartMark();

    for (let i = 2; i < 1_000_000; i++) {
        let currentSeqNumber = i, currentSeqLen = 0;

        while (currentSeqNumber !== 1) {
            if (currentSeqNumber & 1) {
                currentSeqNumber = 3 * currentSeqNumber + 1;
            } else {
                currentSeqNumber /= 2;
            }

            currentSeqLen++;

            let prevResults = cacheMap.get(currentSeqNumber);

            if (prevResults) {
                currentSeqLen += +prevResults;
                break;
            }
        }

        cacheMap.set(i, currentSeqLen);

        if (currentSeqLen > maxSequenceLength) {
            maxSequenceLength = currentSeqLen;
            numberWithMaxSequence = i;
        }
    }

    measureTime();

    return numberWithMaxSequence;
}
