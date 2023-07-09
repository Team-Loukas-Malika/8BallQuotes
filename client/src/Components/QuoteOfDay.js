import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
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

  async function saveQuote() {
    let quotes = {
      content : quote.content,
      author  : quote.author,
      tags    : quote.tags || [],
      image   : coffeeImage,
    }
    try {
      let response = await axios.post("http://localhost:3636/quote/", quotes)
      if (response.status === 200) {
        alert('Your quote has been saved successfully!');
      } else {
        throw new Error(`Failed with status code ${response.status}`);
      }
    } catch (error) {
      console.log("Error saving the quote", error);
    }
  }


  return ( 
    <div className="centered-container">
      <h1>Tap to generate a quote to cheer you up!</h1>
      <img onClick={getQuoteOfDay} src={qball} alt="qball" className="cursor-pointer centered-image " /> 

      <Card style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title>Quote: {quote.content}</Card.Title>
          <Card.Text>Author: {quote.author}</Card.Text>
          <Card.Text>Tags: {quote.tags}</Card.Text>
        </Card.Body>
        
        <Card.Img variant="top" src={coffeeImage} alt="coffee cup" className="quote-imag" />        
      </Card>

      <br />

      <Button onClick={saveQuote} variant="primary">Save Quote</Button>
      <br />
      <FontAwesomeIcon icon={faDownload} bounce size="2xl" />
  

    </div>
  );
  
}

export default QuoteOfDay;