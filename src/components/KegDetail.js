import React from "react";

function KegDetail(props){
  const { keg } = props;

  return (
    <React.Fragment>
      <h2>{keg.name}'s Details</h2>
      <h3>Brand: {keg.brand}</h3>
      <h3>Alcohol Content: {keg.alcContent}</h3>
      <h3>Quantity: {keg.quantity}</h3>
      <h3>Price: {keg.price}</h3>
      <hr/>
    </React.Fragment>
  );
}

export default KegDetail;