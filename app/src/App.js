import React, { Fragment, useState, useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect 
}
from 'react-router-dom';

import './App.css';

// Pages
import Body from './pages/Body/Body';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import QuestionsAndAnswers from './pages/QuestionsAndAnswers/QuestionsAndAnswers';
import Quiz from './pages/Quiz/Quiz';

// Components
import Answers from './components/Answers/Answers';
import FinalResult from './components/final-result/FinalResult';

// Redux
import { useDispatch, useSelector } from 'react-redux';





function App() {

  const isUserFinishTheQuiz = useSelector(state => state.payment.finishQuiz)
  const isUserMovedToPayment = useSelector(state => state.payment.moveToPayment);
  const isUserPaid = useSelector(state => state.payment.finishPayment);

  return (
    <React.Fragment>
      <Router>
        <div className='App'> 
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/faq" component={QuestionsAndAnswers} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/terms-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          
          {isUserFinishTheQuiz ? <Route path="/pre-payment" component={Answers} />  : <Redirect to="/" />}
          {isUserMovedToPayment ? <Route path="/final-result/:id" component={FinalResult} /> : null}
          
          <Route  path="/" >
              <Redirect to="/" />
            </Route>
            
        </Switch>
        </div>
      </Router>
    </React.Fragment> 
  );
}

export default App;
