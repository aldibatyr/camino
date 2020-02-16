import { TOGGLE_VISIBLE } from "../actions"


const visibilityToggleReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_VISIBLE:
      return !state
    default: 
      return state
  }
}

export default visibilityToggleReducer;