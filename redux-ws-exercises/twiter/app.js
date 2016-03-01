import React, { Component } from 'react';
import Redux from 'redux';

import FeedList from './feed';
import NewItemInput from './feed/components/new.js';

const items = [
  {
    text: 'hello there bob',
    liked: true,
    id: 1
  },
  {
    text: 'sheena is a punk rocker',
    liked: false,
    id: 2
  },
  {
    text: 'the moon is full, the air is still',
    liked: false,
    id: 3
  },
  {
    text: 'judys just a punk',
    liked: true,
    id: 4
  }
];

export default class App extends Component {
  render() {
    return <div style={{maxWidth: '600px', margin: '0 auto'}}>
      <NewItemInput text="hello there bob"/>
      <FeedList items={items} />
    </div>
  }
}
