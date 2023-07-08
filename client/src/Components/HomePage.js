import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"
import QuoteOfDay from "./QuoteOfDay";


function HomePage() {
    var navigate = useNavigate();

    function createq(){
        navigate ("/createq");
      }

    function qlibrary(){
        navigate ("/qlibrary");
      }



      return (
        <div className="home-page">
          <div className="centered-image">
            <img src={qball} alt="qball" /> 
          </div>
          <QuoteOfDay/>
        </div>
      );
      
  }
  
  

export default HomePage;
