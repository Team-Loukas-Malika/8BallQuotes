import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import defaultImage from "../assets/images/coffee.avif"

function SearchResults() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return ( 
    <div>
      <div>
      <h2>Search Results</h2>
      <div className="library-container">
        <Row>
          {searchResults.map((result) => (
            <Col key={result._id}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {result.content
                      ? result.content
                      : "It's not a bug. It's an undocumented feature"}
                  </Card.Title>
                  <Card.Text>Author: {result.author || "Anonymous"}</Card.Text>
                  <Card.Text>Tags: {result.tags || ""}</Card.Text>
                  <Card.Text>
                    Created At: {new Date(result.createdAt).toLocaleString()}
                  </Card.Text>
                </Card.Body>
                <div>
                  <Card.Img
                    src={result.urlImage || defaultImage}
                    alt="image"
                  />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    </div>
   );
}

export default SearchResults;