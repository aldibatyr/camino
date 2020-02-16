import {combineReducers} from 'redux';
import visibilityToggleReducer from './helpToggle';

export default combineReducers({
    visible: visibilityToggleReducer
})