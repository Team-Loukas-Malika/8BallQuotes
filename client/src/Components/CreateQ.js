import { useState } from "react";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function CreateQuote() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [urlImage, setUrlImage] = useState("");

  async function createQ(event) {
    event.preventDefault();
    let newQuote = {
      content: content,
      author: author,
      urlImage: urlImage || "",
      createdAt: Date()
    };
    try {
      let response = await axios.post("http://localhost:3636/quote/", newQuote)
      if (response.status === 200) {
        alert("Quote created successfully!")
      } else {
        alert("Error")
      }
    } catch (error) {
      console.log('create quote error', error);
    }
  }


  return ( 
    <Form onSubmit={createQ} className="form" >
      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label column sm="2">Content:</Form.Label>
        <Col sm="10">
          <Form.Control 
          as="textarea" 
          rows={3}
          value={content}
          onChange={(event) => setContent(event.target.value)} 
          />
        </Col>       
      </Form.Group>
      
      <br />

      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label htmlFor="author" column sm="2">Author:</Form.Label>
        <Col sm="10">
          <Form.Control
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)} 
          />
        </Col>
      </Form.Group>
      

      <br />

      <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label column sm="2">imageUrl:</Form.Label>
        <Col sm="10">
          <Form.Control
          type="text"
          value={urlImage}
          onChange={(event) => setUrlImage(event.target.value)} 
          />
        </Col>
      </Form.Group>

      <br />

      <Button  type='submit'>Create Quote</Button>

    </Form>
   );
}

export default CreateQuote;
