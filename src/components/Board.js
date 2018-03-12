import React, { Component } from 'react';
import './Board.css';

class BoardCell extends Component {
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

class Board extends Component {
    onClick = (rowindex, columnindex) => {
        this.props.onCellClick(rowindex, columnindex);
    }

    render() {
        return (
            <div className="board">
                {this.props.board.map((row, rowindex) => this.renderRow(row, rowindex))}
            </div>
        );
    }

    renderRow(row, rowindex) {
        return (
            <div key={rowindex} className="board-row">
                {row.map((cell, columnindex) => this.renderCell(cell, rowindex, columnindex))}
            </div>
        );
    }

    renderCell(cell, rowindex, columnindex) {
        return (
            <BoardCell key={`${rowindex}-${columnindex}`} rowindex={rowindex} columnindex={columnindex} shoot={cell.shoot} hit={cell.hit} onClick={this.onClick} />
        );
    }
}

export default Board;
