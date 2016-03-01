import React from 'react';

const FeedItem = ({ text, liked }) => (
  <div className="panel panel-default panel-body">
    <div className="text">{text}</div>
    <div className="icons">
      <span className="fa fa-heart fa-2x icon" style={{color: liked ? 'red' : 'black'}}></span>
      <span className="fa fa-trash fa-2x icon" ></span>
    </div>
  </div>
);

export default FeedItem;
