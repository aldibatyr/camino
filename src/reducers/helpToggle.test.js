import visibilityToggleReducer from './helpToggle';
import {TOGGLE_VISIBLE} from '../actions';

describe('visibilityToggleReducer', () => {
  let state = false;
  it('should return current state if no action is dispatched', () => {
    expect(visibilityToggleReducer(state, {})).toEqual(false)
  })
  it('should toggle state when TOGGLE VISIBLE action dispatched', () => {
    expect(visibilityToggleReducer(state, {
      type: TOGGLE_VISIBLE
    })).toEqual(
      !state
    )
  })
})