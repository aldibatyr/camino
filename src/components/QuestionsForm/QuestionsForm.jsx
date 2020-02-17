import React, { useState } from 'react'
import './QuestionsForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_SUBMIT, NEXT_STEP, PREVIOUS_STEP } from '../../actions';

function QuestionsForm() {

  const [formState, setFormState] = useState({});
  const [formFieldsValid, setFormFieldsValid] = useState({})
  const [formValid, setFormValid] = useState(false)
  const step = useSelector(state => state.formStep);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_SUBMIT, payload: formState })
    dispatch({ type: NEXT_STEP })
  }

const setTextFieldInput = (e) => {
  if (e.target.value.length == 0) {
    setFormFieldsValid({...formFieldsValid, [e.target.name] : false})
  } 
  else {
    setFormFieldsValid({...formFieldsValid, [e.target.name] : true})
    setFormState({...formState, [e.target.name]: e.target.value})
  }
}

const setNumFieldInput = (e) => {
  if (isNaN(e.target.value)) {
    setFormFieldsValid({...formFieldsValid, [e.target.name] : false})
  } else {
    setFormFieldsValid({...formFieldsValid, [e.target.name] : true})
    setFormState({...formState, [e.target.name]: e.target.value})
  }
}

const setEmailFieldInput = (e) => {
  const reg_ex = /\S+@\S+\.\S+/
    if (reg_ex.test(e.target.value) != true) {
      setFormFieldsValid({...formFieldsValid, [e.target.name] : false})
    } else {
      setFormFieldsValid({...formFieldsValid, [e.target.name] : true})
      setFormState({...formState, [e.target.name]: e.target.value})
    }
}
  return (
    <>
      {(step == 1) ? (
        <form className='main-form' onSubmit={(e) => handleSubmit(e)}>
          <div className="form-introduction">
            <span className='main-text'>Tell us a little bit about yourself and your business loan needs</span>
            <br />
            <span className='required'>* required</span>
          </div>
          <div className="input-section">
            <label htmlFor="firstName">First Name <span className="required">*</span></label>
            <input type="text" name="firstName" id="firstName" onChange={(e) => setTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="lastName">Last Name <span className="required">*</span></label>
            <input type="text" name="lastName" id="lastName" onChange={(e) => setTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="email">Best Contact Email <span className="required">*</span></label>
            <input type="email" name="email" id="email" onChange={(e) => setEmailFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="phone">Mobile Phone Number <span className="required">*</span></label>
            <input type="tel" name="phone" id="phone" onChange={(e) => setNumFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="ownBusiness">Do you own a business? <span className="required">*</span></label>
            <div className="question-answer">
              <input type="radio" name="ownBusiness" id="ownBusiness" value={true} onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })} />
              <span>Yes</span>
            </div>
            <div className="question-answer">
              <input type="radio" name="ownBusiness" id="ownBusiness" value={false} onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })} />
              <span>No</span>
            </div>
          </div>
          <div className="input-section">
            <label htmlFor="businessName">Business Name <span className="required">*</span></label>
            <input type="text" name="businessName" id="businessName" onChange={(e) => setTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="loanAmount">Desired Loan Amount <span className="required">*</span></label>
            <input type="number" name="loanAmount" id="loanAmount" onChange={(e) => setNumFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="purposeOfLoan">Purpose of Loan <span className="required">*</span></label>
            <select name="purposeOfLoan" id="purpose" onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}>
              <option value="personal">Personal</option>
              <option value="growth">Growth</option>
              <option value="suit">Build Iron-Man suit</option>
            </select>
          </div>
          <div className="input-section">
            <label htmlFor="question">Have you been in business for at least 9 months? <span className="required">*</span></label>
            <div className="question-answer">
              <input type="radio" name="isBusinessOver9Months" id="question" value={true} onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })} />
              <span>Yes</span>
            </div>
            <div className="question-answer">
              <input type="radio" name="isBusinessOver9Months" id="question" value={false} onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })} />
              <label htmlFor="question">No</label>
            </div>
          </div>
          <div className="form-controls">
            <button className='button' type="submit" disabled={!formValid}>
              Next
        </button>
          </div>
        </form>
      ) : (
          <>
            Not Yet Implemented
            <button onClick={() => { dispatch({ type: PREVIOUS_STEP }) }} >
              go back
            </button>
          </>
        )}
    </>
  )
}

export default QuestionsForm
