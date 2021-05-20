import React, { useState } from 'react';

const Player = ({ activePlayers, setActivePlayers }) => {

    if (!activePlayers) {
        return <p>select players to compare
        </p>
    }

    return (

        <div>
            {
                activePlayers.map((activePlayer) => (
                    <div>
                        <div>
                            <h1>{activePlayer.first_name} {activePlayer.last_name}</h1>
                        </div>
                        <div>
                            <p>{activePlayer.pts}</p>
                            <p>{activePlayer.ast}</p>
                            <p>{activePlayer.reb}</p>
                            <p>{activePlayer.stl}</p>
                            <p>{activePlayer.blk}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Player;