import styled from 'styled-components'


export const HeaderWrap = styled.section`
    background-color:teal;
    width: 100%;
    padding: 2%;
    display:flex;
    @include box-shadow {}
    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;

    .title {
        font-weight: 100;
        color:white;
        width: 50%;
    }

    .headerInfo {
        width: 70%;
    }
`

export const ButtonWrap = styled.div`
    width: 40%;

    button {
        margin-right: 5%;
        margin-top: 5%;
    }
`

export const PtNavWrap = styled.div`
    display:flex;
    width: 100%;
    background-color:teal;
    padding: 2%;
    margin-bottom: 5%;
    box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -webkit-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
    -moz-box-shadow: -3px 10px 15px -3px rgba(0,0,0,0.74) inset;
`