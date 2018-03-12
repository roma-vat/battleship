import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickCell } from '../actions';
import Board from '../components/Board';

class BoardContainer extends Component {
    render() {
        return (
            <Board board={this.props.board} onCellClick={this.props.clickCell} />
        )
    }
}

function mapStateToProps(state) {
    return { board: state.battleship.board };
}

export default connect(mapStateToProps, { clickCell })(BoardContainer);
