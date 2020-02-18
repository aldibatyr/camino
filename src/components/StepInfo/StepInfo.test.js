import React from 'react';
import ReactDOM from 'react-dom';
import StepInfo from './StepInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StepInfo/>, div);
  ReactDOM.unmountComponentAtNode(div);
})