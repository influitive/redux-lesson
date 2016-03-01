import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from './card';

export default class Hand extends Component {
  getStyle() {
    return {
      hand: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "10px"
      }
    }
  }

  render() {
    return <div style={this.getStyle().hand}>
        <Card image={''} />
        <Card image={''} />
        <Card image={''} />
        <Card image={''} />
        <Card image={''} />
      </div>
  }
}

export default connect(
  state => ({
    cards: state.cards
  })
)(Hand);