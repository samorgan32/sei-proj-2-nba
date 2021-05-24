import React, { useState, useEffect } from 'react';
import data from '../data.json'
import PlayerList from './PlayerList'


const Search = ({ players, setPlayers, filteredPlayers, setFilteredPlayers }) => {
    const [activePlayers, setActivePlayers] = useState([])


    const handleChange = (event) => {

        event.preventDefault()
        // console.log(event.target.value)
        const userInput = event.target.value.toLowerCase()
        // console.log(userInput)
        setFilteredPlayers(players.filter((player) => {
            return (player.first_name.toLowerCase().includes(userInput) || player.last_name.toLowerCase().includes(userInput))
        }))
        // setPlayers(filteredPlayers)


        // const searchOptions = {
        //     search: `${userInput}`,
        //     url: 'https://www.balldontlie.io/api/v1/players?per_page=100',

        // }


        // fetch(`${searchOptions.url}&search=${searchOptions.search}`)
        //     .then(res => res.json())
        //     .then(res => {
        //         // console.log(res.data)
        //         setPlayers(res.data)
        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })

        if (!userInput) {
            setPlayers([])
        }

    }

    // useEffect(() => {
    //     if (!activePlayers) {
    //         return <p>search for players</p>
    //     }

    // }, [])


    return (
        <div>

            <label htmlFor="search"></label>
            <input type="Search" placeholder="search for a player" onChange={handleChange} />

        </div>
    );
};

export default Search;