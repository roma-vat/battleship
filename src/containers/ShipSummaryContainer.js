import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShipSummary from '../components/ShipSummary';

class ShipSummaryContainer extends Component {
    render() {
        return (
            <ShipSummary shipSummary={this.props.shipSummary} />
        )
    }
}

function mapStateToProps(state) {
    return { shipSummary: state.battleship.shipSummary };
}

export default connect(mapStateToProps, null)(ShipSummaryContainer);
