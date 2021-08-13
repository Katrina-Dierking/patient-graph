import {useState, useEffect} from 'react'
import axios from 'axios'

import Patient from './PatientList'

import GraphNavigation from '../../shared/GraphNavigation';
import PatientNav from '../../shared/PatientNav';
import TopNav from '../../shared/TopNav'

import {HeaderNav, PatientListWrap} from '../../../styles/PatientStyles'


function PatientListFiles() {

    const [patients, setPatients] = useState([])

    const handleResponse = (data) => {

        setPatients(data)
    };

    useEffect(() => {
        axios
            .get('./patients')
            .then((res) => {
                handleResponse(res.data)
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
        <HeaderNav>
                <h2>Patient List:</h2> 
                <TopNav />
        </HeaderNav>   
        <PatientNav /> 
        <PatientListWrap>
            {patients.map((patient) => (
                <Patient key={patient.id} patient={patient}/>
            ))}
        </PatientListWrap>
        <GraphNavigation />
        </>
    )
}

export default PatientListFiles
