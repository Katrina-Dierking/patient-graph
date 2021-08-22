import React from 'react'
import PainScaleCounter from './PainScaleCounter'
import {PatientInfoCardWrap} from '../../../styles/PatientStyles'

function PatientCardInfo({ name, age, complaint, painScale}) {


    return (
            <PatientInfoCardWrap>
                <div className="nameDiv"><h4 className="ptName">{name}</h4></div>
                <div className = "ptdetails">
                    <ul>
                        <h5 className="ptInfo">Age: {age}</h5>
                        <h5 className="ptInfo">Complaint: {complaint}</h5>
                        <h5 className="ptInfo">Starting pain scale: {painScale}</h5> 
                    </ul>
                </div>

                    <PainScaleCounter painScale={painScale} />
                    <div className="toggle">
                            <input type="checkbox" />
                            <h5 >Patient Discharged</h5>
                    </div>
          
            </PatientInfoCardWrap>
    )
}

export default PatientCardInfo