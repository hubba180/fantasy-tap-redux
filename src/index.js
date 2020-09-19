import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/KegReducer';
import { Provider } from 'react-redux';

// const CurrentKegs =  {
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
      // }

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
