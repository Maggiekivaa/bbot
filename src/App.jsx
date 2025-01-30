// App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import SortBar from "./SortBar";
import BotSpecs from "./BotSpecs";

const App = () => {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [view, setView] = useState("collection"); 
  const [botDetails, setBotDetails] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8001/bots")
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  
  const showBotDetails = (bot) => {
    setBotDetails(bot);
    setView("details"); 
  };

  const goBackToCollection = () => {
    setView("collection"); 
    setBotDetails(null); 
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>

      {view === "collection" && (
        <>
          <SortBar />
          <BotCollection
            bots={bots}
            onAddBot={() => {}}
            onShowDetails={showBotDetails}
          />
        </>
      )}

      {view === "details" && botDetails && (
        <BotSpecs bot={botDetails} onGoBack={goBackToCollection} />
      )}

      <YourBotArmy bots={botArmy} />
    </div>
  );
};

export default App;
