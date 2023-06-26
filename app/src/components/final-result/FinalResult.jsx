import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiveCharacResults from '../../components/FiveCharacResults/FiveCharacResults';
import Progress from '../../components/Progress/Progress';
import ProgressResults from '../../components/ProgressResults/ProgressResults';
import cImage from '../../assets/pho2.png';
import Footer from '../../components/Footer/Footer';
import { userFinishPayment } from '../../redux/paymentRedux';

const FinalResult = () => {
    const result = useSelector(state => state.payment.result);

    // For Production 
    //useEffect(() => {
    //     SubCategoryToAmountObject.map((name, value) => {
    //         if (name.value != null){
    //             dispatch(userFinishPayment())
    //         } else {
    //             window.location.replace("/")
    //         }
    //     })
    // }, [])

  return (
    <>
    <div className='outer-payment-results-container'>
        <h1 style={{ padding: '300px' }}> Your Result is {result} </h1>
    </div>
    <Footer />
    </>
  )
}

export default FinalResult;