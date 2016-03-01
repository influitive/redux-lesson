import React, {Component} from 'react'
import {render} from 'react-dom';
import Hand from './hand'
import Deck from './deck'
import Discard from './discard'
import configureStore from './store/store';
import {Provider} from 'react-redux';

const store = configureStore();

const style= {
  padding: '20px',
  width: '70%',
  margin: '0px auto'
};

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <div style={style}>
        <Hand />
        <Discard />
        <Deck />
      </div>
    </Provider>;
  }
}