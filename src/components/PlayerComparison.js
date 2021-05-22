import React from 'react';
import Player from './Player';

const PlayerComparison = ({ players, setPlayers, activePlayers, setActivePlayers, playerNames, setPlayerNames }) => {
    return (
        <div className='player-comparison'>
            <Player players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} />

        </div>
    );
};

export default PlayerComparison;