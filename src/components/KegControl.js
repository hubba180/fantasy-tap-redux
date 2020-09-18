import React from "react";
import KegList from "./KegList";
import { v4 } from 'uuid';
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";
import { connect } from 'react-redux';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormSwitch: false,
      SelectedKeg: null,
      // CurrentKegs: [
      //   {
      //     name: "Dragon Saliva",
      //     brand: "Fantasy Tap",
      //     alcContent: "98%",
      //     price: 15,
      //     quantity: 1,
      //     id: v4()
      //   },
      //   {
      //     name: "Hero's Bane",
      //     brand: "Fantasy Tap",
      //     alcContent: "5%",
      //     price: 6,
      //     quantity: 124,
      //     id: v4()
      //   },
      //   {
      //     name: "Troll Power",
      //     brand: "Doom Brew",
      //     alcContent: "9%",
      //     price: 7,
      //     quantity: 124,
      //     id: v4()
      //   },
      //   {
      //     name: "Uruk-Hai",
      //     brand: "Mordor MorBeer",
      //     alcContent: "7%",
      //     price: 8,
      //     quantity: 124,
      //     id: v4()
      //   },
      //   {
      //     name: "The Witches Whip",
      //     brand: "Fantasy Tap",
      //     alcContent: "5%",
      //     price: 6,
      //     quantity: 124,
      //     id: v4()
      //   }
      // ]
    }
  }
  handleSelectedKeg = (id) => {
    console.log(id)
    const selectedKeg = this.state.CurrentKegs.filter(keg => keg.id === id)[0];
    this.setState({SelectedKeg: selectedKeg});
  }

  handleAddNewKeg = (newKeg) => {
    const { dispatch } = this.props;
    const { id, name, brand, alcContent, price, quantity } = newTicket;
    const action = {
      type: 'ADD_TICKET',
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
    const selectedKeg = this.state.CurrentKegs.filter(keg => keg.id === id)[0];
    if (selectedKeg.quantity > 0){
      const newQuantity = selectedKeg.quantity - 1;
      const newKeg = { name: selectedKeg.name, brand: selectedKeg.brand, alcContent: selectedKeg.alcContent, price: selectedKeg.price, quantity: newQuantity, id: selectedKeg.id }
      const newKegList = this.state.CurrentKegs.filter(keg => keg.id !== id).concat(newKeg);
      this.setState({
        CurrentKegs: newKegList,
        FormSwitch: false,
        SelectedKeg: null});
    } 
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_Keg',
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
      CurrentVisibleState = <KegList currentKegs = {this.state.CurrentKegs} onKegSelection= {this.handleSelectedKeg} />;
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

KegControl = connect()(KegControl);
export default KegControl