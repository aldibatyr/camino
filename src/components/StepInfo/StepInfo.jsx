import React from 'react'
import './StepInfo.scss';

export default function StepInfo(props) {

  const renderStepState = () => {

    if (props.step.stepNumber === 1) {
      return (
        <>
          <span className="counter-dash active"></span>
          <span className="counter-dash "></span>
          <span className="counter-dash"></span>
        </>
      )
    } else if (props.step.stepNumber === 2) {
      return (
        <>
          <span className="counter-dash active"></span>
          <span className="counter-dash active"></span>
          <span className="counter-dash"></span>
        </>
      )
    } else {
      return (
        <>
          <span className="counter-dash active"></span>
          <span className="counter-dash active"></span>
          <span className="counter-dash active"></span>
        </>
      )
    }
  }

  //this would need state updates about the step number
  return (
    props.step ? (
      <div className='step-info-wrapper'>
      <div className="step-info">
        <span>Step {props.step.stepNumber}: <b>{props.step.stepName}</b></span>
      </div>
      <div className="step-counter">
        <div className="label">
          <span>Step {props.step.stepNumber} of 3</span>
        </div>
        <div className="counter">
          {renderStepState(props.step)}
        </div>
      </div>
    </div>
    ) : (
      <>
        Nothing to display
      </>
    )
    
  )
}
