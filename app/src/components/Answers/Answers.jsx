import React, { useState, useEffect } from 'react';
import './Answers.css';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import imgForExample from '../../assets/Feelings/happy.png'
import strengthImg from '../../assets/strength.png';
import thoughtImg from '../../assets/thought.png';
import slideImg from '../../assets/slide.png';
import adviceImg from '../../assets/Feelings/advice.png';
import weaknessImg from '../../assets/Feelings/weakness.png';
import firstAnalysisImg from '../../assets/Feelings/analytics-1.png';
import secondAnalysisImg from '../../assets/Feelings/analytics-2.png';
import thirdAnalysisImg from '../../assets/Feelings/analysis-3.png';
import 'react-circular-progressbar/dist/styles.css';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    Redirect 
  }
from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import { useSelector, useDispatch } from 'react-redux';
import { userMovedToPayment, SetSubCategoryToAmountObjectRedux, setResult } from '../../redux/paymentRedux';
import './Packages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faCheck, faArrowDown, faHand, faDumbbell, faSadCry, faArrowCircleDown, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { FaxSharp, TrySharp } from '@mui/icons-material';
import { globalStyles, globalTexts } from '../../styles';


const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    gap: '15px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };

const Answers = (props) => {

    const location = useLocation()
    const s = location.state
    const [allQuestions, setAllQuestions] = useState(s? s.doneQuestions : null)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const dispatch = useDispatch();
    

    // New to the "sleeping part"
    const [subCategoryToAmount, setSubCategoryToAmount] = useState({})
    
    useEffect(() => {
        console.log(allQuestions)
        const calculate = () => {
            let s = 0
            allQuestions?.map((question) => {
                s += question.selected
            })
            dispatch(setResult(s))
        }
        calculate()
    }, [])

  return ( 
    <>
    <div className='results-container'>
        <div className='pre-reports'>
            <h1 style={{ color: 'black', width: '80%', textAlign: 'center' }}> { globalTexts.FirstTitlePrePaymentPage }  <span style={{ fontWeight: '1000', color: globalStyles.ButtonsHeaderColor }}> {globalTexts.BoldTitlePrePaymentPage} </span></h1>
            <p>{globalTexts.DescriptionToResultsTitle} </p>
        </div>

        <div className='pre-reports'>
            <h1> Our Reports </h1>
            <p> {globalTexts.DescriptionToTheOurReportsTitle} </p>
         </div>

         <div className='reports' id="basic-report">
            
            <div className='report-item' id="master-report" style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}>
                <div className='level'>
                    <p style={{ color: 'white' }}> Complete Personality Report </p>
                </div>
                <div className='price'>
                    <p> {globalTexts.FirstReportPrice} </p>
                </div>
                <div className='lines'>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>{globalTexts.FirstReportFeatures[0]}</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>{globalTexts.FirstReportFeatures[1]}</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    {/* <div className='feature-check-icon'>
                        <p>Essentials Tips to improve yourself</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div> */}
                </div>
                <a
                    href="/final-result/123"
                    className="to-payment-button"
                    style={{ color: globalStyles.ButtonsHeaderColor }}
                > Get My Results </a>
            </div>

            <div className='report-item' id="master-report" style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}>
                <div className='level'>
                    <p style={{ color: 'white' }}> Advanced Personality Report </p>
                </div>
                <div className='price'>
                    <p> {globalTexts.SecondReportPrice} </p>
                </div>
                <div className='lines'>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>{globalTexts.SecondReportFeatures[0]}</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>{globalTexts.SecondReportFeatures[1]}</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                    <div className='feature-check-icon'>
                        <p>{globalTexts.SecondReportFeatures[2]}</p>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <hr />
                </div>
                <a
                    href="/final-result/123"
                    className="to-payment-button"
                    style={{ color: globalStyles.ButtonsHeaderColor }}
                > Get My Results </a>
            </div>

            
         </div>


         <div className='middle-section' style={{ padding: '40px', background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}>
            {globalTexts.PercentagesOfPeopleDecidedToViewTheirFullReport}
         </div>
            <Reviews />
        </div>
        <Footer />
    </>
  )
}

export default Answers;



