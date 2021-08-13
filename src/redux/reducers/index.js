import { combineReducers } from "redux";

import PatientsReducer from "./reducers-patients";
import userReducer from "./reducers-user";
import alertReducer from "./reducers-alert";

export default combineReducers({
    patients: PatientsReducer,
    user: userReducer,
    alert: alertReducer
});