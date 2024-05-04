import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({}) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://json-server-bots-l98p.onrender.com/bots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <div className="row ">
        {bots.map((bot) => (
          <div className="col-sm-3 mb-3 ">
            <div className="card h-100" key={bot.id}>
              <img src={bot.avatar_url} className="card-img-center" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="text-body-secondary">{bot.catchphrase}</p>
              </div>

              <div class="card-footer">
                <small class="text-body-secondary">
                 {BotCard}
                </small>
              </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
