
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Menu >
    <br/>
    <br/>
    
      <a className="menu-item"  href="/">
        Home
      </a>
      <hr/>
      <br/>
    
      <a className="menu-item" href="http://localhost:3001" target={'_blank'}>
        Dashboard
      </a>
      <hr/>
      <br/>
    
      <a className="menu-item" href="/addcategory" >
        Add Category
      </a>
      <hr/>
      <br/>
      <a className="menu-item" href="https://www.indiannavy.nic.in/insvalsura/" target={'_blank'} rel={'noreferrer'}>
        About Us
      </a>
      <hr/>
      <br/>
      <a className="menu-item" href="contactus"  rel={'noreferrer'}>
        Contact Us
      </a>
      <hr/>
      <br/>

      
      <p style={{position: 'fixed', bottom: '0' , width:'14%'}}> Developed and Maintained by ITS @INSValsura</p>

      
    </Menu>
  );
};