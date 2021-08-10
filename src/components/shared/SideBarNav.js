import React from 'react'
import {Link} from 'react-router-dom'
import {SideWrap}from '../../styles/HomeStyles'

function SideBarNav() {
    return (
        <div>
            <SideWrap>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to ='/about'>About</Link>
                        <a href="https://github.com/Katrina-Dierking" target="_blank" rel="noreferrer">Github</a>
                        
                    </nav>
                </SideWrap>
            
        </div>
    )
}

export default SideBarNav
