import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import Player from './components/Player'
import playerData from './playerData.json'
import './App.css';



function App() {
  const [players, setPlayers] = useState(playerData.data)
  const [activePlayers, setActivePlayers] = useState([])
  const [playerNames, setPlayerNames] = useState([])
  const [filteredPlayers, setFilteredPlayers] = useState([])
  const [playerCompare, setPlayerCompare] = useState(null)


  let comparePlayer = () => {
    const comparedPlayer = { ...playerNames, ...activePlayers[0] }
    setPlayerCompare(comparedPlayer)
  }




  return (


    <div>

      <h1>NBA Players</h1>

      <div className='main'>

        {/* <div className='buttons'> */}
        <button className='buttons' onClick={comparePlayer}>Set Player to Compare</button>
        {/* </div> */}

        <div className='search'>
          <Search players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />

          <PlayerList players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} />
        </div>

        <div className='stat-identifiers'>

          <div>
            <h3>Compare</h3>
            <h3>Position</h3>
            <h3>Height</h3>
            <h3>Weight</h3>
          </div>

          <div>
            <p>season</p>
            <p>points</p>
            <p>assists</p>
            <p>rebounds</p>
            <p>steals</p>
            <p>blocks</p>
            <p>minutes/game</p>
            <p>fg%</p>
            <p>3pt%</p>
            <p>turnovers</p>
          </div>

        </div>



        <Route path="/player/:id" render={(routerProps) => <Player players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} filteredPlayers={filteredPlayers} setFilteredPlayers={setFilteredPlayers} match={routerProps.match} />} />

        <PlayerComparison playerCompare={playerCompare} setPlayerCompare={setPlayerCompare} />

        <Redirect path="/" />
      </div>

    
    </div>

  );
}

export default App;
