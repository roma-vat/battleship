import React, { Component } from 'react';
import BoardContainer from '../containers/BoardContainer';
import GameOverContainer from '../containers/GameOverContainer';
import ScoreContainer from '../containers/ScoreContainer';
import ShipSummaryContainer from '../containers/ShipSummaryContainer';
import './App.css';

/**
 * Main app component.
 */
class App extends Component {
    render() {
        return (
            <div className="app-main">
                <div className="app-main-inner">
                    <ScoreContainer />
                    <ShipSummaryContainer />
                    <BoardContainer />
                    <GameOverContainer />
                </div>
            </div>
        );
    }
}

export default App;
