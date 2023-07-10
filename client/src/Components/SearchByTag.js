import { useState } from "react";
import axios from "axios";
import defaultImage from "../assets/images/coffee.avif"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SearchByTag() {
  const [tag, setTag] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    try {
      let response = await axios.get(`http://localhost:3636/quote/tags/${tag}`)
      console.log("response", response);
      setSearchResults(response.data);
    } catch (error) {
      console.log("Error searching quotes", error);
    }
  }



  return ( 
    <div>
      This is the search by tag page.
      <form onSubmit={handleSearch}>
        
        <label htmlFor="
        tag-name"></label>
        <input type="text"
         placeholder="Enter tag"
        id="tag-name"
        value={tag}
        onChange={(e)=>setTag(e.target.value)}
        />
        <button type="submit" >Search By Tag</button>
      </form>

      <div className="library-container">
        
        <Row>
        {searchResults.map(result =>{
          return (
            <Col key={result._id}>
              <Card>
                <Card.Body>
                  <Card.Title>{result.content ? result.content : "It's not a bug. It's an undocumented feature"}</Card.Title>
                  <Card.Text>Author: {result.author ? result.author : "Anonymous"}</Card.Text>
                  <Card.Text>Tags: {result.tags ? result.tags : ""}</Card.Text>
                  <Card.Text>Created At: {new Date(result.createdAt).toLocaleString()}</Card.Text>
                </Card.Body>

                <div>
                  <Card.Img src={result.urlImage ? result.urlImage : defaultImage} alt="imag" />
                </div>
              </Card>
                         
            </Col>
          )
        })}

        </Row>
        
      </div>
    </div>
   );
}

export default SearchByTag;