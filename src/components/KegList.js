import React from "react";
import Keg from "./Keg";

function KegList(prop) {
  return (
  <React.Fragment>
    {prop.currentKegs.map(product => <Keg 
    whenClicked= { prop.onKegSelection }
    name={product.name} 
    price={product.price} 
    brand={product.brand} 
    quantity={product.quantity}
    alcContent={product.alcContent}
    id={product.id}
    key={product.id} />)}
    {/* <button onClick= {prop.viewForm}>Add new keg</button> */}
  </React.Fragment>
  )
}

export default KegList