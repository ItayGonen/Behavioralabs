import React, { Fragment, useEffect, useState } from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons'
import img from '../../assets/download.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { globalStyles, globalTexts } from '../../styles';

const Timelime = () => {

    const [width, setWidth] = useState(0)

    useEffect( () => {
        Aos.init({duration: 2000});
    }, [])

    useEffect(() => {
        // console.log(width)
        setWidth(window.innerWidth)
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [width])


  return (
    <React.Fragment>
    <div className='container'>
        <div className='container-item' id="first" data-aos="fade-right">
            <div className='circled-div' style={{ backgroundColor: globalStyles.BallsColor }}>1</div>
            <h2>{ globalTexts.BallsText[0].main }</h2>
            <p style={{ color: globalStyles.TextTagsInHomePage }}>{ globalTexts.BallsText[0].secondry }</p>
            {width > 1024 ? 
                <img src={img} style={{ alignSelf: 'flex-end', paddingTop: '10px', marginRight: '0px' }} data-aos="fade-in" />
            :
                null
            }
        </div>

        <div className='container-item' id="second" data-aos="fade-left">
            <div className='circled-div' style={{ backgroundColor: globalStyles.BallsColor }}>2</div>
            <h2>{ globalTexts.BallsText[1].main }</h2>
            <p style={{ color: globalStyles.TextTagsInHomePage }}>{globalTexts.BallsText[1].main}</p>
            {width > 1024 ? 
                <img src={img} style={{ alignSelf: 'flex-end', paddingTop: '10px', marginRight: '0px' }} data-aos="fade-in"/>
            :
                null
            }
        </div>

        <div className='container-item' id="third" data-aos="fade-right">
            <div className='circled-div' style={{ backgroundColor: globalStyles.BallsColor }}>3</div>
            <h2> {globalTexts.BallsText[2].main} </h2>
            <p style={{ color: globalStyles.TextTagsInHomePage }}>{globalTexts.BallsText[2].main}</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Timelime;