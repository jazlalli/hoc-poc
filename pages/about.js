import React from 'react';
import css from 'next/css';

const style = css({
  color: 'red',
  ':hover': {
    color: 'blue'
  },
  '@media (max-width: 500px)': {
    color: 'rebeccapurple'
  }
});

export default () => (
  <div className={style}>
    <h1>About Us</h1>
  </div>
);
