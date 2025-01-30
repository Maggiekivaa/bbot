// BotCollection.jsx
import React from "react";

const BotCollection = ({ bots, onAddBot, onShowDetails }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <button onClick={() => onAddBot(bot)}>Add to Army</button>
          <button onClick={() => onShowDetails(bot)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
