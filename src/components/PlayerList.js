import React from 'react';
import { Link } from 'react-router-dom'
import Player from './Player';

const PlayerList = ({ players, setPlayers }) => {
    if (!players) {
        return <p>loading
        </p>
    }

    return (

        <div>
            {
                players.map((player) => (
                    <div>
                        <Link to="/player-comparison/" >
                            <div>
                                <h2>{player.first_name} {player.last_name} <span style={{ fontSize: "large", fontWeight: "300" }} >({player.team.abbreviation})</span></h2>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerList;