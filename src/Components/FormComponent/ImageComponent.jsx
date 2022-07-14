import React from 'react'
import {
   
    Container,
    Image,
  } from "react-bootstrap";
const ImageComponent = (props) => {
  return (
    <div className="col-sm">
    <Container style={{
      display: "block",
      justifyContent: "block-inline",
      alignItems: "center",
      paddingLeft: "12%"
    }}>
    
      <Image
        src={`data:image/png;base64,${props.data.image}`}
        style={{ padding:"20px", width: "100%", height: "100%" ,minHeight:"200px",minWidth:"200px"}}
      ></Image>
    </Container>
  </div>
  )
}

export default ImageComponent;