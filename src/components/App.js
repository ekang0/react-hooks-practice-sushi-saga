import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [wallet, setWallet] = useState(50);

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setSushiList(data))
  }, []);

  function onHandleEatSushi(eatenSushi){
    //console.log("onHandleEatSushi WORKS", eatenSushi);
    if(wallet >= eatenSushi.price){
      const updatedSushis = sushiList.map((sushi) => {
        if(sushi.id === eatenSushi.id) {
          return {...sushi, eaten: true}
        } else {
          return sushi
        }
      });
      setSushiList(updatedSushis);
      setWallet(wallet - eatenSushi.price);
    } else {
      alert("NOT ENOUGH MONEY")
    }
  };

  const platesEaten = sushiList.filter((sushi) => sushi.eaten === true);

  return (
    <div className="app">
      <SushiContainer sushis={sushiList} handleEatSushi={onHandleEatSushi}/>
      <Table wallet={wallet} plates={platesEaten}/>
    </div>
  );
}

export default App;
