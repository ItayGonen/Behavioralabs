import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        finishQuiz: false,
        moveToPayment: false,
        finishPayment: false,
        payerName: null,
        payerEmail: null,
        payerCountryCode: null,
        subCategoryToAmountObjectRedux: {},
        result: 0
    },
    reducers: {
        userFinishedQuiz: (state, action) => {
            state.finishQuiz = action.payload;
        },
        userMovedToPayment: (state, action) => {
            state.moveToPayment = true;
        }, 
        userFinishPayment: (state, action) => {
            state.finishPayment = true;
        }, 
        setPayerNameReduxFunc: (state, action) => {
            state.payerName = action.payload;
        },
        setPayerEmailReduxFunc: (state, action) => {
            state.payerEmail = action.payload;
        },
        SetSubCategoryToAmountObjectRedux: (state, action) => {
            state.subCategoryToAmountObjectRedux = action.payload;
        },
        setPayerCountryCode: (state, action) => {
            state.payerCountryCode = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        }
    }
})

export const { userFinishedQuiz, 
               userMovedToPayment, 
               userFinishPayment, 
               setPayerNameReduxFunc, 
               setPayerEmailReduxFunc, 
               SetSubCategoryToAmountObjectRedux,
               setPayerCountryCode,
               setResult
            } = paymentSlice.actions;
export default paymentSlice.reducer;