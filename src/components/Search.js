import React from 'react';



const Search = ({ players, setPlayers, filteredPlayers, setFilteredPlayers }) => {


    const handleChange = (event) => {
        const userInput = event.target.value.toLowerCase()
        setFilteredPlayers(players.filter((player) => {
            return (player.first_name.toLowerCase().includes(userInput) || player.last_name.toLowerCase().includes(userInput))
        }))
    }


    return (
        <div className='search'>

            <label htmlFor="search"></label>
            <input type="Search" placeholder="search for a player" onChange={handleChange} />

        </div>
    );
};

export default Search;