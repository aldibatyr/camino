import React from 'react';
import logo from '../../assets/footer_logo.svg';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="nav-bar">
        <Row className='nav-main'>
          <div className="logo-wrapper">
            <img src={logo} />
          </div>
          <div className="language-selector">
            {/* language is defined by global state */}
            <button>
              language
            </button>
          </div>
        </Row>
        <div className='help-dropdown'>
          <div className="toggle-button">
            {/* this button will conditinally render the buttons for call and email */}
            <button>
              Help
            </button>
          </div>
          <div className="hidden-on-state-false">
            <div className="drop-down-body">
              <p>Need Help? Call or chat with us directly</p>
              <div className="actions">
                {/* need to create a universal button component with outlined and solid background */}
                <button>
                  CALL
              </button>
                <button>
                  Email
              </button>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}
