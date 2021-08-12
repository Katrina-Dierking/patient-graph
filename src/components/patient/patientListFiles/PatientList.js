import React from 'react'
import PatientInfo from './PatientListInfo'
import {PatientListWrap} from '../../../styles/PatientStyles'

function Patient({patient}) {
    return (
        <>
        <PatientListWrap>
            <div>
                    {patient.pts.map ((pt, index) => (
                        <PatientInfo
                            key={index}
                            name={pt.name}
                        />
                    ))}
            </div>
        </PatientListWrap>
        </>
    )
}

export default Patient
