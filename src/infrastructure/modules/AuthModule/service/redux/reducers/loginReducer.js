import { LOGIN, LOGOUT } from '../types'

const INITIAL_STATE = { UserName: null, accessToken: null };


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...action.payload };

        case LOGOUT: {
            return INITIAL_STATE
        }

        default:
            return state;
    }
};
