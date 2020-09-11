import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FormSwitch: false,
      CurrentKegs: [
        {
          name: "Dragon Saliva",
          brand: "Fantasy Tap",
          alcContent: "98%",
          price: 15
        },
        {
          name: "Hero's Bane",
          brand: "Fantasy Tap",
          alcContent: "5%",
          price: 6
        },
        {
          name: "Troll Power",
          brand: "Doom Brew",
          alcContent: "9%",
          price: 7
        },
        {
          name: "Uruk-Hai",
          brand: "Mordor MorBeer",
          alcContent: "7%",
          price: 8
        },
        {
          name: "The Witches Whip",
          brand: "Fantasy Tap",
          alcContent: "5%",
          price: 6
        }
      ]
    }
  }

  handleAddNewKeg = (newKeg) => {
    const newCurrentKegList = this.state.CurrentKegs.concat(newKeg);
    this.setState({
      CurrentKegs: newCurrentKegList,
      formVisibleOnPage: false
    });
  }

  viewForm = () => {
    this.setState({FormSwitch: true});
  }

  render() {
    let CurrentVisibleState = null;
    if (this.state.FormSwitch === false) {
      CurrentVisibleState = <KegList currentKegs = {this.state.CurrentKegs} viewForm = {this.viewForm}/>;
    } else {
      CurrentVisibleState = <NewKegForm addNewKeg= {this.handleAddNewKeg} />
    }
    return (
      <React.Fragment>
        {CurrentVisibleState}
      </React.Fragment>
    );
  }
}

export default KegControl