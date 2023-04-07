const START_MARK = 'START_MARK';
const END_MARK = 'END_MARK';

export const setStartMark = () => performance.mark(START_MARK);

export const measureTime = () => {
    performance.mark(END_MARK);

    const { duration } = performance.measure('result', { start: START_MARK, end: END_MARK });

    console.log('duration:', duration);
}