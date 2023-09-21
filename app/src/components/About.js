import React from 'react';
import { Dropdown } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container">
      <h2>About</h2>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default About;
