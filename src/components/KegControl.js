import React from "react";
import KegList from "./KegList";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <React.Fragment>
        <KegList currentKegs = {this.state.CurrentKegs}/>
      </React.Fragment>
    );
  }
}

export default KegControl