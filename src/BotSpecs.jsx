// BotSpecs.jsx
import React from "react";

const BotSpecs = ({ bot, onGoBack }) => {
  return (
    <div className="bot-specs">
      <h2>{bot.name} - Details</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
      <button onClick={onGoBack}>Back to List</button>
    </div>
  );
};

export default BotSpecs;
