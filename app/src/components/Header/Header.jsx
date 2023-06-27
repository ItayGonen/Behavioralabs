import React, { useEffect, useState } from 'react';
import './Header.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/sleeping2.json';
import { globalStyles, globalTexts } from '../../styles';

const Header = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])

    const lottieStyle = {
        width: 600,
        height: 600,
        '@media screen and (max-width: 768px)': {
            height: '100px !important',
            width: '400px !important'
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const changeToQuizLocation = () => {
          window.location.replace("/quiz")
      }

  return (
    <div className='header-div' style={{ backgroundColor: globalStyles.HeaderBackgroundColor }}>
        <div className='text-header-div'>
            <h1>{ globalTexts.MainTitleInTheHeader }</h1>
            <p style={{ color: globalStyles.TextTagsInHomePage }}>{globalTexts.SecondryTitleInTheHeader}</p>
            <button className='start-the-test-button' style={{ backgroundColor: globalStyles.ButtonsHeaderColor }} onClick={changeToQuizLocation}> Start The Test</button>
        </div>

        <Lottie 
	        options={defaultOptions}
            className="lottie-icon-1"
            width={width < 768 ? 300 : 500}
            height={width < 768 ? 285 : 400}
        />

    </div>
  )
}

export default Header;