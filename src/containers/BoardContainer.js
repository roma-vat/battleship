import React, { Component } from 'react';

import { connect } from 'react-redux';
import { clickCell } from '../actions';

import Board from '../components/Board';

class BoardContainer extends Component {
    onCellClick = (row, column) => {
        this.props.clickCell(row, column);
    }

    render() {
        return (
            <Board board={this.props.board} onCellClick={this.onCellClick} />
        )
    }
}

function mapStateToProps(state) {
    return { board: state.battleship.board };
}

export default connect(mapStateToProps, { clickCell })(BoardContainer);
