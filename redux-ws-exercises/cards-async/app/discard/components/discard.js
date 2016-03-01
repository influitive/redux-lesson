import React, {Component} from 'react';
import { connect } from 'react-redux';

export default class Discard extends Component {
  getStyle() {
    return {
      discard: {
        width: '18%',
        border: 'black 2px solid',
        height: '185px',
        borderRadius: '10px',
        float: 'left',
        boxShadow: '4px 4px grey, 7px 7px black'
      }
    }
  }

  render() {
    return <div style={this.getStyle().discard}></div>;
  }
}

export default connect(
  state => ({
    cards: state.cards
  })
)(Discard);