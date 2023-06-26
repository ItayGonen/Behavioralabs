import React, { useEffect, useState } from 'react';
import './StepsBefore.css';
import hotAitBaloonImage from '../../assets/hot-air-balloon.png'
import Loading from '../Loading/Loading';
import Aos from 'aos';
import "aos/dist/aos.css";
import { globalStyles, globalTexts } from '../../styles';

const QuizGame = () => {

    const [current, setCurrent] = useState(0)
    const [startAnimationInAction, setStartAnimationInAction] = useState(false)
    const [moveToLoading, setMoveToLoading] = useState(false)
    const [nextOne, setNextone] = useState(false)

    useEffect( () => {
        Aos.init({duration: 2000});
      }, [])




    const moveToTheNextStep = () => {
        if (current < (globalTexts.StepsBeforeStart.length - 1)) {
            setNextone(true)
            setCurrent(current => current += 1)
            setTimeout(() => {
                setNextone(false)
            }, 1000)
        } else if (current == (globalTexts.StepsBeforeStart.length - 1)) {
            setStartAnimationInAction(true)
            setTimeout( () => {
                setMoveToLoading(true)
                
            }, 1000)
        }
        
    }

  return (
      <>
    {!moveToLoading ? 
    <div className='quiz-main-container' style={{ background: globalStyles.StepsBeforeBackgroundColor.first, background: `linear-gradient(90deg, ${globalStyles.StepsBeforeBackgroundColor.first} 0%, ${globalStyles.StepsBeforeBackgroundColor.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }} >
        <div className='quiz-game-container'> 
            <div className='icon-div'>
                <img src={hotAitBaloonImage} className={startAnimationInAction ? 'image-animation-start' : 'image-animation'} />
            </div>
            <div className='quiz-layout'>
                <div className='step-title-div'>
                    <p className={nextOne ? "p-opa" : ""} style={{ color: globalStyles.textColorsHomePage }}> Step {globalTexts.StepsBeforeStart[current].id} </p>
                    <h1 className={nextOne ? "p-opa" : ""}>{globalTexts.StepsBeforeStart[current].title}</h1>
                </div>
                <p className={nextOne ? "p-opa" : ""} id="para" style={{ color: '#e9effb' }}>{globalTexts.StepsBeforeStart[current].para}</p>
                <button className='next-button' style={{ color: globalStyles.StepsBeforeBackgroundColor.first }}  onClick={moveToTheNextStep}>{current == 2 ? "Start" : "Next"}</button>
            </div>
        </div>
    </div>
    :
    <Loading  />
    }
    </>
  )
}

export default QuizGame;