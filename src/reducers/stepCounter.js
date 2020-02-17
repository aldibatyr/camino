import { NEXT_STEP } from '../actions';
import {PREVIOUS_STEP} from '../actions';

const initialState = {
    
}

const formStepReducer = (state = 1, action) => {
    switch (action.type) {
        case NEXT_STEP: 
            return state + 1;
        case PREVIOUS_STEP:
            return state - 1;
        default:
            return state
    }
}

export default formStepReducer;