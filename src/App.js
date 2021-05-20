import React, { useState } from 'react'
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
    </div>
  );
}

export default App;
