import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {increment, decrement} from '../../../redux/actions/actions-pain'
import {PainContainer} from '../../../styles/PatientStyles'

const PainScaleCounter = ({painScale}) => {
    const dispatch = useDispatch();

    const [endingPain, setEndingPain] = useState(painScale)

    const handleIncrement = () => {
        dispatch(increment());
        setEndingPain(endingPain + 1)
    };
    const handleDecrement = () => {
        dispatch(decrement());
        setEndingPain(endingPain - 1)
    };
    
   
    return (
        <PainContainer>
            <h4>{`Ending pain: ${endingPain}`}</h4>
            <div className = "painBts">
                <button onClick={handleIncrement} disabled={endingPain >=10}>Increase</button>
                <button onClick={handleDecrement} disabled={endingPain === 0} >Decrease</button>
            </div>
        </PainContainer>
    )
}

export default PainScaleCounter