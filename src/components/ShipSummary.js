import React, { Component } from 'react';
import './ShipSummary.css';

/**
 * Ship Summary component.
 * Shows list of all ships and how many cells are dead or alive.
 */
class ShipSummary extends Component {
    render() {
        return (
            <div className="ship-summary">
                {this.props.shipSummary.map((ship, shipId) => this.renderShip(ship, shipId))}
            </div>
        );
    }

    /**
     * Render specific ship.
     * @param {object} ship - Ship state.
     * @param {number} shipId - Index of ship in the state.
     */
    renderShip(ship, shipId) {
        let liveScores = new Array(ship.size).fill().map((_, i) => {
            let scoreClasses = ["livescore"];
            if (i < ship.shootedCells) {
                scoreClasses.push("shooted");
            }
            return (
                <div className={scoreClasses.join(" ")} key={i} />
            );
        });
        return (
            <div className="ship-row" key={shipId}>
                <div className="ship-row-inner" >
                    <div className={"shippic " + ship.ship}>
                    </div>
                    <div className="ship-live">
                        {liveScores}
                    </div>
                </div>
            </div>
        )
    }
}

export default ShipSummary;
