import { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import BotCollection from './Components/BotCollection.js';
import SortBar from './Components/SortBar.js';
import YourBotArmy from './Components/yourbotarmy.js';


const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    if (!enlistedBots.some(b => b.bot_class === bot.bot_class)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleDischarge = (bot) => {
    setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id));
  };

  const handleDischargeForever = (bot) => {
    fetch(`/api/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setEnlistedBots(enlistedBots.filter(b => b.id !== bot.id));
      });

    }
  return (
 
  <div>
    
      <div>
        <SortBar />
        {/* <FilterBar /> */}
        <BotCollection onEnlist={handleEnlist} enlistedBots={enlistedBots} />
      </div>
 
      <YourBotArmy
        enlistedBots={enlistedBots}
        onDischarge={handleDischarge}
        onDischargeForever={handleDischargeForever}
      />
   
  </div>

  )
}
export default App;
