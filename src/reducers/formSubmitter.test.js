import formSubmitReducer from './formSubmitter';
import {FORM_SUBMIT} from '../actions/index';



describe('formSubmitReducer', () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ownBusiness: null,
    businessName: '',
    loanAmount: '',
    purposeOfLoan: '',
    inBusinessOver9Months: null

}
  it('should return initial state if no action', () => {
    expect(formSubmitReducer(initialState, {})).toEqual(
      initialState
    )
  })
  it('should update the state with the new values if form is submitted', () => {
    expect(formSubmitReducer(initialState, {
      type: FORM_SUBMIT,
        payload: {
          firstName: 'Aldi',
          lastName: '',
          email: '',
          phone: '',
          ownBusiness: null,
          businessName: '',
          loanAmount: '',
          purposeOfLoan: '',
          inBusinessOver9Months: null
        }
    })).toEqual({
      firstName: 'Aldi',
      lastName: '',
      email: '',
      phone: '',
      ownBusiness: null,
      businessName: '',
      loanAmount: '',
      purposeOfLoan: '',
      inBusinessOver9Months: null
    })
  })
})