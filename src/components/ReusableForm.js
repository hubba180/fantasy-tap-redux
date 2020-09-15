import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

function ReusuableForm(props) {
  return(
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control
            type='text'
            name='name' 
            placeholder='Beer Name' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='brand' 
            placeholder='Beer Brand' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='alcContent' 
            placeholder='Alcohol Content' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='price' 
            placeholder='Price' />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            name='quantity' 
            placeholder='Quantity' />
        </Form.Group>
        <div style={{padding: 10}}>
          <Button variant="info" type='submit'>{props.buttonText}</Button>
        </div>
      </Form>
    </React.Fragment>
  )
}

ReusuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default ReusuableForm