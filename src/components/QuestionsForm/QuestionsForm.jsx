import React from 'react'
import './QuestionsForm.scss';

function QuestionsForm() {
  return (
    <form className='main-form'>
      <div className="form-introduction">
        <span className='main-text'>Tell us a little bit about yourself and your business loan needs</span>
        <br />
        <span className='required'>* required</span>
      </div>
      <div className="input-section">
        <label htmlFor="firstName">First Name <span className="required">*</span></label>
        <input type="text" name="firstName" id="firstName" />
      </div>
      <div className="input-section">
        <label htmlFor="lastName">Last Name <span className="required">*</span></label>
        <input type="text" name="lastName" id="lastName" />
      </div>
      <div className="input-section">
        <label htmlFor="email">Best Contact Email <span className="required">*</span></label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="input-section">
        <label htmlFor="phone">Mobile Phone Number <span className="required">*</span></label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div className="input-section">
        <label htmlFor="ownBusiness">Do you own a business? <span className="required">*</span></label>
        <div className="question-answer">
          <input type="radio" name="ownBusiness" id="ownBusiness" value="yes" />
          <span>Yes</span>
        </div>
        <div className="question-answer">
          <input type="radio" name="ownBusiness" id="ownBusiness" value="no" />
          <span>No</span>
        </div>
      </div>
      <div className="input-section">
        <label htmlFor="businessName">Business Name <span className="required">*</span></label>
        <input type="text" name="businessName" id="businessName" />
      </div>
      <div className="input-section">
        <label htmlFor="loanAmount">Desired Loan Amount <span className="required">*</span></label>
        <input type="number" name="loanAmount" id="loanAmount" />
      </div>
      <div className="input-section">
        <label htmlFor="purpose">Purpose of Loan <span className="required">*</span></label>
        <select name="purpose" id="purpose">
          <option value="personal">Personal</option>
          <option value="growth">Growth</option>
          <option value="suit">Build Iron-Man suit</option>
        </select>
      </div>
      <div className="input-section">
        <label htmlFor="question">Have you been in business for at least 9 months? <span className="required">*</span></label>
        <div className="question-answer">
          <input type="radio" name="question" id="question" value="yes" />
          <span>Yes</span>
        </div>
        <div className="question-answer">
          <input type="radio" name="question" id="question" value="no" />
          <label htmlFor="question">No</label>
        </div>
      </div>
      <div className="form-controls">
        <button className='button' type="submit">
          Next
        </button>
      </div>
    </form>
  )
}

export default QuestionsForm
