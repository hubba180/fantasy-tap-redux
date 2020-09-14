import React from "react";

function Keg(prop) {
  return (
  <React.Fragment>
    <hr />
    <div onClick = {() => prop.whenClicked(prop.id)}> 
      <h3>Beer: {prop.name}</h3>
      <h3>Price: {prop.price}</h3>
    </div>
    <hr />
  </React.Fragment>
  )
}

export default Keg