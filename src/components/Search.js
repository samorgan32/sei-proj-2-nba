import React, { useState } from 'react';

const Search = ({ players, setPlayers }) => {
    const handleSearch = (event) => {
        console.log(event.target.value)
    }

    // const handleSubmit = () => {
    //     setPlayers()
    // }

    return (
        <div>
            <label htmlFor="search"></label>
            <input type="Search" placeholder="search for a player" onChange={handleSearch} />
            <button>Search</button>
        </div>
    );
};

export default Search;