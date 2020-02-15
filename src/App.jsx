import React from 'react';
import logo from './assets/footer_logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar">
          <Container>
            <Row>
              <img src={logo} />
            </Row>
          </Container>
        </nav>
      </header>
    </div>
  );
}

export default App;
