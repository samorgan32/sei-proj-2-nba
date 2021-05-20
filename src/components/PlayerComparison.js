import React from 'react';
import Player from './Player';

const PlayerComparison = ({ players, setPlayers, activePlayers, setActivePlayers }) => {
    return (
        <div>
            <Player players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} />

        </div>
    );
};

export default PlayerComparison;