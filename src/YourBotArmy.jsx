import React from "react";

const YourBotArmy = ({ bots, onRemoveBot, onDischargeBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.map((bot) => (
        <div key={bot.id} className="bot-card">
          <img src={bot.avatar_url} alt={bot.name} />
          <h3>{bot.name}</h3>
          <p>{bot.bot_class}</p>
          <button onClick={() => onRemoveBot(bot)}>Remove from Army</button>
          <button onClick={() => onDischargeBot(bot)} style={{ color: "red" }}>
            Discharge
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
