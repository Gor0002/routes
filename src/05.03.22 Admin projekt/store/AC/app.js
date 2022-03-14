import {SAVE_NAVIGATION_LIST, SAVE_DASHBOARD_LIST} from "../action/app"

export const saveNavigationList = (payload) =>{
    return {
        type:SAVE_NAVIGATION_LIST,
        payload

    }
}

export const saveDashboardList = (payload) =>{
    return {
        type:SAVE_DASHBOARD_LIST,
        payload

    }
}