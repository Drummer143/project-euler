const START_MARK = 'START_MARK';
const END_MARK = 'END_MARK';

export const setStartMark = () => {
    performance.mark(START_MARK)
};

export const measureTime = () => {
    performance.mark(END_MARK);

    const { duration } = performance.measure('result', START_MARK, END_MARK);

    console.log('duration:', Math.ceil(duration * 1000) / 1000, 'ms');
}
