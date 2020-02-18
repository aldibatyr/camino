import React, { useState } from 'react'
import './QuestionsForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_SUBMIT, NEXT_STEP, PREVIOUS_STEP } from '../../actions';

function QuestionsForm() {

  const [formState, setFormState] = useState({});
  const [formFieldsValid, setFormFieldsValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    businessName: false,
    loanAmount: false,
    purposeOfLoan: false,
    ownBusiness: false,
    isBusinessOver9Months: false
  })
  const [formValid, setFormValid] = useState(false)
  const step = useSelector(state => state.formStep);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_SUBMIT, payload: formState });
    dispatch({ type: NEXT_STEP });
  }

  const validateTextFieldInput = (e) => {
    if (e.target.value.length === 0) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: false })
    }
    else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateNumFieldInput = (e) => {
    if (isNaN(e.target.value)) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: false })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateEmailFieldInput = (e) => {
    const reg_ex = /\S+@\S+\.\S+/;
    if (reg_ex.test(e.target.value) !== true) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: false })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateRadioFieldInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
    setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
  }

  const validateSelectFieldInput = (e) => {
    if (e.target.value.length !== 0) {
      return setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true})
    } 
  }

  const activateNextButton = (obj) => {
    for (let key in obj) {
      !obj[key] ? setFormValid(false) : setFormValid(true)
    }
    
  }

  return (
    <>
      {(step === 1) ? (
        <form className='main-form' onSubmit={(e) => handleSubmit(e)} onChange={() => activateNextButton(formFieldsValid)}>
          <div className="form-introduction">
            <span className='main-text'>Tell us a little bit about yourself and your business loan needs</span>
            <br />
            <span className='required'>* required</span>
          </div>
          <div className="input-section">
            <label htmlFor="firstName">First Name <span className="required">*</span></label>
            <input type="text" name="firstName" id="firstName"
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="lastName">Last Name <span className="required">*</span></label>
            <input type="text" name="lastName" id="lastName"
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="email">Best Contact Email <span className="required">*</span></label>
            <input type="email" name="email" id="email"
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateEmailFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="phone">Mobile Phone Number <span className="required">*</span></label>
            <input type="tel" name="phone" id="phone"
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateNumFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="ownBusiness">Do you own a business? <span className="required">*</span></label>
            <div className="question-answer">
              <input type="radio" name="ownBusiness" id="ownBusiness" value={true}
                onChange={(e) => validateRadioFieldInput(e)}
              />
              <span>Yes</span>
            </div>
            <div className="question-answer">
              <input type="radio" name="ownBusiness" id="ownBusiness" value={false}
                onChange={(e) => validateRadioFieldInput(e)} />
              <span>No</span>
            </div>
          </div>
          <div className="input-section">
            <label htmlFor="businessName">Business Name <span className="required">*</span></label>
            <input type="text" name="businessName" id="businessName"
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })} 
              onBlur={(e) => validateTextFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="loanAmount">Desired Loan Amount <span className="required">*</span></label>
            <input type="number" name="loanAmount" id="loanAmount" 
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateNumFieldInput(e)} />
          </div>
          <div className="input-section">
            <label htmlFor="purposeOfLoan">Purpose of Loan <span className="required">*</span></label>
            <select name="purposeOfLoan" id="purpose" 
              onChange={(e) => setFormState({ ...formState, [e.target.name]: e.target.value })}
              onBlur={(e) => validateSelectFieldInput(e)}>
              <option value=""></option>
              <option value="personal">Personal</option>
              <option value="growth">Growth</option>
              <option value="suit">Build the Iron-Man suit</option>
            </select>
          </div>
          <div className="input-section">
            <label htmlFor="question">Have you been in business for at least 9 months? <span className="required">*</span></label>
            <div className="question-answer">
              <input type="radio" name="isBusinessOver9Months" id="question" value={true} onChange={(e) => validateRadioFieldInput(e)} />
              <span>Yes</span>
            </div>
            <div className="question-answer">
              <input type="radio" name="isBusinessOver9Months" id="question" value={false} onChange={(e) => validateRadioFieldInput(e)} />
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
