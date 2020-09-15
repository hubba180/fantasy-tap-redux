import React from "react";
import PropTypes from "prop-types";

function Keg(prop) {
  return (
  <React.Fragment>
    <hr />
    <div onClick = {() => prop.whenClicked(prop.id)}> 
      <h3>Beer: {prop.name}</h3>
      <h3>Quantity: {prop.quantity} pints</h3>
    </div>
    <hr />
  </React.Fragment>
  )
}

Keg.propTypes = {
  whenClicked: PropTypes.func,
  name: PropTypes.string
};

export default Keg