import React from 'react'
import SideBarNav from '../components/shared/SideBarNav'
import BarGraph from './charts/BarGraph'
import GraphNavigation from '../components/shared/GraphNavigation'
import Lottie from 'react-lottie';
import animationData from '../lotties/health-care.json'
import {
    HomeWrap,
    TopWrap,
    AnimationWrap, 
    
    } from '../styles/HomeStyles'

function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
        <HomeWrap>
            <TopWrap>
                <SideBarNav />
            
                <AnimationWrap>
                    <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={300}
                    />
                </AnimationWrap> 
            </TopWrap>
            <GraphNavigation />
            
            <BarGraph className ="bar"/>
           
        </HomeWrap>
    );
}

export default Home
