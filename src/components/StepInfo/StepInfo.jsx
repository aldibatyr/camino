import React from 'react'
import './StepInfo.scss';

export default function StepInfo() {

  //this would need state updates about the step number
  return (
    <div className='step-info-wrapper'>
      <div className="step-info">
        <span>Step 1: <b>Basic Information</b></span>
      </div>
      <div className="step-counter">
        <div className="label">
          <span>Step 1 of 3</span>
        </div>
        <div className="counter">
          <span className="counter-dash"></span>
          <span className="counter-dash"></span>
          <span className="counter-dash"></span>
        </div>
      </div>
    </div>
  )
}
