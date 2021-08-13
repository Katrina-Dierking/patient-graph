import { Link } from 'react-router-dom'
import {PtNavWrap, ButtonWrap } from  '../../styles/DashboardStyles'

function PatientNav() {
    return (
        <PtNavWrap>
                <ButtonWrap>
                    <Link to='/patientfiles'><button>View Patient List</button></Link>
                    <Link to='/patientcardlist'><button>View Patient Cards</button></Link>
                </ButtonWrap>
            </PtNavWrap>
    )
}

export default PatientNav