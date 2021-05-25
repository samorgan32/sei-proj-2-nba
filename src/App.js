import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import Player from './components/Player'
import data from './data.json'
import playerData from './playerData.json'
import './App.css';



function App() {
  const [players, setPlayers] = useState(playerData.data)
  const [activePlayers, setActivePlayers] = useState([])
  const [playerNames, setPlayerNames] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])
  const playersArray = []


  let clearPlayers = () => {
    setActivePlayers([])
  }

  let comparePlayer = () => {
    const comparedPlayer = { ...playerNames, ...activePlayers[0] }
    console.log(comparedPlayer)
    playersArray.push(comparedPlayer)
    console.log(playersArray)
  }

  comparePlayer()




  return (

    <div>
      <div>
        <button onClick={clearPlayers}>Clear Players</button>
      </div>
      <div className='main'>
        <Search players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />

        <PlayerList players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />

        <Route path="/player/:id" render={(routerProps) => <Player players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} match={routerProps.match} />} />

        <Redirect path="/" />
      </div>
    </div>

  );
}

export default App;
