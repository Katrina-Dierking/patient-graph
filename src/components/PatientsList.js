import React from 'react'
import Patient from './Patient'
import GraphNavigation from '../../components/shared/GraphNavigation'


function PatientsList({patients}) {


    return (
        <div>
            <div>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient}/>
            ))}
            </div>
        </div>
    )
}

export default PatientsList
