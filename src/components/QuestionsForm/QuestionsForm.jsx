import React, { useState, useEffect } from 'react';
import FormField from '../FormField/FormField';
import './QuestionsForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { FORM_SUBMIT, NEXT_STEP } from '../../actions';

function QuestionsForm(props) {

  const [formState, setFormState] = useState({});
  const [formFieldsValid, setFormFieldsValid] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    businessName: null,
    loanAmount: null,
    purposeOfLoan: null,
    ownBusiness: null,
    isBusinessOver9Months: null
  })
  const [formValid, setFormValid] = useState(false)
  const step = useSelector(state => state.formStep.currentStep);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_SUBMIT, payload: formState });
    dispatch({ type: NEXT_STEP });
  }

  const validateTextFieldInput = (e) => {
    if (e.target.value.length === 0) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must not be empty' })
    }
    else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validatePhoneFieldInput = (e) => {
    if (isNaN(e.target.value)) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must be numerical' })
    } else if (e.target.value.length !== 10) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must not be empty and 10 numbers' })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateNumFieldInput = (e) => {
    if (isNaN(e.target.value)) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must be a number' })
    } else if (e.target.value.length < 1) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must not be empty' })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateEmailFieldInput = (e) => {
    const reg_ex = /\S+@\S+\.\S+/;
    if (reg_ex.test(e.target.value) !== true) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'A field must be a valid email. Example: xyz@som.com' })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    }
  }

  const validateRadioFieldInput = (e) => {
    console.log(e.target)
    setFormState({ ...formState, [e.target.name]: e.target.value })
    setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
  }

  const validateSelectFieldInput = (e) => {
    if (e.target.value.length !== 0) {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: true })
    } else {
      setFormFieldsValid({ ...formFieldsValid, [e.target.name]: 'You must select an option' })
    }
  }

  const activateNextButton = (obj) => {
    let array = Object.values(obj);
    let truly = 0;

    array.map(value => {
      if (value === true) {
        truly++;
      }
    })

    if (truly === array.length) {
      setFormValid(true);
    }
  }

  useEffect(() => {
    activateNextButton(formFieldsValid)
  }, [formFieldsValid])


  return (
    <>
      <form className='main-form' onSubmit={(e) => handleSubmit(e)}>
        <div className="form-introduction">
          <span className='main-text'>{props.step.stepIntro}</span>
          <br />
          <span className='required'>* required</span>
        </div>
        {props.step.stepQuestions ? (
          (
            props.step.stepQuestions.map((question, i) => {
              return (
                <FormField
                  key={i}
                  formState={formState}
                  setFormState={setFormState}
                  formFieldsValid={formFieldsValid}
                  validateTextFieldInput={validateTextFieldInput}
                  validatePhoneFieldInput={validatePhoneFieldInput}
                  validateNumFieldInput={validateNumFieldInput}
                  validateEmailFieldInput={validateEmailFieldInput}
                  validateRadioFieldInput={validateRadioFieldInput}
                  validateSelectFieldInput={validateSelectFieldInput}
                  question={question}
                />
              )
            })
          )
        ) : (
            <div className="message">
              <div className="text">
                <p>{props.step.message.text}:</p>
              </div>
              <div className="links">
                {props.step.message.links.map(link => <a key={link.link} href={link.link} target='_blank' rel='noopener noreferrer'>{link.text}</a>)}
              </div>
            </div>
          )}

        <div className="form-controls">
          {step === 3 ? (
            <>
            </>
          ) : (
              <button className='button' type="submit" disabled={!formValid}>
                Next
              </button>
            )}

        </div>
      </form>
    </>
  )
}

export default QuestionsForm
