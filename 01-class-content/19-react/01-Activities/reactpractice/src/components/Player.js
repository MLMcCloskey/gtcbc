import React from "react";
import Counter from './Counter';

function Player(props) {
    return (
        <div className="player">
            <div className="player-name">
                {props.name}
            </div>

            <div className="player-score">
                <Counter score={props.score} />
            </div>
        </div>
    );
}

// Player.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
//     // id: React.PropTypes.number.isRequired,
// }

Player.defaultProps = {
    score: 0
}

export default Player;