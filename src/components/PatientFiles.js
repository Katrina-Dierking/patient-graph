import React, {useState, useEffect} from 'react'
import Patient from './Patient'
import axios from 'axios'
import GraphNavigation from './shared/GraphNavigation';

function PatientFiles() {

    const [patients, setPatients] = useState([])

    const handleResponse = (data) => {

        setPatients(data)
    };

    useEffect(() => {
        axios
            .get('./patients')
            .then((res) => {
                handleResponse(res.data)
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
        <div>
            <h2>Patient Files:</h2>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient}/>
            ))}
        </div>
        <GraphNavigation />
        </>
    )
}

export default PatientFiles
