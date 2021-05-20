import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import Search from './components/Search'
import PlayerComparison from './components/PlayerComparison'
import PlayerList from './components/PlayerList';
import data from './data.json'
import './App.css';



function App() {

  const [players, setPlayers] = useState(data.data)

  return (
    <div>
      <Search players={players} setPlayers={setPlayers} />
      <PlayerList players={players} setPlayers={setPlayers} />
      <Route path="/player-comparison/" render={(routerProps) => <PlayerComparison players={players} setPlayers={setPlayers} match={routerProps.match} />} />
    </div>
  );
}

export default App;
