import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
    render() {
        return (
            <div class="score-main">
                <div class="player-score me">
                    <div class="score-value">
                        {this.props.clicks.toString().padStart(2, 0)}
                    </div>
                    <div class="score-playername">
                        player 1
                    </div>
                </div>
                <div class="player-score competitor">
                    <div class="score-value">
                        00
                    </div>
                    <div class="score-playername">
                        player 1
                    </div>
                </div>
            </div>
        );
    }
}

export default Score;
