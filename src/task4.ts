// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// answer: 906609

export const task4 = () => {
    const maxNum = 999;
    const minNum = 100;

    let maxPalindrome = 0;

    for (let i = maxNum; i >= minNum; i--) {
        for (let j = maxNum; j >= minNum; j--) {
            const product = (i * j);
            const stringProduct = product.toString();

            if(stringProduct.split("").reverse().join("") === stringProduct && product > maxPalindrome) {
                maxPalindrome = product;
            }
        }
    }

    return maxPalindrome;
}
