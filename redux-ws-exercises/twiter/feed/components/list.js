import React from 'react';

import FeedItem from './item';

const map = ({ text, liked, id }) => <FeedItem key={id} text={text} liked={liked} />;

const FeedList = ({ items }) => {
  if (!items.length) return null;
  return <div>
    {items.map(map)}
  </div>
};

export default FeedList;



