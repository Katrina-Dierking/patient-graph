import { combineReducers } from "redux";
import PatientsReducer from "./reducers-patients";

export default combineReducers({
    patients: PatientsReducer
});