import React from 'react';
import Player from './Player';

const PlayerComparison = ({ players, setPlayers }) => {
    return (
        <div>
            <Player players={players} setPlayers={setPlayers} />

        </div>
    );
};

export default PlayerComparison;