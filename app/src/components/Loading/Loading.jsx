import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../../quizQuestions';
import { globalStyles } from '../../styles';
import FullQuiz from '../FullQuiz/FullQuiz';
import './Loading.css';

const Loading = () => {

    const [finishLoad, setFinishLoad] = useState(false)
    const [currentSentence, setCurrentSentence] = useState(0)
    const [questions, setQuestions] = useState([])
    

    const loadingSentences = ["Loading The Questions...", "Customize Things For You...", "Loading Icons...", "Customize Things For You..."]


    const makeQuestionsRandomArray = (questionsArray) => {
      return questionsArray.sort(() => Math.random() - 0.5)
    }
  
    

    useEffect(() => {
      let b;
      let startingNum = 1;
      b = makeQuestionsRandomArray(quizQuestions);
      for (let i = 0; i < quizQuestions.length; i++) {
        b[i].number = startingNum;
        startingNum++;
      }
      setQuestions(b);

        setInterval(() => {
            if (currentSentence < 3) {
                setCurrentSentence(currentSentence => currentSentence += 1)
            } 
        }, 8000/2)
        setTimeout(() => {
            setFinishLoad(true)
        }, 2000)
    }, [])

  return (
    <>
    {!finishLoad 
    ?
    <div className='loading-container' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}>
        <div className='loader'></div>
        <div className='loading-sentences'>
          <p>  {loadingSentences[currentSentence]} </p>
        </div>
    </div>
    :
    <FullQuiz quesWtions={questions} setQuestions={setQuestions} />
    }
    </>

  )
}

export default Loading;