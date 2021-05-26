import React, { useState } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import Player from './components/Player'
import playerData from './playerData.json'
import './App.css';



function App() {
  const [players, setPlayers] = useState(playerData.data)
  //pulling player data from json file and setting it for the list of players that is searched through
  const [activePlayers, setActivePlayers] = useState([])
  //the array used to store the season averages pulled from the stats api and mapped on Player component
  const [playerNames, setPlayerNames] = useState([])
  //sets the bio info for a specific player from the players api and mapped on player component
  const [filteredPlayers, setFilteredPlayers] = useState([])
  //used to return the search results on the search component and mapped on the player list component
  const [playerCompare, setPlayerCompare] = useState(null)
  //used to store the data from the api on Player and make it available while user searches for a second player. 


  //sets state for the player compare when a player in the player list is clicked. 
  let comparePlayer = () => {
    const comparedPlayer = { ...playerNames, ...activePlayers[0] }
    setPlayerCompare(comparedPlayer)
    setActivePlayers([])
    setPlayerNames([])
  }

  let clearPlayers = () => {
    setPlayerCompare(null)
  }


  return (


    <div>
      <nav>
        <Link to='/' onClick={clearPlayers}>
          <h1>1 on 1</h1>
        </Link>
      </nav>


      <div className='main'>


        <div className='search'>
          <Search players={players} setFilteredPlayers={setFilteredPlayers} />

          <PlayerList filteredPlayers={filteredPlayers} />
        </div>

        <div className='player-display'>
          <button className='buttons' onClick={comparePlayer}>Set Player to Compare</button>
          <div className='stat-identifiers'>
            <div>
              <div>
                <h3>Name</h3>
                <h3>Team</h3>
                <h3>Position</h3>
                <h3>Height</h3>
                <h3>Weight</h3>
              </div>

              <div>
                <h3>Season</h3>
                <h3>Points</h3>
                <h3>Assists</h3>
                <h3>Rebounds</h3>
                <h3>Steals</h3>
                <h3>Blocks</h3>
                <h3>Minutes</h3>
                <h3>FG%</h3>
                <h3>3PT%</h3>
                <h3>Turnovers</h3>
              </div>
            </div>


          </div>



          <Route path="/player/:id" render={(routerProps) => <Player activePlayers={activePlayers} setActivePlayers={setActivePlayers} playerNames={playerNames} setPlayerNames={setPlayerNames} match={routerProps.match} />} />

          <PlayerComparison playerCompare={playerCompare} />

        </div>
      </div>

      <Redirect path='/' />

    </div>

  );
}

export default App;
