import React from 'react'

function PatientInfo({name, age, complaint, painScale}) {
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <h4>Age: {age}</h4>
                <h4>Complaint: {complaint}</h4>
                <h4>Starting pain scale: {painScale}</h4>
            </ul>
        </div>
    )
}

export default PatientInfo

