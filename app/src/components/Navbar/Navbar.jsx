import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";
import { globalStyles } from '../../styles';
import logoSvgImg from '../../assets/final3.svg';

const Navbar = () => {

    const [responsive, setResponsive] = useState(false)

  
    useEffect(() => {
        let navElement = document.getElementById("nav");
        let barsIconElement = document.getElementById("bars-icon")
        // let logoElement = document.getElementById("logo")
        window.addEventListener('scroll', (event) => {
            if (window.scrollY > 0){
                navElement.classList.add("shadow")
                // logoElement.classList.add("res")
            } else {
                navElement.classList.remove("shadow")
                // logoElement.classList.remove("res")
            }
        })    
    }, [window])

    const changeToQuizLocation = () => {
        window.location.replace("/quiz")
    }

    

  return (
    <nav id='nav' className='nav' style={{ backgroundColor: globalStyles.NavBarBackgroundColor }}>
        <div className='icon-div'>
            {/* <Link to="" id="logo" className='logo'> Behaviora<span style={{ color: globalStyles.LabsColorInLogo }}>Labs</span></Link>  */}
            {/* <img src={logoImage} className="logo-image" /> */}
            <img src={logoSvgImg} style={{ width: '50%', height: '50px' }} />
            <FontAwesomeIcon 
                icon={!responsive ?  faBars : faClose}
                className='bars-icon'
                id="bars-icon"
                onClick={() => setResponsive(!responsive)}
            />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
            <ul id="main-navbar" className={responsive ? 'main-navbar expanded' : 'main-navbar'}>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/faq">
                        FAQ
                    </a>
                </li>

            </ul>
            <button className='start-test-button' style={{ backgroundColor: globalStyles.ButtonsHeaderColor }} onClick={changeToQuizLocation}> Start Test </button>
        </div>
    </nav>
  )
}

export default Navbar;