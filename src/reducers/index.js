import { combineReducers } from 'redux'

import { CLICK_CELL } from '../actions';

const layoutData = {
    "shipTypes": {
        "carrier": { "size": 5, "count": 1 },
        "battleship": { "size": 4, "count": 1 },
        "cruiser": { "size": 3, "count": 1 },
        "submarine": { "size": 3, "count": 1 },
        "destroyer": { "size": 2, "count": 1 },
    },
    "layout": [
        { "ship": "carrier", "positions": [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
        { "ship": "battleship", "positions": [[5, 2], [5, 3], [5, 4], [5, 5]] },
        { "ship": "cruiser", "positions": [[8, 1], [8, 2], [8, 3]] },
        { "ship": "submarine", "positions": [[3, 0], [3, 1], [3, 2]] },
        { "ship": "destroyer", "positions": [[0, 0], [1, 0]] }
    ]
};


const BOARD_SIZE = [10, 10]

const defaultBoardLayout = [];
for (let row = 0; row < BOARD_SIZE[0]; row++) {
    const boardRow = [];
    for (let column = 0; column < BOARD_SIZE[1]; column++) {
        boardRow.push({ shipId: null, shoot: false, hit: false });
    }
    defaultBoardLayout.push(boardRow);
}

for (let shipId = 0; shipId < layoutData.layout.length; shipId++) {
    for (let [row, column] of layoutData.layout[shipId].positions) {
        defaultBoardLayout[row][column].shipId = shipId;
    }
}

const defaultBattleship = {
    board: defaultBoardLayout
};

const battleship = (state = defaultBattleship, action) => {
    switch (action.type) {
        case CLICK_CELL:
            let board = state.board.map((row, rowindex) =>
                action.row == rowindex ?
                    row.map((cell, columnindex) => action.column == columnindex ? { ...cell, shoot: true, hit: cell.shipId != null } : cell) :
                    row
            );
            return { ...state, board };
    }

    return state;
}

const app = combineReducers({ battleship });

export default app;
