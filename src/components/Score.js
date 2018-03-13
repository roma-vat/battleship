import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    render() {
        let score = this.props.clicks.toString();
        while (score.length < 2) {
            score = "0" + score;
        }
        return (
            <div className="score-main">
                <div className="player-score me">
                    <div className="score-value">
                        {score}
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
