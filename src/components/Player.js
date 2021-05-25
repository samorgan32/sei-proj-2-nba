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

            </div>



            <div>
                <h2>{playerNames.first_name} {playerNames.last_name}</h2>
                {playerNames.team && <h3>{playerNames.team.full_name}</h3>}
                <h3>{playerNames.position}</h3>
                <h3>{playerNames.height_feet}'{playerNames.height_inches}</h3>
                <h3>{playerNames.weight_pounds} lbs.</h3>
            </div>

            {
                activePlayers.map((activePlayer) => (


                    <div>
                        <p>{activePlayer.season}</p>
                        <p>{activePlayer.pts}</p>
                        <p>{activePlayer.ast}</p>
                        <p>{activePlayer.reb}</p>
                        <p>{activePlayer.stl}</p>
                        <p>{activePlayer.blk}</p>
                        <p>{activePlayer.min}</p>
                        <p>{parseFloat((activePlayer.fg_pct) * 100).toFixed(2)} </p>
                        <p>{parseFloat((activePlayer.fg3_pct) * 100).toFixed(2)} </p>
                        <p>{activePlayer.turnover}</p>

                    </div>

                ))
            }
        </div>
    );

};

export default Player;