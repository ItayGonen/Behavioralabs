import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiveCharacResults from '../../components/FiveCharacResults/FiveCharacResults';
import Progress from '../../components/Progress/Progress';
import ProgressResults from '../../components/ProgressResults/ProgressResults';
import cImage from '../../assets/pho2.png';
import Footer from '../../components/Footer/Footer';
import { userFinishPayment } from '../../redux/paymentRedux';
import Circuclar from '../Circuclar/Circuclar';

const FinalResult = () => {
    const result = useSelector(state => state.payment.result);

    const dispatch = useDispatch();

    useEffect(() => {
          if (result){
                dispatch(userFinishPayment())
            } else {
                window.location.replace("/")
            }
    }, [])

  return (
    <>
    <div className='outer-payment-results-container'>
        <FiveCharacResults />
    </div>
    <Footer />
    </>
  )
}

export default FinalResult;