import React from 'react';
import PlayerList from './PlayerList';

const Player = ({ players, setPlayers, activePlayers, setActivePlayers, playerNames, setPlayerNames }) => {

    if (!activePlayers) {
        return <p>select players to compare
        </p>
    }
    if (!playerNames) {
        return <p>loading</p>
    }

    let nameOfPlayer = playerNames.map(playerName => (
        <h2>{playerName}</h2>
    ))


    return (

        <div>


            {/* 
            {
                activePlayers.map((activePlayer) => (
                    <div>
                        <div>
                            {nameOfPlayer}
                        </div>
                        <div>
                            <p>points: {activePlayer.pts}</p>
                            <p>assists: {activePlayer.ast}</p>
                            <p>rebounds: {activePlayer.reb}</p>
                            <p>steals: {activePlayer.stl}</p>
                            <p>blocks: {activePlayer.blk}</p>
                        </div>
                    </div>
                ))
            } */}
        </div>
    );

};

export default Player;