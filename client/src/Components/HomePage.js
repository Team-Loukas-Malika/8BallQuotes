import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css"
import QuoteOfDay from "./QuoteOfDay";


function HomePage() {
    
    return (
        <div className="home-page">
          <QuoteOfDay/>
            
        </div>
      );
  }
  
  

export default HomePage;
