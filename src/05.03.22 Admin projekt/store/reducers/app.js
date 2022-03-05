import {SAVE_NAVIGATION_LIST} from "../action/app"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_NAVIGATION_LIST: return {
      ...state,
      navigationList:payload
    }

  default:
    return state
  }
}
