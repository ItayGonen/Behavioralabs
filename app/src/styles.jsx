const colorPallete = {
    textColor: '#79E0EE',
    textColorsHomePage: '#8795a1',
    backgroundColors: '#D0F5BE', 
    gradientSecondryBackgroundColor: '#98EECC',
    gradientThirdBackgroundColor: '#E1AEFF', 
}

export const globalStyles = { 
    LabsColorInLogo: colorPallete.textColor,
    ButtonsHeaderColor: colorPallete.textColor,
    BallsColor: colorPallete.textColor,
    CountersColor: colorPallete.textColor,
    NavBarBackgroundColor: colorPallete.backgroundColors,
    HeaderBackgroundColor: colorPallete.backgroundColors,
    MainTitleInTheHeader: colorPallete.textColor,
    TextTagsInHomePage: colorPallete.textColorsHomePage,
    StepsBeforeBackgroundColor: {
        first: colorPallete.gradientThirdBackgroundColor,
        second: colorPallete.gradientSecondryBackgroundColor,
        third: colorPallete.textColor
    }, 
    LoadingBeforeQuiz: {
        first: colorPallete.gradientThirdBackgroundColor,
        second: colorPallete.gradientSecondryBackgroundColor,
        third: colorPallete.textColor
    }, 
    ProgressBarColor: 'grey',
    ChapterColors: colorPallete.textColor,
    QuizBackgroundAbobeScreen: {
        first: colorPallete.gradientThirdBackgroundColor,
        second: colorPallete.gradientSecondryBackgroundColor,
    },
    FaqBackgroundColor: colorPallete.backgroundColors, 
    HoverFaqQuestions: colorPallete.textColor,
    StarsColor: colorPallete.textColor,
    TermsOfServicesBackgroundColor: colorPallete.backgroundColors
}



export const globalTexts = {
    MainTitleInTheHeader: "Discover your true self!",
    SecondryTitleInTheHeader: "Figure out how to improve yourself and become more successful in life",
    BallsText: [
        {
            main: "Start the personality test",
            secondry: "Make sure you have the time and place to concentrate"
        },
        {
            main: "Get your personalized results",
            secondry: "This will include your strongest characteristics according to the Big Five model"
        },
        {
            main: "Improve and grow!",
            secondry: "Decide what you would like to work on to improve and attain more joy in life!"
        }
    ],
    AnimationsSection: [
        {
            main: "Your information is private",
            secondry: "We will never use your answers for anything but calculating your assessment results"
        },
        {
            main: "Get insights that matter",
            secondry: "As we all wish to improve something in our professional or personal life, this provides you the first step to do so!"
        }
    ],
    CounterData: [
        {
            "id": "1",
            "label": "Tests Taken",
            "number": "250,000",
            "duration": "2"
        },
        {
            "id": "2",
            "label": "Personality Types",
            "number": "125",
            "duration": "2"
        },
        {
            "id": "3",
            "label": "Experts",
            "number": "5",
            "duration": "2"
        }
    ],
    StepsBeforeStart: [
        {
            id: "1",
            title: "Give Yourself a break",
            para: "In Order to get the most accurate definite, find a place where there is no background noise."
        }, 
        {
            id: "2",
            title: "Be honest",
            para: "Don't Try to impress someone with your answers, nobody will see them."
        }, 
        {
            id: "3",
            title: "Look into yourself",
            para: "Honesty is critical, don't be right - be honest."
        },
        {
            id: "4",
            title: "Hi",
            para: "Hi"
        },
        {
            id: "5",
            title: "Hi",
            para: "Hi"
        },
        {
            id: "6",
            title: "Hi",
            para: "Hi"
        },
        {
            id: "7",
            title: "Yoav Gonen",
            para: "Yoav Gonen Yoav Gonen Yoav Gonen "
        }
    ],
    LinkToPayment: "https://store.payproglobal.com/checkout?products[1][id]=85055&page-template=17206&use-test-mode=true&secret-key=!yqRsYG0-0" ,
    domain: "http://sleep.behavioralabs.com"
}






