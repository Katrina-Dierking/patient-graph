import React from 'react'
import { Link } from 'react-router-dom'
import { GraphNav } from '../../styles/HomeStyles'

function GraphNavigation() {
    return (
        
            <GraphNav>
            
                <div className = "graphBtn">
                    <Link to='/linegraph' className="graphLink">Line Graph</Link>
                    <span className = "BorderTopBottom"></span>
                    <span className = "BorderLeftRight"></span>
                </div>

                <div className = "graphBtn">
                    <Link to='/bargraph' className="graphLink">Bar Graph</Link>
                    <span className = "BorderTopBottom"></span>
                    <span className = "BorderLeftRight"></span>
                </div>

                <div className = "graphBtn">
                    <Link to='/areagraph' className="graphLink">Area Graph</Link>
                    <span className = "BorderTopBottom"></span>
                    <span className = "BorderLeftRight"></span>
                </div>
            </GraphNav>
        
    )
}

export default GraphNavigation
