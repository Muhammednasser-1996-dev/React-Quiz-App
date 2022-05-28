import { RESULT, CLEARRESULT } from '../types'

const INITIAL_STATE = [];


export default (state = INITIAL_STATE, action) => {
    console.log(">>", state.ResultState)
    switch (action.type) {
        case RESULT:
            return { ...state, ...action };

        case CLEARRESULT:
            return state.ResultState = [];

        default:
            return state;
    }
};
