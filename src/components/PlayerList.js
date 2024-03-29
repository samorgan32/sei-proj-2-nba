import React from 'react';
import { Link } from 'react-router-dom'


const PlayerList = ({ filteredPlayers }) => {

    //maps the search results returned from search component, and maps that over the playerList
    let listOfPlayers = filteredPlayers.map(player => {
        const playerID = player.id

        return (

            <div>
                <Link to={"/player/" + playerID} id={playerID}>
                    <div>
                        <h2 id={player.id} name={player.first_name}>{player.first_name} {player.last_name} <span style={{ fontSize: "large", fontWeight: "300" }} >({player.team.abbreviation})</span></h2>
                    </div>
                </Link>
            </div>
        )
    })

    return (

        <div className="player-list">
            {listOfPlayers}
        </div>


    );
};

export default PlayerList;