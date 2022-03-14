import {SAVE_NAVIGATION_LIST, SAVE_DASHBOARD_LIST} from "../action/app"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SAVE_NAVIGATION_LIST: return {
      ...state,
      navigationList:payload
    }
    case SAVE_DASHBOARD_LIST:return {
      ...state,
      dashboardList: payload
    }

  default:
    return state
  }
}
