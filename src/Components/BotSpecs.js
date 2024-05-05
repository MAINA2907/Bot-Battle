import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function BotSpecs() {

    const navigate = useNavigate();
    const botId = useParams()
    const [bot, setBot] = useState({})
    console.log(botId)
    useEffect (() => {
        fetch(`https://json-server-bots-l98p.onrender.com/bots/${botId.id}`)
       .then(response => response.json())
       .then(data => setBot(data))
    }, [])

  return (
    <div className="col-lg-2 mb-3">
      <div className="card h-100" key={bot.id}>
        <img src={bot.avatar_url} className="card-img-center" alt="" />

        <div className="card-body">
          <h2 className="card-title">{bot.name}</h2>
          <p className="text-body-secondary">{bot.catchphrase}</p>
          <p className="">{bot.bot_class}</p>
        </div>

        <div className="card-footer">
          <small className="text-body-secondary">
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
          </small>
        </div>

        <button
          className="button1"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
        {/* <button className="button2" onClick={() => addToArmy(bot)}>
          Add to Army
        </button>  */}
      </div>
    </div>

)
}

export default BotSpecs;
