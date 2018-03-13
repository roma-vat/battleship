import React, { Component } from 'react';
import { connect } from 'react-redux';
import Score from '../components/Score';

class ScoreContainer extends Component {
    render() {
        return (
            <Score clicks={this.props.clicks} />
        )
    }
}

function mapStateToProps(state) {
    return { clicks: state.battleship.clicks };
}

export default connect(mapStateToProps, null)(ScoreContainer);
