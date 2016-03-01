import React from 'react';

const style = {
  padding: '20px',
  margin: '0 auto 20px',
  padding: '20px',
};

const NewItemInput = ({ text }) => (
  <div className="panel panel-default" style={style}>
    <input style={{width: '100%'}} value={text} />
  </div>
);

export default NewItemInput;
