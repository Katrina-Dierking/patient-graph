import { combineReducers } from "redux";

import PatientsReducer from "./reducers-patients";
import DaysReducer from "./reducers-days"
import PainReducer from "./reducers-pain"
import userReducer from "./reducers-user";
import alertReducer from "./reducers-alert";

export const reducer = combineReducers({
    patients: PatientsReducer,
    counter: PainReducer,
    days: DaysReducer,
    user: userReducer,
    alert: alertReducer
});