import React from 'react';
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
                        <div>
                            <h2>{player.first_name} {player.last_name} <span style={{ fontSize: "large", fontWeight: "300" }} >({player.team.abbreviation})</span></h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerList;