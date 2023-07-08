import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"

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
          <header className="header">8ballQuotes</header>
          <button className= "createq" onClick = {()=>{ createq();}}>CreateQ</button>
          <button className= "qlibrary" onClick = {()=>{ qlibrary();}}>Qlibrary</button>
            
        </div>
      );
  }
  
  

export default HomePage;
