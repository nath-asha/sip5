import React from 'react';
import { Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container">
      <h2>Home</h2>
      <div className="row">
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is card 1 content.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is card 2 content.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is card 3 content.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card>
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>This is card 4 content.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
