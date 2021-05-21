import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Player from './Player';

const PlayerList = ({ players, setPlayers, activePlayers, setActivePlayers }) => {
    if (!players) {
        return <p>loading
        </p>
    }

    const handleClick = (event) => {
        const playersArray = activePlayers
        let newPlayer = event.target.id
        players.forEach(player => player.player_id == newPlayer ? playersArray.push(player) : null);
        let comparedPlayers = [...new Set(playersArray)]
        setActivePlayers(comparedPlayers)
    }

    console.log(activePlayers)

    return (

        <div>
            {
                players.map((player) => (
                    <div>
                        <Link to="/player-comparison/" onClick={handleClick}>
                            <div>
                                <h2 id={player.id}>{player.first_name} {player.last_name} <span style={{ fontSize: "large", fontWeight: "300" }} >({player.team.abbreviation})</span></h2>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default PlayerList;