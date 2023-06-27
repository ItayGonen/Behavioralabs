import React from 'react';
import './Reviews.css';
import person1 from '../../assets/person1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import firstImg from '../../assets/1.jpeg';
import secondImg from '../../assets/2.jpeg';
import thirdImg from '../../assets/3.jpeg';
import fourthImg from '../../assets/4.jpeg';
import { globalStyles, globalTexts } from '../../styles';

const Reviews = () => {
  return (
    <div className='reviews-container'>
        <div className='pre-reports'>
            <h1>What Others Says</h1>
            {/* <p>More than 10000 users are satisfied using our personality test</p> */}
        </div>
        <div className='reviews'>

            <div className='review-item'>
                <div className='profile'>
                    <img src={secondImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'unset' }} />
                    <div className='details'>
                        <h1>{globalTexts.FirstQuoteName}</h1> 
                        <p>{globalTexts.FirstQuoteTakenTime}</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                        </div>
                    </div>
                </div>

               
                
                <div className='review-text'>
                    <p>
                    {globalTexts.FirstQuote}
                    </p>
                </div>
            </div>

            <div className='review-item'>
                <div className='profile'>
                    <img src={firstImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'unset' }} />
                    <div className='details'>
                        <h1>{globalTexts.SecondQuoteName}</h1> 
                        <p>{globalTexts.SecondQuoteTakenTime}</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                        </div>
                    </div>
                </div>

                <div className='review-text'>
                    <p>
                    {globalTexts.SecondQuote}
                    </p>
                </div>
            </div>

            <div className='review-item'>
                <div className='profile'>
                    <img src={fourthImg} style={{ borderRadius: '50%', width: '50px', height: '50px', objectFit: 'revert' }} />
                    <div className='details'>
                        <h1>{globalTexts.ThirdQuoteName}</h1> 
                        <p>{globalTexts.ThirdQuoteTakenTime}</p>
                        <div className='stars'>
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: globalStyles.StarsColor }} />
                        </div>
                    </div>
                </div>
                <div className='review-text'>
                    <p>
                    {globalTexts.ThirdQuote}
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Reviews;