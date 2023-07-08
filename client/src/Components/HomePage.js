import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"
import QuoteOfDay from "./QuoteOfDay";
import qball from "../assets/images/Qball.png"

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
          <img src={qball} alt="qball" /> 
          <QuoteOfDay/>
            
        </div>
      );
  }
  
  

export default HomePage;
