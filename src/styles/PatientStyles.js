import styled from 'styled-components'

export const PatientCardWrap = styled.section`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;  
    width: 40%; 
    margin-top: 2%;

    .toggle {
        display:flex;
        justify-content: space-evenly;
        padding:3%;
        width: 100%;
        background-color:green;
        box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    
        h5 {
            font-weight: 300;
            color:white;
        }
        .switch {
            margin-top:6%;
            margin-right: 3%;
        }
        
    }
`

export const PatientWrap = styled.div`
    margin-left: 2%;
    display:flex;
    flex-direction:column;
    margin-bottom: -3%;

    width: 15%;

`

export const PatientListWrap = styled.div`
    width:100%;
    background-color:white;

    .ptName {
        font-weight: 300;
    }

`

export const HeaderNav = styled.nav`
    background-color:teal;
    padding: 5%;
    display:flex;
    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;

    h2 {
        font-weight: 400;
    }
`

export const PatientInfoCardWrap = styled.div`
   width: 100%;
   display:flex;
   flex-direction:column;
   border: 1px solid black;
   padding:2.5%;
   margin-top: 5%;
   margin-left: 70%;
//    box-shadow: 10px 8px 20px -3px rgba(0,0,0,0.74);
//     -webkit-box-shadow: 10px 8px 20px -3px rgba(0,0,0,0.74);
//     -moz-box-shadow: 10px 8px 20px -3px rgba(0,0,0,0.74);   


box-shadow:
    /* The top layer shadow */
        0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
        0 10px 0 -5px #eee,
            /* The second layer shadow */
        0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
        0 20px 0 -10px #eee,
            /* The third layer shadow */
        0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
   .nameDiv {
       background-color:slategrey;
       box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
        -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
       
       .ptName {
           text-align: center;
           font-weight: 400;
           color:white;
       }
   }

   
   .ptdetails {
        background-color:#fefcfb;

        .ptInfo {
            font-weight: 500;
        }
    }

   .ptBtns {
       display:flex;
       justify-content:space-between;

       .actBtn {
           
       }
   }

`

export const CardDayWrap = styled.section`
    background-color:lavender;
    padding: 2%;
    margin-top: 3%;
    width: 100%;
    text-align:center;
    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74);
    -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74);
    -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74);



    .dayLabel {
        font-weight: 300;
    }
`

export const PainContainer = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-evenly;
    background-color:yellow;
    margin-bottom: 5%;
    padding: 2%;

    .painBts {
        width: 30%;
        // margin-top:10%;
        background-color:red;


        .button {
            margin-right: 10%;
            width: 40%;
            border-radius: 25%;
        }
    }

    .pain {
        background-color:blue;
    }
`
