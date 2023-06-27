import React from 'react';
import './Second.css';
import Lottie from 'react-lottie';
import thinkingLottie from '../../lotties/thinking.json'
import jumpLottie from '../../lotties/switch.json';
import paperLottie from '../../lotties/moon.json';
import { globalStyles, globalTexts } from '../../styles';

const Second = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: paperLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      const secondDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: jumpLottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className='main-second'  style={{  backgroundColor: globalStyles.HeaderBackgroundColor}}>
        <div className='second-div'>
            <div className='second-div-item'>
                <Lottie 
	                options={defaultOptions}
                    width={350}
                    height={350}
                />
                <h2>{ globalTexts.AnimationsSection[0].main }</h2>
                <p style={{ color: globalStyles.TextTagsInHomePage }} >
                  { globalTexts.AnimationsSection[0].secondry }
                </p>
            </div>

            <div className='second-div-item'>
                <Lottie 
	                options={secondDefaultOptions}
                    width={350}
                    height={350}
                />
                <h2> { globalTexts.AnimationsSection[1].main } </h2>
                <p style={{ color: globalStyles.TextTagsInHomePage }}>
                { globalTexts.AnimationsSection[1].secondry }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Second;