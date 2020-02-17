import {combineReducers} from 'redux';
import visibilityToggleReducer from './helpToggle';
import formSubmitReducer from './formSubmitter';
import formStepReducer from './stepCounter';

export default combineReducers({
    helpVisible: visibilityToggleReducer,
    formStep1Answers: formSubmitReducer,
    formStep: formStepReducer
})