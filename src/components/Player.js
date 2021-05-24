import React, { useEffect } from 'react';
import PlayerList from './PlayerList';
import playerData from '../playerData.json'


const Player = ({ players, setPlayers, activePlayers, setActivePlayers, playerNames, setPlayerNames, filteredPlayers, match }) => {
    const playerSearchOptions = {
        url: 'https://www.balldontlie.io/api/v1/',
        seasonAverages: 'season_averages?player_ids[]=',
        playerId: match.params.id,
        players: 'players/',

    }

    useEffect(() => {

        fetch(`${playerSearchOptions.url}${playerSearchOptions.players}${playerSearchOptions.playerId}`)
            .then(res => res.json())
            .then(res => {
                setPlayerNames(res)
                console.log(res)
            })

        fetch(`${playerSearchOptions.url}${playerSearchOptions.seasonAverages}${playerSearchOptions.playerId}`)
            .then(res => res.json())
            .then(res => {
                setActivePlayers(res.data)
                console.log(res.data)
            })
    }, [match.params.id])

    // if (!activePlayers) {
    //     return <p>select players to compare
    //     </p>
    // }
    if (!playerNames) {
        return <p>loading</p>
    }

    // if (!filteredPlayers) {
    //     return <p>loading</p>
    // }


    // let nameOfPlayer = playerNames.map(playerName => (
    //     <h2>{playerName.first_name}</h2>
    // ))

    // function nameOfPlayer() {
    //     playerNames.map(playerName => {
    //         if (player.id === match.params.id) {
    //             <h2>{player.first_name}</h2>
    //         }
    //     })
    // }




    return (

        <div>
            {
                playerNames ?

                    <div>
                        <h2>{playerNames.first_name} {playerNames.last_name}</h2>
                        <h3>Team: {playerNames.team.full_name} </h3>
                        <h3>Position: {playerNames.position}</h3>
                        <h3>Height: {playerNames.height_feet}'{playerNames.height_inches}</h3>
                        <h3>Weight: {playerNames.weight_pounds} lbs.</h3>
                    </div> : <p>loading</p>

            }

            {
                activePlayers.map((activePlayer) => (
                    <div>

                        <div>
                            <p>season: {activePlayer.season}</p>
                            <p>points: {activePlayer.pts}</p>
                            <p>assists: {activePlayer.ast}</p>
                            <p>rebounds: {activePlayer.reb}</p>
                            <p>steals: {activePlayer.stl}</p>
                            <p>blocks: {activePlayer.blk}</p>
                            <p>minutes/game: {activePlayer.min}</p>
                            <p>fg%: {parseFloat((activePlayer.fg_pct) * 100).toFixed(2)}% </p>
                            <p>3pt%: {parseFloat((activePlayer.fg3_pct) * 100).toFixed(2)}% </p>
                            <p>turnovers: {activePlayer.turnover}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    );

};

export default Player;