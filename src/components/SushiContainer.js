import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( { sushis, handleEatSushi}) {
//console.log(sushis);
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiPieces = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => ( <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/> ));

  function onHandleMoreButton() {
    //console.log("handleMoreButton is working");
    setSushiIndex(sushiIndex + 4);
  };

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiPieces}
      <MoreButton handleMoreButton={onHandleMoreButton}/>
    </div>
  );
}

export default SushiContainer;
