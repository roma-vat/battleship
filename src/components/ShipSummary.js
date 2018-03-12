import React, { Component } from 'react';
import './ShipSummary.css';

class ShipSummary extends Component {
    render() {
        return (
            <div className="ship-summary">
                {this.props.shipSummary.map((ship, shipId) => this.renderShip(ship, shipId))}
            </div>
        );
    }

    renderShip(ship, shipId) {
        let liveScores = [];
        for (let i = 0; i < ship.allCells; i++) {
            let scoreClasses = ["livescore"];
            if (i < ship.shootedCells) {
                scoreClasses.push("shooted");
            }
            liveScores.push(<div className={scoreClasses.join(" ")} key={i} />);
        }
        return (
            <div className="ship-row" key={shipId}>
                <div className={"shippic-" + ship.ship}>
                    {ship.ship}
                </div>
                <div className="ship-live">
                    {liveScores}
                </div>
            </div>
        )
    }
}

export default ShipSummary;
