import React, { Component } from 'react';
import BoardContainer from '../containers/BoardContainer';
import GameOverContainer from '../containers/GameOverContainer';
import ShipSummaryContainer from '../containers/ShipSummaryContainer';

class App extends Component {
    render() {
        return (
            <div>
                <ShipSummaryContainer />
                <BoardContainer />
                <GameOverContainer />
            </div>
        );
    }
}

export default App;
