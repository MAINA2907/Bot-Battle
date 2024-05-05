import React, { useState } from 'react';
import YourBotArmy from './Components/YourBotArmy';
import BotCollection from './Components/BotCollection';

function App() {

  const [selectedBots, setSelectedBots] = useState([]);
  const [bots, setBots] = useState([]);

  

  return (
    <div className="App">
       <YourBotArmy selectedBots={selectedBots} setSelectedBots={setSelectedBots} setBots={setBots}/>
      <BotCollection setSelectedBots={setSelectedBots} bots={bots} setBots={setBots}/>
      
    </div>
  );
}

export default App;