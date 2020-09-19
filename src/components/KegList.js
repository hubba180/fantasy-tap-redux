import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(prop) {
  console.log(prop.currentKegs);
  return (
  <React.Fragment>
    {Object.values(prop.currentKegs).map(product => 
    <Keg 
    whenClicked= { prop.onKegSelection }
    name={product.name} 
    quantity={product.quantity}
    id={product.id}
    key={product.id} />)}
    {/* <button onClick= {prop.viewForm}>Add new keg</button> */}
  </React.Fragment>
  )
}

KegList.propTypes = {
  onKegSelection: PropTypes.func,
  currentKegs: PropTypes.object
};

export default KegList