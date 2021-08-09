import React from 'react'
import Patient from './Patient'


function PatientsList({patients}) {

    return (
        <div>
            {patients.sort((a,b) =>{
                if(a.name > b.name) {
                    return 1;
                } else if(a.name < b.name) {
                    return -1;
                } else {
                    return 0;
                }
            }).map((patient) => (
                <Patient key={patient.id} patient={patient}/>
            ))}
        </div>
    )
}

export default PatientsList
