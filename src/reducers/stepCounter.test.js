import formStepReducer from './stepCounter';
import { NEXT_STEP, PREVIOUS_STEP } from '../actions';


describe('formStepReducer', () => {
  const initialState = {
    currentStep: 1,
    otherInfo: 'test'
}
  it('should return the same state when no action', () => {
    expect(formStepReducer(initialState, {})).toEqual(
      initialState
    );
  })
  .it('should increment currentStep by 1 when NEXT_STEP', () => {
    expect(formStepReducer(initialState, {type: NEXT_STEP})).toEqual(
      {
        currentStep: 2,
        otherInfo: 'test'
      }
    )
  })
})
