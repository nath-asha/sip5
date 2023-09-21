import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container">
      <h2>Contact</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Section 1
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              This is the content of Section 1.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {/* Add more accordion sections as needed */}
      </Accordion>
    </div>
  );
};

export default Contact;
