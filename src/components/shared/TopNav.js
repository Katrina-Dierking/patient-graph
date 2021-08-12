import React from 'react'
import { Link } from 'react-router-dom'
import {TopNavWrap} from '../../styles/TopNavStyles'

function TopNav() {
    return (
        <TopNavWrap>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to ='/about'>About</Link>
                <a href="https://github.com/Katrina-Dierking" target="_blank" rel="noreferrer">Github</a>
            </nav>
        </TopNavWrap>
    )
}

export default TopNav
