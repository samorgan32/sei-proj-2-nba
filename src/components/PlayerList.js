import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'


const PlayerList = ({ players, setPlayers, activePlayers, setActivePlayers }) => {
    if (!players) {
        return <p>loading
    </p>
    }

    const handleClick = (event) => {
        // const playersArray = activePlayers
        // let newPlayer = event.target.id
        // players.forEach(player => player.player_id == newPlayer ? playersArray.push(player) : null);
        // let comparedPlayers = [...new Set(playersArray)]
        // setActivePlayers(comparedPlayers)

        const playersArray = activePlayers
        let newPlayer = event.target.id
        players.forEach(player => player.player_id == newPlayer ? playersArray.push(newPlayer) : null);

        const playerSearchOptions = {
            url: 'https://www.balldontlie.io/api/v1/season_averages?',
            playerId: `player_ids[]=${newPlayer}`
        }

        fetch(`${playerSearchOptions.url}${playerSearchOptions.playerId}`)
            .then(res => res.json())
            .then(res => playersArray.push(res.data[0]))

        setActivePlayers(playersArray)
    }

    console.log(activePlayers)



    return (

        <div className='player-list'>
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