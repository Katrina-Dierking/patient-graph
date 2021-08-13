import styled from 'styled-components'

export const GraphNav = styled.nav`
    display:flex;
    justify-content: space-around;
    width: 100%;
    background-color:teal;
    padding:3%;
    margin-left: -2%;
    margin: 5% 0;

    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;

    .graphBtn {
        width: 140px;
        margin: 0 20px;
        padding: 10px 0;
        text-align: center;
        float: left;
        cursor: pointer;
        background: #000;
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }

    .graphLink {
        text-decoration:none;
        width: 10%;
        text-align:center;
        font-size: 16px;
        color:white;
    }

    .BorderTopBottom:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        top: -6px;
        left: -7px;
        background: #000;
        transition: all 0.5s ease;
    }

    .BorderTopBottom:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 3px;
        bottom: -6px;
        right: -7px;
        background: #000;
        transition: all 0.5s ease;
      }
      
    .BorderLeftRight:before {
        content: "";
        position: absolute;
        top: -4px;
        left: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }
      
    .BorderLeftRight:after {
        content: "";
        position: absolute;
        bottom: -4px;
        right: -7px;
        width: 3px;
        height: 25px;
        background: #000;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderTopBottom:before,
    .botBtn:hover .BorderTopBottom:after {
        width: 152px;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderLeftRight:before,
    .botBtn:hover .BorderLeftRight:after {
        height: 54px;
        transition: all 0.5s ease;
    }
`