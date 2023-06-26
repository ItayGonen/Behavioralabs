import React, { useEffect, useState } from 'react';
import './Question.css';
import Option from '../Option/Option';
import { questionsAndAnswers } from '../../data';
import Aos from 'aos';
import "aos/dist/aos.css";
import { globalStyles } from '../../styles';

const Question = (props) => {

  const [currentChapter, setCurrentChapter] = useState(1)
  const numberOfChapters = 5;
  const numberOfQuestions = props.allQuestions.length;
  let numbersOfQuestionsinEveryChapter = Math.round(props.allQuestions.length / numberOfChapters)

    useEffect(() => {
      if (props.question.number % numbersOfQuestionsinEveryChapter == 0 && currentChapter < numberOfChapters) {
        setCurrentChapter(prevState => prevState + 1 )
      }
      console.log(currentChapter)
    }, [props.question.number])


  return (
    <>
        <p className='questions-number-from' style={{  color: globalStyles.ChapterColors}}> Chapter <span className='span-from-number' style={{  color: globalStyles.ChapterColors}}> {currentChapter} </span> / {numberOfChapters}</p>
        <p className='question-text'>{props.question.name}</p>
    </>
    
  )
}

export default Question;