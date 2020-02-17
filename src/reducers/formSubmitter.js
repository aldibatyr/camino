import {FORM_SUBMIT} from '../actions';

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

const formSubmitReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_SUBMIT: 
            return action.payload
        default:
            return state;
    }
}

export default formSubmitReducer;