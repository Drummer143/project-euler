// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//                          [https://projecteuler.net/project/images/p015.png]
// How many such routes are there through a 20×20 grid?

// answer: 137846528820

import { measureTime, setStartMark } from "./utils";

const GRID_SIZE = 21; // NxN grid has (N + 1) edges. We're moving along the edges, so the real size for us is (N + 1)

const getRoutesFromLeftCell = (grid: number[][], x: number, y: number) => {
    if (x === 0) {
        return 0;
    }

    return grid[x - 1][y];
}

const getRoutesFromTopCell = (grid: number[][], x: number, y: number) => {
    if (y === 0) {
        return 0;
    }

    return grid[x][y - 1];
}

export const task15 = () => {
    const grid = new Array<number[]>(GRID_SIZE).fill(undefined).map(() => new Array(GRID_SIZE).fill(0));

    grid[0][0] = 1;

    setStartMark()

    for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = 0; y < GRID_SIZE; y++) {
            const routesToLeftCell = getRoutesFromLeftCell(grid, x, y);
            const routesToTopCell = getRoutesFromTopCell(grid, x, y);

            grid[x][y] += routesToLeftCell + routesToTopCell;
        }
    };

    measureTime();

    return grid.at(-1).at(-1);
}