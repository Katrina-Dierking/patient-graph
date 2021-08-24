import { takeEvery, call, fork, put} from '@redux-saga/core/effects'
import * as actions from '../actions/actions-days';

import * as types from '../config/actionTypes'
import * as api from '../../api/patients'

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
const transformedData = (data) => {
    return data.map((day, index) => {
        return { 
            url: day,
            day: days[index]
        };
    });
};

export function* getDays() {
    try {
        const result = yield call(api.getPatients);
        yield put(actions.getDaysSuccess ({
            days:transformedData(result.data.message)
        }))
    } catch(e) {
        console.log('Days not found', e)
    }
}
function* watchGetDaysRequest(){
    yield takeEvery(types.GET_DAYS_REQUEST, getDays) ;
}

const daysSagas = [
    fork(watchGetDaysRequest)
];

export default daysSagas; 