import styled from 'styled-components'

export const HomeWrap = styled.section`
    display:flex;
    flex-direction: column;
    width: 100%
    background:red;

    .bar {
        margin-left: 5%;
    }
`
export const TopWrap = styled.section`
    width: 100%;
    display:flex;

`
export const SideWrap = styled.section`
    width: 120%;
    height: 30%;
    padding-left: 2%;
    margin-top: 5%;
    border-right: .2px solid teal;

    nav {
        display:flex;
        flex-direction: column;
        
     a{
         padding: 1%;
         text-decoration: none;
     }
    }
`


export const AnimationWrap = styled.section`
    width: 100%;
`

export const GraphNav = styled.nav`
    display:flex;
    justify-content: space-around;
    width: 100%;
    background-color:teal;
    padding:2%;
    margin-left: -2%;

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
        width: 154px;
        transition: all 0.5s ease;
    }

    .botBtn:hover .BorderLeftRight:before,
    .botBtn:hover .BorderLeftRight:after {
        height: 57px;
        transition: all 0.5s ease;
    }
`