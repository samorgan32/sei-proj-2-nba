import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import data from './data.json'
import './App.css';



function App() {
  const [players, setPlayers] = useState([])
  const [activePlayers, setActivePlayers] = useState([])
  // const searchOptions = {
  //   url: 'https://www.balldontlie.io/api/v1/players?per_page=100&search=james'
  // }

  let clearPlayers = () => {
    setActivePlayers([])
  }




  return (

    <div>
      <div>
        <button onClick={clearPlayers}>Clear Players</button>
      </div>
      <div>
        <Search players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} />
        <PlayerList players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} />
        <Route path="/player-comparison/" render={(routerProps) => <PlayerComparison activePlayers={activePlayers} setActivePlayers={setActivePlayers} match={routerProps.match} />} />
      </div>
    </div>

  );
}

export default App;
