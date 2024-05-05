import React, { useState, useEffect } from "react";
import SortBar from "./SortBar";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

function BotCollection({ setSelectedBots, bots, setBots }) {
 
  const [sortChoice, setSortChoice] = useState("");
  const [filterChoose, setFilterChoose] = useState([])


  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://json-server-bots-l98p.onrender.com/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const addToArmy = (bot) => {
    setSelectedBots((prevSelectedBots) => [...prevSelectedBots, bot]);
    setBots((bots) => bots.filter((item) =>item.id != bot.id) );
  };

  const removeFromCollection = (id) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
    fetch (`https://json-server-bots-l98p.onrender.com/bots/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

  };

  function handleSortChoice(e){
    setSortChoice(e.target.value)
  }

  function handleFilterChoose(e){
    if (e.target.checked){
      setFilterChoose([...filterChoose, e.target.value])
    }
    else{
      setFilterChoose(filterChoose.filter(filter => filter!== e.target.value))
    }
  }

  

  function sortChange(sortChoice) {
    if (sortChoice === 'armor') {
      return function(a, b){
        return b.armor - a.armor
      }
    }
    else if (sortChoice === 'health') {
      return function(a, b){
        return b.health - a.health
      }
    }
    else if (sortChoice === 'damage') {
      return function(a, b){
        return b.damage - a.damage
      }
    }
    else{
      return () => 0
    }
  }

  const filteredBots = bots.filter (bot => {
    if (filterChoose.length > 0){
    return  filterChoose.includes(bot.bot_class)}
      
    else return true
  })

  return (
    <div>
      <Filter handleFilterChoose= {handleFilterChoose}/>

      <SortBar handleSortChoice= {handleSortChoice} sortChoice = {sortChoice} />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3">
        {filteredBots.sort(sortChange(sortChoice)).map((bot) => (
        <div className="col-lg-2 mb-3" >
          <div className="card h-100" key={bot.id} >
            <img src={bot.avatar_url}  className="card-img-center" alt="" onClick={() => navigate(`/Bot-Battle/${bot.id}`)} />

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
                onClick={() => removeFromCollection(bot.id)}
              >
                x
              </button>
              <button className="button2" onClick={() => addToArmy(bot)}>
                Add to Army
              </button>
            
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default BotCollection;
