import React, {Component} from 'react';

export default class Card extends Component {
  getStyle() {
    return {
      inner: {
        width: '18%',
        border: 'black 2px solid',
        height: '185px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      },
      image: {
        width: '100%',
        height: '100%'
      }
    }
  }

  render() {
    return <div style={this.getStyle().inner}>
      <img src={this.props.image} style={this.getStyle().image} />
    </div>;
  }
}