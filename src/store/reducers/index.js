import { INCREMENT } from "../actions";
import { DICREMENT } from "../actions"; 

const initialState = {
    count: 0
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case INCREMENT:
        return { count: ++state.count }
    case DICREMENT:
        return { count: --state.count }    
    default:
        return state
    }
}

export default reducer;