import { LOGIN, LOGOUT } from "../types";

export const storeUserData = (userState) => (

    {
        type: LOGIN,
        payload: { ...userState },
    }
);
export const restoreUserData = (userData) => (
    {
        type: LOGOUT,
        userData,
    }
);