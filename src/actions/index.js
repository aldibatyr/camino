export const TOGGLE_VISIBLE = 'TOGGLE_VISIBLE';
export const toggleVisible = () => {
    return {
        type: TOGGLE_VISIBLE
    }
}

export const FORM_SUBMIT = 'FORM_SUBMIT';
export const formSubmit = answers => {
    return {
        type: FORM_SUBMIT,
        payload: answers
    }
}

export const NEXT_STEP = 'NEXT_STEP';
export const nextSteps = () => {
    return {
        type: NEXT_STEP
    }
}

export const PREVIOUS_STEP = 'PREVIOUS_STEP';
export const previousStep = () => {
    return {
        type: PREVIOUS_STEP
    }
}