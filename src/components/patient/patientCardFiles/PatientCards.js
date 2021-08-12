import React, {useState, useEffect} from 'react'
import PatientCard from './PatientCard'
import axios from 'axios'
import GraphNavigation from '../../shared/GraphNavigation';
import TopNav from '../../shared/TopNav'
import {HeaderNav, PatientListWrap} from '../../../styles/PatientStyles'

function PatientCardList() {

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
                <h2>Patient Files:</h2> 
                <TopNav />
        </HeaderNav>    
        <PatientListWrap>
            {patients.map((patient) => (
                <PatientCard key={patient.id} patient={patient}/>
            ))}
        </PatientListWrap>
        <GraphNavigation />
        </>
    )
}

export default PatientCardList