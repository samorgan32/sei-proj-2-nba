import React, { useEffect } from 'react';



const Player = ({ activePlayers, setActivePlayers, playerNames, setPlayerNames, match }) => {
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
            })

        fetch(`${playerSearchOptions.url}${playerSearchOptions.seasonAverages}${playerSearchOptions.playerId}`)
            .then(res => res.json())
            .then(res => {
                setActivePlayers(res.data)
            })
    }, [match.params.id])

    if (!activePlayers) {
        return <p>select players to compare
        </p>
    }
    if (!playerNames) {
        return <p>loading</p>
    }


    return (

        <div className='player'>



            <div>
                <h2>{playerNames.first_name} {playerNames.last_name}</h2>
                {/* <h3>Team: {playerNames.team.full_name} </h3> */}
                <h3>Position: {playerNames.position}</h3>
                <h3>Height: {playerNames.height_feet}'{playerNames.height_inches}</h3>
                <h3>Weight: {playerNames.weight_pounds} lbs.</h3>
            </div>



            {
                activePlayers.map((activePlayer) => (


                    <div>
                        <p>season: {activePlayer.season}</p>
                        <p>points: {activePlayer.pts}</p>
                        <p>assists: {activePlayer.ast}</p>
                        <p>rebounds: {activePlayer.reb}</p>
                        <p>steals: {activePlayer.stl}</p>
                        <p>blocks: {activePlayer.blk}</p>
                        <p>minutes/game: {activePlayer.min}</p>
                        <p>fg%: {parseFloat((activePlayer.fg_pct) * 100).toFixed(2)} </p>
                        <p>3pt%: {parseFloat((activePlayer.fg3_pct) * 100).toFixed(2)} </p>
                        <p>turnovers: {activePlayer.turnover}</p>

                    </div>

                ))
            }
        </div>
    );

};

export default Player;