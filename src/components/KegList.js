import React from "react";
import Keg from "./Keg";

function KegList(prop) {
  return (
  <React.Fragment>
    {prop.currentKegs.map(product => <Keg name={product.name} price={product.price} brand={product.brand} alcContent={product.alcContent} />)}
  </React.Fragment>
  )
}

export default KegList