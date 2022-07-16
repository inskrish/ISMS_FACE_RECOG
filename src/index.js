import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AddCategory } from "./Components/AddCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { ContactUs } from "./Components/ContactUs";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route index element={<App />} />
        <Route path="addcategory" element={<AddCategory/>} />
        <Route path="contactus" element={<ContactUs/>} />
        
      
    </Routes>
  </BrowserRouter>
  </StrictMode>,
  rootElement
);
