import React from 'react'
import Patient from './Patient'


function PatientsList({patients}) {


    return (
        <div>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient}/>
            ))}
        </div>
    )
}

export default PatientsList
