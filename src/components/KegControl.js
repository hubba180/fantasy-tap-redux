import React from "react";
import KegList from "./KegList";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentKegs = [
        {
          name: "Dragon Saliva",
          Brand: "Fantasy Tap",
          alcContent: "98%",
          price: 15
        },
        {
          name: "Hero's Bane",
          Brand: "Fantasy Tap",
          alcContent: "5%",
          price: 6
        },
        {
          name: "Troll Power",
          Brand: "Doom Brew",
          alcContent: "9%",
          price: 7
        },
        {
          name: "Uruk-Hai",
          Brand: "Mordor MorBeer",
          alcContent: "7%",
          price: 8
        },
        {
          name: "The Witches Whip",
          Brand: "Fantasy Tap",
          alcContent: "5%",
          price: 6
        }
      ];
    }
  }

  render() {
    return (
      <React.Fragment>
        <KegList />
      </React.Fragment>
    );
  }
}