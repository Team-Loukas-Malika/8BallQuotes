import { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../assets/images/coffee.avif"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function QuoteLibrary() {
  const [allQuotes, setAllQuotes] = useState([]);

  async function getQuotes() {
    try {
      let response = await axios.get("http://localhost:3636/quote")
      console.log(response)
      setAllQuotes(response.data)
      console.log(allQuotes)
    } catch (error) {
      console.log('Error fetching quotes', error)
    }
  }

  useEffect(() =>{
    getQuotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return ( 
    <div className="library-container">
      <Row xs={1} md={2} className="g-4">
      {allQuotes.map(quote =>{
        return (
          <Col key={quote._id} >
            <Card>
              <Card.Body>
                <Card.Title>{quote.content ? quote.content : "It's not a bug. It's an undocumented feature"}</Card.Title>
                <Card.Text>Author: {quote.author ? quote.author : "Anonymous"}</Card.Text>
                <Card.Text>Tags: {quote.tags ? quote.tags : ""}</Card.Text>
                <Card.Text>Created At: {new Date(quote.createdAt).toLocaleString()} </Card.Text>
              </Card.Body>
              <div>
                <Card.Img variant="top" src={quote.urlImage ? quote.urlImage : defaultImage} alt="image" />
              </div>
            </Card>
          </Col>
        )
      })}     
    </Row>
    </div>
    
   );
}

export default QuoteLibrary;