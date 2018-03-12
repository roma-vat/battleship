export const CLICK_CELL = 'CLICK_CELL';

export const clickCell = (row, column) => ({
    type: CLICK_CELL,
    row,
    column
});
