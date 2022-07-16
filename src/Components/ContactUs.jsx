import React from 'react'
import {  useState} from "react";
import axios from "axios";
import { Footer } from './Footer'
import { Header } from './Header/Header'
import { Form, Col, Button, Row, InputGroup, Container } from "react-bootstrap";
import './AddCategory.css'
import SideNavBar from "./navbar/Navbar";
export const ContactUs = () => {
    
    
  return (
    <>
    <Header/>
    <SideNavBar/>
    <div className="bodyContainer text-white">
        <div style={{marginLeft:'1%', paddingTop: '2rem', fontSize: '1.5rem'}}>In Case of any Issue Query Please Contact us:</div>
        <div class="d-flex flex-column p-4 ml-1">
            <div class="col-4 p-2">
                <p>SLt Arpit Sharma</p>
                <p>MOB:7985479740</p>
            </div>
            <div class="col-4 p-2">
                <p>SLt Bhavya Raman</p>
                <p>MOB:8968536224</p>
            </div>
            <div class="col-4 p-2">
                <p>SLt Abhishek Kumar</p>
                <p>MOB:8698571046</p>

            </div>
        </div>      
    </div>
    <div className="FooterClass"><Footer /></div>
    </>   
  )
}

