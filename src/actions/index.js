export const CLICK_CELL = 'CLICK_CELL';
export const CLICK_NEW_GAME = 'CLICK_NEW_GAME';

/**
 * Action emitted when user clicks on board cell.
 * @param {number} row - Row index of clicked cell.
 * @param {number} column - Column index of clicked cell.
 */
export const clickCell = (row, column) => ({
    type: CLICK_CELL,
    row,
    column
});

/**
 * Action emitted when user clicks 'New Game' button.
 */
export const clickNewGame = () => ({
    type: CLICK_NEW_GAME
});
