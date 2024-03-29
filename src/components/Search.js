import React from 'react';



const Search = ({ players, setFilteredPlayers }) => {

    //sets the search results on each character input
    const handleChange = (event) => {
        const userInput = event.target.value.toLowerCase()
        setFilteredPlayers(players.filter((player) => {
            return (player.first_name.toLowerCase().includes(userInput) || player.last_name.toLowerCase().includes(userInput))
        }))
    }


    return (
        <div>


            <input type="Search" placeholder="search nba players" onChange={handleChange} />

        </div>
    );
};

export default Search;