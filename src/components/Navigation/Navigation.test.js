import React from 'react'
import ReactDOM from 'react-dom'
import Navigation from './Navigation';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <Navigation />
    </Provider>
    , div);
  ReactDOM.unmountComponentAtNode(div);
})