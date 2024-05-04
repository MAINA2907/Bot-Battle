import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, onDischarge }) => {
  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <div className="row">
      {enlistedBots.map(bot => (
        <div className="col-md-4 mb-4" key={bot.id}>
          <BotCard bot={bot} onDischarge={handleDischarge} />
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;