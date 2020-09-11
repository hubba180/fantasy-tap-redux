import React from "react";

function Keg(prop) {
  return (
  <React.Fragment>
    <hr />
    <h3>Beer: {prop.name}</h3>
    <h3>Brand: {prop.brand}</h3>
    <h3>Alcohol Content: {prop.alcContent}</h3>
    <h3>Price: {prop.price}</h3>
    <hr />
  </React.Fragment>
  )
}

export default Keg