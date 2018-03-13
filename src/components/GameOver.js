import React, { Component } from 'react';
import './GameOver.css';

/**
 * Game Over component.
 * Shows number of clicks which user made to 'hit' all ships.
 */
class GameOver extends Component {
    render() {
        return (
            <div className={"game-over" + (this.props.gameOver ? " show" : "")}>
                <div className="game-over-label">
                    You finished the game in {this.props.clicks} clicks.
                </div>
                <div className="game-over-button" onClick={this.props.onStartNewClick}>
                    Try again
                </div>
            </div>
        );
    }
}

export default GameOver;
