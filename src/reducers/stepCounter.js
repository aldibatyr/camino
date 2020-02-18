import { NEXT_STEP } from '../actions';
import { PREVIOUS_STEP } from '../actions';

const initialState = {
  currentStep: 1,
  stepsInfo: [
    {
      stepNumber: 1,
      stepName: 'Basic Information',
      stepIntro: 'Tell us a little bit about yourself and your business loan needs',
      stepQuestions: [
        {
          name: 'firstName',
          text: 'First Name',
          type: 'text',
          required: true
        },
        {
          name: 'lastName',
          text: 'Last Name',
          type: 'text',
          required: true
        },
        {
          name: 'email',
          text: 'Best Contact Email',
          type: 'email',
          required: true
        },
        {
          name: 'phone',
          text: 'Mobile Phone Number',
          type: 'tel',
          required: true
        },
        {
          name: 'ownBusiness',
          text: 'Do you own a business?',
          type: 'radio',
          required: true
        },
        {
          name: 'businessName',
          text: 'Business Name',
          type: 'text',
          required: true
        },
        {
          name: 'loanAmount',
          text: 'Desired Loan Amount',
          type: 'number',
          required: true
        },
        {
          name: 'purposeOfLoan',
          text: 'Purpose of Loan',
          type: 'select',
          options: ['', 'personal', 'growth', 'debt'],
          required: true
        },
        {
          name: 'isBusinessOver9Months',
          text: 'Have you been in business for at least 9 months? ',
          type: 'radio',
          required: true
        }
        
      ]
    },
    {
      stepNumber: 2,
      stepName: 'More Info',
      stepIntro: 'Well We will get to this step soon enough',
      stepQuestions: [
        {
          name: 'willHire',
          text: 'Are you going to hire me?',
          type: 'radio',
          required: true
        }
      ]
    },
    {
      stepNumber: 3,
      stepName: 'Contact Me',
      stepIntro: 'Great!',
      message: {
        text: 'Here is my contact info',
        links: [
          {
            name: 'email',
            ''
          }
        ]
      }
    }
]
}

const formStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_STEP:
      return { ...state, currentStep: state.currentStep + 1 };
    case PREVIOUS_STEP:
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
}

export default formStepReducer;