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
                    <div>
                        <div>
                            <h1>{player.first_name}</h1>
                        </div>
                        <div>
                            <p>{player.pts}</p>
                            <p>{player.ast}</p>
                            <p>{player.reb}</p>
                            <p>{player.stl}</p>
                            <p>{player.blk}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Player;