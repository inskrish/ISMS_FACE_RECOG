import React from 'react'

export const Footer = () => {
  return (
    <>
      <div className="row" style={{height: "5rem", backgroundColor: '#ced4da', display:'float'}}>
        <br/>
        <div className='col-1' style={{textAlign:'right'}}>        
          <img src="src\Components\static\mylogo.png" style={{position:'relative' ,height:"55%", marginTop: "1rem"}} alt="Home" title="Home"/> 
        </div>
        <div className='col mt-4'>
          <p style={{textAlign:'center', fontSize: "12"}}>Content Owned, Updated and Maintained by Indian Naval Ship Valsura. Copyright © Since 2022. All Rights Reserved.</p>
        </div>
        <div className='col-1'>
          <img src="src\Components\static\AmritmahotsavLogo_eng.svg" style={{position:'relative', height:"55%", marginTop: "1rem"}} alt="Home" title="Home"/>
        </div>
      </div>
    </>
    
  )
}
