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
          <div>
            <header className="header">8ballQuotes</header>
            <button className= "createq" onClick = {()=>{ createq();}}>CreateQ</button>
            <button className= "qlibrary" onClick = {()=>{ qlibrary();}}>Qlibrary</button>
          </div>

          <div>
            <QuoteOfDay/>
          </div>
          
            
        </div>
      );
  }
  
  

export default HomePage;
