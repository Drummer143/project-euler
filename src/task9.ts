// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//                                                              a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// answer: 31875000

const PERIMETER = 1000;

export const task9 = () => {
    for (let a = 1; a < PERIMETER - 1; a++) {
        for (let b = a + 1; b < PERIMETER; b++) {
            const c = PERIMETER - a - b;

            let hypotenuse = a * a + b * b;

            if (hypotenuse === c * c) {
                return a * b * c;
            }
        }
    }
}