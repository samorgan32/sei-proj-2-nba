import React, { useEffect } from 'react';
import PlayerList from './PlayerList';


const Player = ({ players, setPlayers, activePlayers, setActivePlayers, playerNames, setPlayerNames, filteredPlayers, match }) => {
    const playerSearchOptions = {
        url: 'https://www.balldontlie.io/api/v1/season_averages?',
        playerId: `player_ids[]=${match.params.id}`
    }

    useEffect(() => {


        fetch(`${playerSearchOptions.url}${playerSearchOptions.playerId}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
    }, [match.params.id])

    // if (!activePlayers) {
    //     return <p>select players to compare
    //     </p>
    // }
    // if (!playerNames) {
    //     return <p>loading</p>
    // }

    // if (!filteredPlayers) {
    //     return <p>loading</p>
    // }

    // // let nameOfPlayer = filteredPlayers.map(player => (
    // // <h2>{player.first_name}</h2>
    // // ))

    // function nameOfPlayer() {
    //     players.map(player => {
    //         if (player.id === match.params.id) {
    //             <h2>{player.first_name}</h2>
    //         }
    //     })
    // }




    return (

        <div>

            {/* <div>
                {nameOfPlayer}
            </div> */}

            {
                activePlayers.map((activePlayer) => (
                    <div>

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