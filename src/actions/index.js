export const CLICK_CELL = 'CLICK_CELL';
export const CLICK_NEW_GAME = 'CLICK_NEW_GAME';

export const clickCell = (row, column) => ({
    type: CLICK_CELL,
    row,
    column
});

export const clickNewGame = () => ({
    type: CLICK_NEW_GAME
});
