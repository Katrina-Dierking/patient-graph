import React, {useState} from 'react'
import PainScalePoints from './PainScalePoints'
import {PatientInfoCardWrap} from '../../../styles/PatientStyles'

function PatientCardInfo({ name, age, complaint, painScale}) {

    const [pain, setPain] = useState(painScale);

    const incrementPain = () => {
        setPain(pain => pain + 1);
    };

    const decrementPain = () => {
        setPain(pain => pain - 1);
    };

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
             
                    <PainScalePoints 
                        incrementPain={incrementPain}
                        decrementPain={decrementPain}
                        pain={pain}
                    />

                    <div className="toggle">
                            <input type="checkbox" />
                            <h5 >Patient Discharged</h5>
                    </div>
          
            </PatientInfoCardWrap>
    )
}

export default PatientCardInfo