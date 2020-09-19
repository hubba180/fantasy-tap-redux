import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormSwitch: false,
      SelectedKeg: null,
    }
  }
  handleSelectedKeg = (id) => {
    console.log(id)
    const selectedKeg = this.props.CurrentKegs[id];
    this.setState({SelectedKeg: selectedKeg});
  }

  handleAddNewKeg = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, alcContent, price, quantity } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id: id,
      names: name,
      brand: brand,
      alcContent: alcContent,
      price: price,
      quantity: quantity
    }
    dispatch(action);
    this.setState({FormSwitch: false});
  }

  handleServeDrink = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.CurrentKegs[id];
    if (selectedKeg.quantity > 0){
      const newQuantity = selectedKeg.quantity - 1;
      const action = {
        type: 'ADD_KEG',
        id: id,
        names: selectedKeg.name,
        brand: selectedKeg.brand,
        alcContent: selectedKeg.alcContent,
        price: selectedKeg.price,
        quantity: newQuantity
      }
      dispatch(action);
      this.setState({
        FormSwitch: false,
        SelectedKeg: null});
    } 
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({SelectedKeg: null});
  }

  handleClick = () => {
    if (this.state.SelectedKeg != null) {
      this.setState({
        FormSwitch: false,
        SelectedKeg: null
        });
    } else {
      this.setState(prevState => ({
        FormSwitch: !prevState.FormSwitch
      }));
    }
  }

  render() {
    let CurrentVisibleState = null;
    let buttonText = null;
    if (this.state.SelectedKeg != null) {
      CurrentVisibleState = <KegDetail keg = {this.state.SelectedKeg} onServeDrink = {this.handleServeDrink} onDeleteKeg = {this.handleDeletingKeg} />
      buttonText = "Return To Current Kegs";
    }
    else if (this.state.FormSwitch === false) {
      CurrentVisibleState = <KegList currentKegs = {this.props.CurrentKegs} onKegSelection= {this.handleSelectedKeg} />;
      buttonText = "Add New Keg";
    } else {
      CurrentVisibleState = <NewKegForm addNewKeg= {this.handleAddNewKeg} />
      buttonText = "Return Current Kegs";
    }
    return (
      <React.Fragment>
        {CurrentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  CurrentKegs: PropTypes.object
};

const mapStateToProps = (state) => {
  return {CurrentKegs: state}
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl