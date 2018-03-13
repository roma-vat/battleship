import battleship from './battleship';
import { clickCell, clickNewGame } from '../actions';

it('updates cell if user hits', () => {
    const board = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: false, hit: false }, { shipId: 0, shoot: false, hit: false }],
    ];
    const shipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 0
    }];
    const state = {
        board,
        shipSummary,
        clicks: 0,
        gameOver: false
    };
    const action = clickCell(1, 0);

    const expectedBoard = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: false, hit: false }],
    ];
    const expectedShipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 1
    }];
    const expectedState = {
        board: expectedBoard,
        shipSummary: expectedShipSummary,
        clicks: 1,
        gameOver: false
    };
    expect(battleship(state, action)).toEqual(expectedState);
});

it('updates cell if user misses', () => {
    const board = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: false, hit: false }, { shipId: 0, shoot: false, hit: false }],
    ];
    const shipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 0
    }];
    const state = {
        board,
        shipSummary,
        clicks: 0,
        gameOver: false
    };
    const action = clickCell(0, 0);

    const expectedBoard = [
        [{ shipId: null, shoot: true, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: false, hit: false }, { shipId: 0, shoot: false, hit: false }],
    ];
    const expectedState = {
        board: expectedBoard,
        shipSummary,
        clicks: 1,
        gameOver: false
    };
    expect(battleship(state, action)).toEqual(expectedState);
});

it('does not update cell if user clicks cell twice', () => {
    const board = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: false, hit: false }],
    ];
    const shipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 1
    }];
    const state = {
        board,
        shipSummary,
        clicks: 1,
        gameOver: false
    };
    const action = clickCell(1, 0);

    const expectedBoard = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: false, hit: false }],
    ];
    const expectedShipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 1
    }];
    const expectedState = {
        board: expectedBoard,
        shipSummary: expectedShipSummary,
        clicks: 1,
        gameOver: false
    };
    expect(battleship(state, action)).toEqual(expectedState);
});

it('shows game over screen if user hits last ship', () => {
    const board = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: false, hit: false }],
    ];
    const shipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 1
    }];
    const state = {
        board,
        shipSummary,
        clicks: 1,
        gameOver: false
    };
    const action = clickCell(1, 1);

    const expectedBoard = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: true, hit: true }],
    ];
    const expectedShipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 2
    }];
    const expectedState = {
        board: expectedBoard,
        shipSummary: expectedShipSummary,
        clicks: 2,
        gameOver: true
    };
    expect(battleship(state, action)).toEqual(expectedState);
});


it('starts new game if user clicks new game button', () => {
    const board = [
        [{ shipId: null, shoot: false, hit: false }, { shipId: null, shoot: false, hit: false }],
        [{ shipId: 0, shoot: true, hit: true }, { shipId: 0, shoot: true, hit: true }],
    ];
    const shipSummary = [{
        ship: "ship",
        size: 2,
        shootedCells: 2
    }];
    const state = {
        board,
        shipSummary,
        clicks: 2,
        gameOver: true
    };
    const action = clickNewGame();

    let newState = battleship(state, action);
    expect(newState).toHaveProperty('clicks', 0);
    expect(newState).toHaveProperty('gameOver', false);
});
