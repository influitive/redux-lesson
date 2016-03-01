import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchDeck from '../actions';

export default class Deck extends Component {
  getStyle() {
    return {
      deck: {
        width: '18%',
        border: 'black 2px solid',
        height: '185px',
        borderRadius: '10px',
        float: 'right',
        boxShadow: '4px 4px grey, 7px 7px black'
      },
      image: {
        width: '100%',
        height: '100%'
      }
    }
  }

  componentDidMount() {
    this.props.dispatch(
      fetchDeck()
    );
  }

  render() {
    return <div style={this.getStyle().deck}>
      <img style={this.getStyle().image} src='http://ca.dev.conjuringarts.org/wp-content/uploads/2011/09/Angel-Back-Squeezers-Red.jpg' />
    </div>;
  }
}

export default connect(
  state => ({
    cards: state.cards
  })
)(Deck);