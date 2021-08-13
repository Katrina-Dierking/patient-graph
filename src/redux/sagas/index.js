
import {all} from 'redux-saga/effects'

import patientsSagas from './sagas-patients';
import {userSaga} from './sagas-users'

export default function* rootSaga() {
    yield all([
        ...patientsSagas,
        ...userSaga
    ])
}