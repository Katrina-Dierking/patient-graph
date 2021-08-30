
import SideBarNav from '../shared/SideBarNav'
import GraphNavigation from '../shared/GraphNavigation'

import BarGraph from '../charts/BarGraph'

import Lottie from 'react-lottie';
import animationData from '../../lotties/health-care.json'
import {
    HomeWrap,
    TopWrap,
    AnimationWrap, 
    
    } from '../../styles/HomeStyles'
import Samples from '../samples/Samples';

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
                <Samples />
                <AnimationWrap>
                    <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={300}
                    />
                </AnimationWrap> 
            </TopWrap>
            <GraphNavigation />
            
            <BarGraph />
           
        </HomeWrap>
    );
}

export default Home
