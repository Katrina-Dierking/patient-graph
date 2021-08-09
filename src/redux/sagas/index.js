import PatientsSagas from './sagas-patients';
import {all} from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        ...PatientsSagas
    ])
}