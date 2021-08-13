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