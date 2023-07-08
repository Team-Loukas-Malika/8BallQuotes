
import { useState, useEffect } from "react";
import axios from "axios";
import footerIcon from "../assets/images/footericon.png";
import coffeeImage from "../assets/images/coffee.avif"
const APIurl = "https://api.quotable.io/random"

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
    <div>
      <h1>Here is a quote to cheer you up!</h1>

      <div>
        <p>Quote: {quote.content}</p>
        <p>Author: {quote.author}</p>
        <p>Date Added: {quote.dateAdded}</p>
        <p>Date Modified: {quote.dateModified}</p>
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