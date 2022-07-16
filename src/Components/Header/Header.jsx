import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className="tittle mb-0">
        <img 
          className="logo"
          src={require("../static/mylogo.png")}
          width="6%"
          height="6%"
          alt="INS Valsura"
        />
        <span>AI Based Facial Recognition System</span>
        </div>
  )
}
