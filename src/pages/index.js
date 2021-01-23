import React, {useState} from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom'; 
import {Sidebar} from '../components/Sidebar'; 
import {Navbar} from '../components/Navbar';
import {HeroSection} from '../components/HeroSection';
import {InfoSection} from '../components/InfoSection';
import {InfoSection2} from '../components/InfoSection2';
import {InfoSection3} from '../components/InfoSection3';
import {infothree} from '../components/InfoSection3/Data';

import { homeObjOne} from '../components/InfoSection/Data';
import { objectwo } from '../components/InfoSection2/Data2';

export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
    
        <Router>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/> 
 
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        <InfoSection3 {...infothree} />
        <InfoSection2 {...objectwo}/>
        </Router>
    )
}
