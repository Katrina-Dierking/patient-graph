import React from 'react'
import PatientInfo from './PatientInfo'
import {PatientWrap, Button} from '../styles/PatientStyles'

function Patient({patient, pts}) {
    return (
        <PatientWrap>
            <div>
                <h2>Patient's seen on {patient.day} :</h2>
                    {patient.pts.map ((pt, index) => (
                        <PatientInfo
                            key={index}
                            name={pt.name}
                            age={pt.age}
                            complaint = {pt.complaint}
                            painScale={pt.painScale}
                        />
                    ))}
            </div>
            <div>
                <Button>
                    Delete Patient
                </Button>
            </div>
        </PatientWrap>
    )
}

export default Patient
