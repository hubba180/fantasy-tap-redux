import React from "react";
import Keg from "./Keg";

function KegList(prop) {
  return (
  <React.Fragment>
    {prop.currentKegs.map(product => <Keg name={product.name} price={product.price} brand={product.brand} alcContent={product.alcContent} />)}
    <button onClick= {prop.viewForm}>Add new keg</button>
  </React.Fragment>
  )
}

export default KegList