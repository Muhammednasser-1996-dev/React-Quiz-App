import { combineReducers } from "redux";
import userState from "./loginReducer";
import ResultState from './../../../../../../containers/exam/redux/reducers/resultReducer'

export default combineReducers({
    userState,
    ResultState
});
