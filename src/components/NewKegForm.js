import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.addNewKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      alcContent: event.target.alcContent.value, 
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Add Keg" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;