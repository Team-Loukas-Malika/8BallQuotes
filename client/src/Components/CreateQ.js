import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import defaultImage from "../assets/images/coffee.avif"

function CreateQuote() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [urlImage, setUrlImage] = useState("");

  async function createQ(event) {
    event.preventDefault();
    let newQuote = {
      content: content,
      author: author,
      tags    : tags || [],
      urlImage: urlImage || defaultImage,
      createdAt: Date()
    };
    try {
      let response = await axios.post("http://localhost:3636/quote/", newQuote)
      if (response.status === 200) {
        alert("Quote created successfully!")
        console.log(newQuote)
      } else {
        alert("Error")
      }
    } catch (error) {
      console.log('create quote error', error);
    }
  }

  const tagOptions = [
    { value: "creativity", label: "Creativity" },
    { value: "encouragement", label: "Encouragement" },
    { value: "famousquotes", label: "Famous Quotes" },
    { value: "film", label: "Film" },
    { value: "friendship", label: "Friendship" },
    { value: "gratitude", label: "Gratitude" },
    { value: "happiness", label: "Happiness" },
    { value: "history", label: "History" },
    { value: "humor", label: "Humor" },
    { value: "inspirational", label: "Inspirational" },
    { value: "knowledge", label: "Knowledge" },
    { value: "lifelessons", label: "Life Lessons" },
    { value: "love", label: "Love" },
    { value: "motivational", label: "Motivational" },
    { value: "philosophy", label: "Philosophy" },
    { value: "relationships", label: "Relationships" },
    { value: "religion", label: "Religion" },
    { value: "sports", label: "Sports" },
    { value: "success", label: "Success" },
    { value: "technology", label: "Technology" },
    { value: "wisdom", label: "Wisdom" },
  ]


  return ( 
    <div className="form-container">
    <Form onSubmit={createQ}  >
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
        <Form.Label column sm="2">Author:</Form.Label>
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
        <Form.Label column sm="2">Tags:</Form.Label>
        <Col sm="10">
          <Select
          isMulti
          options={tagOptions}
          type="text"
          value={tags}
          onChange={(selectedOptions) => setTags(selectedOptions.map(option => option.value))} 
          placeholder="Select a tag"
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

      <Button className="createQButton"  type='submit'>Create Quote</Button>

    </Form>
    </div>
   );
}

export default CreateQuote;
