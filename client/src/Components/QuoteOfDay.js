import "./style.css"
import { useState, useEffect } from "react";
import axios from "axios";
import footerIcon from "../assets/images/footericon.png";
import coffeeImage from "../assets/images/coffee.avif";
import qball from "../assets/images/Qball.png"
const APIurl = "https://api.quotable.io/random";


function QuoteOfDay() {
 
  const [quote, setQuote] = useState([]);

  async function getQuoteOfDay() {
    const response = await axios.get(APIurl)
    console.log(response.data);
    setQuote(response.data);
  }

  useEffect(() =>{
    getQuoteOfDay();
  },[])
  
  



  return ( 
    <div className="centered-container">
      <h1>Tap to generate a quote to cheer you up!</h1>
      <img onClick={getQuoteOfDay} src={qball} alt="qball" className="centered-image" /> 
      <div>
        <p>Quote: {quote.content}</p>
        <p>Author: {quote.author}</p>
        <p>Tags: {quote.tags}</p>
        <img src={coffeeImage} alt="coffee cup" className="quote-image" />        
      </div>
  
      <footer className="footer">
        <span className="footer-left">
          <img src={footerIcon} className="footer-icon" alt="8BallQuotes.our-site-here" />
          <a href="http://localhost:3636/quote">
            8BallQuotes®
          </a>
        </span>
      </footer>
    </div>
  );
  
}

export default QuoteOfDay;