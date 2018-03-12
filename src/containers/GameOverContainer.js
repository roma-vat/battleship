import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clickNewGame } from '../actions';
import GameOver from '../components/GameOver';

class GameOverContainer extends Component {
    render() {
        return (
            <GameOver clicks={this.props.clicks} gameOver={this.props.gameOver} onStartNewClick={this.props.clickNewGame} />
        )
    }
}

function mapStateToProps(state) {
    return { clicks: state.battleship.clicks, gameOver: state.battleship.gameOver };
}

export default connect(mapStateToProps, { clickNewGame })(GameOverContainer);
