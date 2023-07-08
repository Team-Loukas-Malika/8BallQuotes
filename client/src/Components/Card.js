import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function QuoteCard({ quote, coffeeImage }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coffeeImage} alt="coffee cup" className="quote-image" />
      <Card.Body>
        <Card.Title>Quote: {quote.content}</Card.Title>
        <Card.Text>
          Author: {quote.author}<br />
          Tags: {quote.tags}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default QuoteCard;
