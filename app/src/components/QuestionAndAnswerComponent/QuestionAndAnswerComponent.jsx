import React, { Fragment } from 'react';
import './QuestionAndAnswerComponent.css';
import { questionsAndAnswers } from '../../data';
import SingleQA from '../SingleQA/SingleQA';
import questionsAndAnswersImage from '../../assets/question.png'
import { globalStyles } from '../../styles';

const QuestionAndAnswerComponent = () => {
  return (
    <Fragment>
    <div className='container-questions-and-answers' style={{ backgroundColor: globalStyles.FaqBackgroundColor }}>
        <h1>Q&A</h1>
        {questionsAndAnswers.map((questionsAndAnswer) => 
        <SingleQA 
            question={questionsAndAnswer.question}  
            answer={questionsAndAnswer.answer} 
            key={questionsAndAnswer.id}
            id={questionsAndAnswer.id}
        />
        )}
    </div>
    </Fragment>
  )
}

export default QuestionAndAnswerComponent;