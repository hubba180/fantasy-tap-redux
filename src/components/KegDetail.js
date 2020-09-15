import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>{keg.name}'s Details</h2>
      <h3>Brand: {keg.brand}</h3>
      <h3>Alcohol Content: {keg.alcContent}</h3>
      <h3>Quantity: {keg.quantity} pints</h3>
      <h3>Price: {keg.price}</h3>
      <button onClick={() => props.onServeDrink(keg.id)}>Serve a drink</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  onServeDrink: PropTypes.func
};

export default KegDetail;