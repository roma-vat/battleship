import React, { Component } from 'react';
import './Board.css';

/**
 * Board cell component.
 * Board cell shows 'hit' or 'miss'.
 */
class BoardCell extends Component {
    /**
     * Cell click handler.
     */
    onClick = () => {
        this.props.onClick(this.props.rowindex, this.props.columnindex);
    }

    render() {
        let classNames = ["board-cell"];
        if (this.props.shoot) {
            classNames.push("shoot");
        }
        if (this.props.hit) {
            classNames.push("hit");
        }

        return (
            <div className={classNames.join(" ")} onClick={this.onClick} />
        );
    }
}

/**
 * Board component.
 * Shows 2-dimensional board array as table.
 */
class Board extends Component {
    /**
     * Cell click handler.
     * @param {number} rowindex - Row index of clicked cell.
     * @param {number} columnindex - Column index of clicked cell.
     */
    onClick = (rowindex, columnindex) => {
        this.props.onCellClick(rowindex, columnindex);
    }

    render() {
        return (
            <div className="board-outer">
                <div className="board">
                    {this.props.board.map((row, rowindex) => this.renderRow(row, rowindex))}
                </div>
            </div>
        );
    }

    /**
     * Render row of cells.
     * @param {object} row - Row state.
     * @param {number} rowindex - Index of rendered row.
     */
    renderRow(row, rowindex) {
        return (
            <div key={rowindex} className="board-row">
                {row.map((cell, columnindex) => this.renderCell(cell, rowindex, columnindex))}
            </div>
        );
    }

    /**
     * Render cell.
     * @param {object} cell - Cell state.
     * @param {number} rowindex - Row index of rendered cell.
     * @param {number} columnindex - Column index of rendered cell.
     */
    renderCell(cell, rowindex, columnindex) {
        return (
            <BoardCell key={`${rowindex}-${columnindex}`} rowindex={rowindex} columnindex={columnindex} shoot={cell.shoot} hit={cell.hit} onClick={this.onClick} />
        );
    }
}

export default Board;
