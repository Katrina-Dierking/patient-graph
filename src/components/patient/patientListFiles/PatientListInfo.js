import React from 'react'
import {PatientListWrap} from '../../../styles/PatientStyles'


function PatientListInfo({name}) {
    return (
    
        <PatientListWrap>
            <h4 className="ptName">{name}</h4>
        </PatientListWrap>
    
    )
}

export default PatientListInfo

