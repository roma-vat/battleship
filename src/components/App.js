import React, { Component } from 'react';
import ShipSummaryContainer from '../containers/ShipSummaryContainer';
import BoardContainer from '../containers/BoardContainer';

class App extends Component {
    render() {
        return (
            <div>
                <ShipSummaryContainer />
                <BoardContainer />
            </div>
        );
    }
}

export default App;
