import * as actions from './index';

describe('actions', () => {
  it('should create an action to toggle visible', () => {
    const expectedAction = {
      type: actions.TOGGLE_VISIBLE,
    }

    expect(actions.toggleVisible()).toEqual(expectedAction)
  })
  it('should create an action to call next step', () => {
    const expectedAction = {
      type: actions.NEXT_STEP,
    }
    expect(actions.nextSteps()).toEqual(expectedAction)
  })
  it('should create an action to call previous step', () => {
    const expectedAction = {
      type: actions.PREVIOUS_STEP,
    }
    expect(actions.previousStep()).toEqual(expectedAction)
  })
  it('should create an action to handle form submit', () => {
    const answers = {
      test: 'test',
      answer: 'answer'
    }
    const expectedAction = {
      type: actions.FORM_SUBMIT,
      payload: answers
    }
    expect(actions.formSubmit(answers)).toEqual(expectedAction)
  })
})