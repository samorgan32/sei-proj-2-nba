import React from 'react';
import Player from './Player';

const PlayerComparison = ({ players, setPlayers, activePlayers, setActivePlayers, playerNames, setPlayerNames }) => {

    let nameOfPlayer = playerNames.map(playerName => (
        <h2>{playerName}</h2>
    ))

    return (
        <div className='player-comparison'>
            <div>
                {nameOfPlayer}
            </div>
            <Player players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} />

        </div>
    );
};

export default PlayerComparison;