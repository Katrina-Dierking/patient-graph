import React from 'react'
import {PatientWrap, Button} from '../styles/PatientStyles'

function Patient({patient}) {
    return (
        <PatientWrap>
            <div>
                <h2>Patient's Name: {patient.name}</h2>
                <p>Age: {patient.age}</p>
                <p>Day seen: {patient.day}</p>
                <p>Complaint: {patient.complaint}</p>
                <p>Pain scale: {patient.painScale}</p>
                <p>Resources: {patient.resources}</p>
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
