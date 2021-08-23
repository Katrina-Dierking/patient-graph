import React, {useState, useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {getPatients} from '../../../redux/sagas/sagas-patients'
import PatientCard from './PatientCard'
import axios from 'axios'
import GraphNavigation from '../../shared/GraphNavigation';
import TopNav from '../../shared/TopNav'
import {HeaderNav, PatientListWrap} from '../../../styles/PatientStyles'
import PatientNav from '../../shared/PatientNav';

function PatientCardList() {
        // const dispatch = useDispatch();

        // useEffect (() => {
        //         dispatch(getPatients());
        // }, [dispatch]);

        // const patients = useSelector((state) => state.patients.items)
        // console.log(patients)


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
        <PatientNav />
        <PatientListWrap>
            {patients.map((patient) => (
                <PatientCard key={patient.id} patient={patient}/>
            ))}

                {/* <PatientCard patients={patients.items}/> */}
        </PatientListWrap>
        <GraphNavigation />
        </>
    )
}

export default PatientCardList