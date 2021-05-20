import React, { useState } from 'react';

const Player = ({ players, setPlayers }) => {

    if (!players) {
        return <p>loading
        </p>
    }

    return (

        <div>
            {
                players.map((player) => (
                    <h1>{player.first_name}</h1>
                ))
            }
        </div>
    );
};

export default Player;