import React from 'react';
import logo from '../../assets/footer_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faPhone, faComments } from '@fortawesome/free-solid-svg-icons'

import './Navigation.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisible } from '../../actions';

export default function Navigation() {

  const visible = useSelector(state => state.visible);
  const dispatch = useDispatch();

    return (
      <nav className="nav-bar">
        <div className='nav-main'>
          <div className="logo-wrapper">
            <img src={logo} />
          </div>
          <div className="language-selector">
            {/* language is defined by global state */}
            <button>
              language
            </button>
          </div>
        </div>
        <div className='help-dropdown'>
          <div className="toggle-button">
            {/* this button will conditinally render the buttons for call and email */}
            <button onClick={() => dispatch({type: 'TOGGLE_VISIBLE'})}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span style={{ marginLeft: '3px' }}>Help</span>
            </button>
          </div>
          {visible ? (
            <div className="hidden-on-state-false">
              <div className="drop-down-body">
                <p>Need Help? Call or chat with us directly</p>
                <div className="actions">
                  {/* need to create a universal button component with outlined and solid background */}
                  <div className="button-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faPhone} />
                      <span style={{ marginLeft: '5px' }}>PHONE</span>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button>
                      <FontAwesomeIcon icon={faComments} />
                      <span style={{ marginLeft: '5px' }}>EMAIL</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <></>
            )}
        </div>
      </nav>
    )
}
