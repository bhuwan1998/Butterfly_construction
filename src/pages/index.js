import React, {useState} from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom'; 
import {Sidebar} from '../components/Sidebar'; 
import {Navbar} from '../components/Navbar';
import {HeroSection} from '../components/HeroSection';
import {InfoSection} from '../components/InfoSection';
import {InfoSection2} from '../components/InfoSection2';

import { homeObjOne,  homeObjThree } from '../components/InfoSection/Data';
import { objectwo } from '../components/InfoSection2/Data2';

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
        {/* <Sidebar isOpen={isOpen} toggle={toggle}/>  */}
        <Navbar toggle={toggle}/> 
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection2 {...objectwo}/>
        <InfoSection {...homeObjThree}/>
        </Router>
    )
}
