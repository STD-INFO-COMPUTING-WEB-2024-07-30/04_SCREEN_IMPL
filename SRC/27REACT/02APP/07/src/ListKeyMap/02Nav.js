import React from 'react';

function Nav() {
  const navItems = ['Home', 'About', 'Services', 'Contact'];
  const menuStyle = {
    listStyle : 'none',
    padding : '0px',
    display : 'flex',
    justifyContent : 'space-evenly',
    alignItems : 'center'
  }
  return (
    <ul style={menuStyle}>
      {navItems.map((item, index) => (
        <li key={index}>
          <a href={`/${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
