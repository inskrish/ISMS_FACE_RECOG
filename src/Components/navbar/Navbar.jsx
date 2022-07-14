
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="http://localhost:3001" target={'_blank'}>
        Dashboard
      </a>
      <a className="menu-item" href="http://11.0.0.221:8000/newCat/" target={'_blank'}>
        Add Category
      </a>

      
    </Menu>
  );
};