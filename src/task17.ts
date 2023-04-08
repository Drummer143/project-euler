// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. 
// The use of "and" when writing out numbers is in compliance with British usage.

// answer: 21124

import { measureTime, setStartMark } from "./utils";

const numInWordsMap = new Map<number, number>();

numInWordsMap.set(0, ''.length);
numInWordsMap.set(1, 'one'.length);
numInWordsMap.set(2, 'two'.length);
numInWordsMap.set(3, 'three'.length);
numInWordsMap.set(4, 'four'.length);
numInWordsMap.set(5, 'five'.length);
numInWordsMap.set(6, 'six'.length);
numInWordsMap.set(7, 'seven'.length);
numInWordsMap.set(8, 'eight'.length);
numInWordsMap.set(9, 'nine'.length);
numInWordsMap.set(10, 'ten'.length);
numInWordsMap.set(11, 'eleven'.length);
numInWordsMap.set(12, 'twelve'.length);
numInWordsMap.set(13, 'thirteen'.length);
numInWordsMap.set(14, 'fourteen'.length);
numInWordsMap.set(15, 'fifteen'.length);
numInWordsMap.set(16, 'sixteen'.length);
numInWordsMap.set(17, 'seventeen'.length);
numInWordsMap.set(18, 'eighteen'.length);
numInWordsMap.set(19, 'nineteen'.length);
numInWordsMap.set(20, 'twenty'.length);
numInWordsMap.set(30, 'thirty'.length);
numInWordsMap.set(40, 'forty'.length);
numInWordsMap.set(50, 'fifty'.length);
numInWordsMap.set(60, 'sixty'.length);
numInWordsMap.set(70, 'seventy'.length);
numInWordsMap.set(80, 'eighty'.length);
numInWordsMap.set(90, 'ninety'.length);

const HUNDRED = 'hundred'.length;
const THOUSAND = 'thousand'.length;
const AND = 'and'.length;

export const task17 = () => {
    let sumLengths = 0;

    setStartMark();

    for (let i = 1; i <= 1000; i++) {
        let numWord = numInWordsMap.get(i);

        if (numWord) {
            sumLengths += numWord;
            continue;
        }

        let num = i.toString().split('').reverse().join('');

        switch (num.length) {
            case 4: {
                const thousand = +num[3];

                sumLengths += numInWordsMap.get(thousand) + THOUSAND;
            }
            case 3: {
                const hundred = +num[2];

                if (hundred) {
                    sumLengths += numInWordsMap.get(hundred) + HUNDRED;
                }
            }
            case 2: {
                const last = +num.slice(0, 2).split('').reverse().join('');

                if (last === 0) {
                    break;
                }

                if (num.length > 2) {
                    sumLengths += AND;
                }

                if (last < 20) {
                    sumLengths += numInWordsMap.get(last);
                    break;
                }

                const ten = +num[1];
                const unit = +num[0];

                sumLengths += numInWordsMap.get(ten * 10) + numInWordsMap.get(unit);
            }
        }
    };

    measureTime();

    return sumLengths;
}
