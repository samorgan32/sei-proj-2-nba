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
                            <h2>{player.first_name} {player.last_name}:</h2>
                            <p>{player.team.abbreviation}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerList;