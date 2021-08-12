import React from 'react'
import {PainContainer} from '../../../styles/PatientStyles'

export default function PainScalePoints({ incrementPain, decrementPain, pain }) {
    return (
        <PainContainer>
            <div className = "painBts">
                    <button className="button" onClick={incrementPain}>
                        +
                    </button>
                    <button className="button" onClick={decrementPain}>
                        -
                    </button>{" "}
                </div>
            <h5 className="pain">
                {" "}Ending Pain Scale {pain}
            </h5>
        </PainContainer>
    )
}