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


  let clearPlayers = () => {
    setActivePlayers([])
  }




  return (

    <div>
      <div>
        <button onClick={clearPlayers}>Clear Players</button>
      </div>
      <div className='main'>
        <Search players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} />
        <PlayerList players={players} setPlayers={setPlayers} activePlayers={activePlayers} setActivePlayers={setActivePlayers} />
        <Route path="/player-comparison/" render={(routerProps) => <PlayerComparison activePlayers={activePlayers} setActivePlayers={setActivePlayers} match={routerProps.match} />} />
      </div>
    </div>

  );
}

export default App;
