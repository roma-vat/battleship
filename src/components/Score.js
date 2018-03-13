import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    render() {
        return (
            <div className="score-main">
                <div className="player-score me">
                    <div className="score-value">
                        {this.props.clicks.toString().padStart(2, 0)}
                    </div>
                    <div className="score-playername">
                        player 1
                    </div>
                </div>
                <div className="player-score competitor">
                    <div className="score-value">
                        00
                    </div>
                    <div className="score-playername">
                        player 2
                    </div>
                </div>
            </div>
        );
    }
}

export default Score;
