import React, { useState } from 'react';
import data from '../data.json'


const Search = ({ players, setPlayers }) => {
    const [activePlayers, setActivePlayers] = useState([])

    const handleChange = (event) => {
        // console.log(event.target.value)
        const userInput = event.target.value.toLowerCase()
        // console.log(userInput)
        const filteredPlayers = players.filter((player) => {
            return (player.first_name.toLowerCase().includes(userInput) || player.last_name.toLowerCase().includes(userInput))
        })
        setPlayers(filteredPlayers)
        if (!userInput) {
            setPlayers(data.data)
        }

    }



    return (
        <div>
            <label htmlFor="search"></label>
            <input type="Search" placeholder="search for a player" onChange={handleChange} />
            {/* <button>Search</button> */}
        </div>
    );
};

export default Search;