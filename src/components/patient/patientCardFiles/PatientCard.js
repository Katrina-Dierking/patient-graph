import React from 'react'
import PatientCardInfo from './PatientCardInfo'
import {PatientCardWrap, CardDayWrap} from '../../../styles/PatientStyles'

function PatientCard({patient}) {
    console.log(patient)
    return (
       <>
        <CardDayWrap><h3 className="dayLabel">Patients seen on {patient.day} :</h3></CardDayWrap>
        <PatientCardWrap>
        
            <div>
                    {patient.pts.map ((pt, index) => (
                        <PatientCardInfo
                            key={index}
                            name={pt.name}
                            age={pt.age}
                            complaint = {pt.complaint}
                            painScale={pt.painScale}
                        />
                    ))}
            </div>
        </PatientCardWrap>
      </>
    )
}

export default PatientCard
