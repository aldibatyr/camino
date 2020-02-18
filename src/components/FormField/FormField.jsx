import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FormField = (props) => {
  const name = props.question.name;
  const type = props.question.type;
  const required = props.question.required;
  const text = props.question.text;
  let options;
  
  if (props.question.options) {
    options = props.question.options;
  }

  const renderInputType = () => {
    if (type === 'text') {
      return (
        <input type={type} name={name} id={name}
          onChange={(e) => props.setFormState({ ...props.formState, [e.target.name]: e.target.value })}
          onBlur={(e) => props.validateTextFieldInput(e)} />
      )
    } else if (type === 'email') {
      return (
        <input type={type} name={name} id={name}
          onChange={(e) => props.setFormState({ ...props.formState, [e.target.name]: e.target.value })}
          onBlur={(e) => props.validateEmailFieldInput(e)} />
      )
    } else if (type === 'tel') {
      return (
        <input type={type} name={name} id={name}
          onChange={(e) => props.setFormState({ ...props.formState, [e.target.name]: e.target.value })}
          onBlur={(e) => props.validatePhoneFieldInput(e)} />
      )
    } else if (type === 'radio') {
      return (
        <>
          <div className="question-answer">
            <input type={type} name={name} id={name} value={true}
              onChange={(e) => props.validateRadioFieldInput(e)}
            />
            <span>Yes</span>
          </div>
          <div className="question-answer">
            <input type={type} name={name} id={name} value={false}
              onChange={(e) => props.validateRadioFieldInput(e)} />
            <span>No</span>
          </div>
        </>
      )
    } else if (type === 'number') {
      return (
        <input type={type} name={name} id={name}
          onChange={(e) => props.setFormState({ ...props.formState, [e.target.name]: e.target.value })}
          onBlur={(e) => props.validateNumFieldInput(e)} />
      )
    } else if (type === 'select') {
      return (
        <select name={name} id={name}
                  onChange={(e) => props.setFormState({ ...props.formState, [e.target.name]: e.target.value })}
                  onBlur={(e) => props.validateSelectFieldInput(e)}>
                    {options.map(opt => <option value={opt} key={opt}>{opt}</option>)}
                </select>
      )
    }
  }

  console.log(props.formFieldsValid[`${name}`])
  return (
    <div className="input-section">
      <label htmlFor={name}>{text} {required ? <span className="required">*</span> : <></>}</label>
      <div className="input-wrapper">
        <div className="input-box">
          {renderInputType()}
        </div>
        {props.formFieldsValid[`${name}`] === true ? <span><FontAwesomeIcon icon={faCheckCircle} /></span> : <></>}
      </div>
      {(props.formFieldsValid[`${name}`] !== true && props.formFieldsValid[`${name}`] !== null) ? <span className='error'>{props.formFieldsValid[`${name}`]}</span> : <></>}
    </div>
  )
}


export default FormField;
