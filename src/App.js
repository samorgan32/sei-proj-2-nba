import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import data from './data.json'
import playerData from './playerData.json'
import './App.css';



function App() {
  const [players, setPlayers] = useState(playerData.data)
  const [activePlayers, setActivePlayers] = useState([])
  const [playerNames, setPlayerNames] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])

  useEffect(() => {

    fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
      .then(res => res.json())
      .then(res => {
        // console.log(res.data)
        setPlayers(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])



  let clearPlayers = () => {
    setActivePlayers([])
  }




  return (

    <div>
      <div>
        <button onClick={clearPlayers}>Clear Players</button>
      </div>
      <div className='main'>
        <Search players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />
        <PlayerList players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />
        <Route path="/player-comparison/" render={(routerProps) => <PlayerComparison activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} match={routerProps.match} />} />
      </div>
    </div>

  );
}

export default App;
