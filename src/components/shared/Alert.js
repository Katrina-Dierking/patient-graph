import React from 'react';
import {connect} from 'react-redux'
import {Alert} from 'reactstrap'

import { resetAlertAction } from '../../../actions/actions-alert'

const GlobalAlert = ({alert, dispatch}) => {

    const { text, color } = alert

    setTimeout(() => dispatch(resetAlertAction()), 3000)

    if (text === '') {
        return <></>
    }
    
    return (
        <Alert color={color}>{text}</Alert>
    )
}

const mapStateToProps = state => {
    return {
        alert : state.alert
    }
}

export default connect(mapStateToProps)(GlobalAlert)