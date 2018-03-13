import React, { Component } from 'react';
import BoardContainer from '../containers/BoardContainer';
import GameOverContainer from '../containers/GameOverContainer';
import ScoreContainer from '../containers/ScoreContainer';
import ShipSummaryContainer from '../containers/ShipSummaryContainer';

class App extends Component {
    render() {
        return (
            <div>
                <ScoreContainer />
                <ShipSummaryContainer />
                <BoardContainer />
                <GameOverContainer />
            </div>
        );
    }
}

export default App;
