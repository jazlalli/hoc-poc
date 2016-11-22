import React from 'react';
import Link from 'next/link';
import css from 'next/css';

const navStyle = css({
  margin: '10px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

const navItemStyle = css({
  font: 'menu',
  marginRight: '15px'
});

export default () => (
  <nav className={navStyle}>
    <Link href="/about">
      <span className={navItemStyle}>About</span>
    </Link>
    <Link href="/contact">
      <span className={navItemStyle}>Contact</span>
    </Link>
  </nav>
)