import React, { Component } from 'react';
import './GameOver.css';

class GameOver extends Component {
    render() {
        return (
            <div className={"game-over" + (this.props.gameOver ? " show" : "")}>
                <div className="game-over-label">
                    You finished the game in {this.props.clicks} clicks.
                </div>
                <input className="game-over-button" type="button" value="Try again" onClick={this.props.onStartNewClick} />
            </div>
        );
    }
}

export default GameOver;
