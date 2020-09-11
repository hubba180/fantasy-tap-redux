import React from "react";
import ReusableForm from "./ReusableForm";

function NewKegForm(props){

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: event.target.names.value});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegFormSubmission}
      buttonText="Help!" />
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;