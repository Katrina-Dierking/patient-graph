import styled from 'styled-components'


export const HeroWrap = styled.section`
    width: 100%;
    margin-bottom: 5%;
    display:flex;

    .leftHero {
        width: 30%;
        padding-top: 5%;
        
       .proPic {
           padding: 3%;
            box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
            -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
            -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;

            margin-bottom: 1%;
        }
    }

    .rightHero {
        border: 1px solid #e21979;
        background-color:lightgrey;
        width: 70%;
        padding: 1%;
    }

`

export const ThreeCarWrap = styled.section`
    width: 100%;

    .carDetails {
        display:flex;
        justify-content: space-evenly;
        padding-top: 3%;
    }

    .threeCarLeft {
        // padding: 2%;
    }

    .carTitle {
          weight:200%;
          color: white; 
          background-color: #e21979;
          text-decoration: underline; 
          padding: 3%;

          box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
          -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
          -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    }

    .passingProps{
        padding: 2%;
        width: 350px;
        box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    }

    .threeCarRight {
        padding-top: 12%;
    }
    
`

export const Resume = styled.div``