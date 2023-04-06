export const task1 = () => {
    let sum = 3;

    for (let i = 5; i < 1000; i++) {
        if (!(i % 3) || !(i % 5)) {
            sum += i;
        }
    }

    return sum
}