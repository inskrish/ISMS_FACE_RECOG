import React from 'react'
import {  useState} from "react";
import axios from "axios";
import { Footer } from './Footer'
import { Header } from './Header/Header'
import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import './AddCategory.css'
import SideNavBar from "./navbar/Navbar";
export const AddCategory = () => {
    const baseURL2 = "http://11.0.0.221:8000/saveCat/";
    const [cat,setCat]=useState();
    const form = new FormData();
    function handle(e){
        
    console.log(e.target.value)
    
    setCat(e.target.value);
    }
    async function submit(e) {
        //e.prevent.default();
        e.preventDefault();
        console.log(cat);
        form.append("category",cat);
       
        
        // let new_let=[];
        // new_let.push(cat)
        
        const response = await axios.post(baseURL2, form);

        if (response.data === "success") {
            alert("Category Add \t"+response.data)
        }
        else{
            alert("Category Add \t"+response.data)
        }
        
      }
  return (
    <>
    <Header/>
    <SideNavBar/>
    <div className="bodyContainer row">
        <div className='col-4'>&nbsp;</div>
        <div className='col-6' style={{display:'block', alignItems: 'center'}}>
        <h2 style={{color: 'white', paddingTop: '1rem'}}>Add New Category</h2>
        <br/>
        <Form onSubmit={(e) => submit(e)} >
        <Form.Group>
            <div className='row'>
            <div className='col'>
                <Form.Control type="text" placeholder="Enter Category" value={cat} onChange={(e) => handle(e)}/>
            </div>
            <div className='col'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
            </div>
        </Form.Group>
        </Form> 
        </div>
        <div className='col'>&nbsp;</div>
        </div>
    <div className="FooterClass"><Footer /></div>
    </>   
  )
}

