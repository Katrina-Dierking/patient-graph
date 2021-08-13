import React from 'react'

import PatientNav from '../shared/PatientNav'
import TopNav from '../shared/TopNav'

import KatDier from '../../images/KatDier.png'
import propsImg from '../../images/propsImg.png'

import { HeaderWrap } from '../../styles/DashboardStyles'
import { HeroWrap, ThreeCarWrap, Resume } from '../../styles/AboutStyles.js'
// import { HeroWrap, ThreeCarWrap} from '../../styles/AboutStyles.sass'

function About() {
    return (
        <>
        <HeaderWrap>
            <div className="headerInfo">
                <h2 className="title">ABOUT</h2>
                <h5>The Patient Charting App</h5>
            </div>
            <TopNav />
        </HeaderWrap>
        <PatientNav />

        <HeroWrap>
            <div className="leftHero">
                <img src={KatDier} className="proPic" alt="Katrina Dierking | Software Engineer"  />
                <h5>Developer: Katrina Dierking</h5>
            </div>
            <div className="rightHero">
                <h4>The rest of the story: </h4>
                <p>I couldn't find an API I wanted to use so I made my own. You can find it <span><a href = "https://my-patient-api.herokuapp.com">HERE.</a></span></p>
                <p>I spent many years in the medical field. I was a Surgical Techonologist, Firefighter, and then a Paramedic before finding my future in software engineering.</p>
                <p>To better understand coding concepts, I have made a habit of relating everything to the medical field and creating visual aids for myself since I am a visual learner. </p>
                <p>I created the "Three Car Pileup" as a way to better undertand passing props and to also help other aspiring developers understand the concept.</p>
                <p>Now, with the Patient Charting App, I have used the same concept and the same real-world example to walk through Redux / Redux Saga and creating charts. There are many more things I want to do with this App -- and I will in the very near future.</p>
                
                <p>I have started the Login/Registration page (also using Redux saga). In the future, I will set up a private route for the dashboard that requires a registration and login before accessing the patient data.</p>
                
                <p>Also in the near future I will give the user the ability to create a user profile where they will be able to keep track of all their patients, add new patients, and edit/delete current patients. </p>
            </div>
        </HeroWrap>

        
      
        <ThreeCarWrap>
            <h4 className="carTitle">The Three Car Pile Up Experience</h4>

            <div className="carDetails">
                <div className="threeCarLeft">
                    <img src={propsImg} className="passingProps" alt="passingProps"/>     
                </div>

                <div className = "threeCarRight">
                    <h4>Learn Passing Props With React</h4>
                    <hr></hr>

                    <p><span><a href = "https://github.com/Katrina-Dierking-HTTC/three-car-pileup"> View the Three Car Pile Up (Passing Props)</a></span></p>
                    <p><span><a href = "https://blog.hertimetocode.com/wp-content/uploads/2021/06/React-_-Passing-Data-via-Props.pdf">Download the Three Care Pile Up Visual Aid Tools</a></span></p>
                </div>
            </div>
        </ThreeCarWrap>

        <Resume></Resume>
       </>
    )
}

export default About
