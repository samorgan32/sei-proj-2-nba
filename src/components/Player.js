import React from 'react';

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
                            <p>points: {activePlayer.pts}</p>
                            <p>assists: {activePlayer.ast}</p>
                            <p>rebounds: {activePlayer.reb}</p>
                            <p>steals: {activePlayer.stl}</p>
                            <p>blocks: {activePlayer.blk}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );

};

export default Player;