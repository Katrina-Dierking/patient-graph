import React from 'react'
import Login from '../login/Login'
import Register from '../register/Register'
// import {Row, Col} from 'reactstrap'
import { SignUpWrap } from '../../styles/SignUpStyles'

function UserPage() {
    return (
        <SignUpWrap>
           <Login />
           <Register />
        </SignUpWrap>
    )
}

export default UserPage
