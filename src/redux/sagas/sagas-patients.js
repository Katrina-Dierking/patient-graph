import { takeEvery, call, fork, put } from '@redux-saga/core/effects';
import * as actions from '../actions/actions-patients';

import * as types from '../config/actionTypes'
import * as api from '../../api/patients';



export function* getPatients(){
    try{
        const result = yield call(api.getPatients);
        yield put(actions.getPatientsSuccess({
            items: result.data
        }));
    }catch(e){

    }
}
function* watchGetPatientsRequest(){
    yield takeEvery(types.GET_PATIENTS_REQUEST, getPatients);
}

const patientsSagas = [
    fork(watchGetPatientsRequest)
];


export default patientsSagas;