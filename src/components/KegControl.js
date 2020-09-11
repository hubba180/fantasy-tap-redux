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
          Alcohol Content: "98%",
          Price: 15
        },
        {
          name: "Hero's Bane",
          Brand: "Fantasy Tap",
          Alcohol Content: "5%",
          Price: 6
        },
        {
          name: "Troll Power",
          Brand: "Doom Brew",
          Alcohol Content: "9%",
          Price: 7
        },
        {
          name: "Uruk-Hai",
          Brand: "Mordor MorBeer",
          Alcohol Content: "7%",
          Price: 8
        },
        {
          name: "The Witches Whip",
          Brand: "Fantasy Tap",
          Alcohol Content: "5%",
          Price: 6
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