const colorPallete = {
    textColor: '#176B87',
    textColorsHomePage: '#8795a1',
    backgroundColors: '#fbf0f0', 
    gradientSecondryBackgroundColor: '#64CCC5',
    gradientThirdBackgroundColor: '#001C30', 
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
    MainTitleInTheHeader: "Discover Your Sleep Type!",
    SecondryTitleInTheHeader: "Start the Sleep Test Today and Uncover the Secrets to Restful Nights and Energized Days",
    BallsText: [
        {
            main: "Start the Sleep type assessment",
            secondry: "Make sure you have the time and place to concentrate"
        },
        {
            main: "Get your Sleep type assessment results",
            secondry: "You will understand how is your sleeping in compare to rest of the people"
        },
        {
            main: "Improve and grow!",
            secondry: "Decide what you would like to work on to improve and attain more joy in life!"
        }
    ],
    AnimationsSection: [
        {
            main: "Optimization of Sleep",
            secondry: "Understanding one's sleep patterns and addressing any sleep-related concerns can lead to optimized sleep performance. Improved sleep quality and duration can enhance overall well-being, cognitive function, mood, and productivity throughout the day."
        },
        {
            main: "Enhanced Quality of Life",
            secondry: "By gaining insights into their sleep habits and making positive changes, individuals can experience an enhanced quality of life. Improved sleep can lead to increased energy levels, improved concentration, better mood regulation, and overall better physical and mental performance."
        }
    ],
    CounterData: [
        {
            "id": "1",
            "label": "Tests Taken",
            "number": "176,000",
            "duration": "2"
        },
        {
            "id": "2",
            "label": "Sleeping Types",
            "number": "25",
            "duration": "2"
        },
        {
            "id": "3",
            "label": "Experts",
            "number": "3",
            "duration": "2"
        }
    ],
    StepsBeforeStart: [
        {
            id: "1",
            title: "Give Yourself a break",
            para: "In Order to get the most accurate results, find a place where there is no background noise."
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
    ],
    LinkToPaymentBasicPackage: "https://store.payproglobal.com/checkout?products[1][id]=85055&page-template=17285&use-test-mode=true&secret-key=!yqRsYG0-0" ,
    LinkToPaymentAdvancedPackage: "https://store.payproglobal.com/checkout?products[1][id]=85170&page-template=17285&use-test-mode=true&secret-key=!yqRsYG0-0",
    FirstTitlePrePaymentPage: "Find Out",
    BoldTitlePrePaymentPage: "Your Sleeping Type Now!",
    DescriptionToResultsTitle: "Congratulations! You have made the first step to improve your sleeping!",
    DescriptionToTheOurReportsTitle: "Uncover the Secrets to Restful Nights and Energized Days",
    FirstReportPackageName: "Basic Sleep Type",
    FirstReportPrice: "7.99$",
    FirstReportFeatures: ["Analayzed sleeping characters", "Essentials Tips to improve your sleeping habits"],
    SecondReportPackageName: "Advanced Sleep Type",
    SecondReportPrice: "9.99$",
    SecondReportFeatures: ["Analayzed sleeping characters", "Essentials Tips to improve your sleeping habits", "Powerful Ways to Optimize Your Sleeping Performance"],
    PercentagesOfPeopleDecidedToViewTheirFullReport: "78% of people in this page has chosen to view their full report",
    FirstQuoteName: "Sarah and Barney",
    FirstQuote: "The sleeping test changed our life. Now we wake up refreshed and ready to conquer the day!",
    FirstQuoteTakenTime: "21 minutes ago",
    SecondQuoteName: "John",
    SecondQuote: "Taking the test made me realize the impact of sleep on my well-being. Now I feel like a brand-new person",
    SecondQuoteTakenTime: "2 days ago",
    ThirdQuoteName: "Bob",
    ThirdQuote: "The sleeping test opened my eyes to the importance of sleep. I can't believe the positive difference it has made in my life!",
    ThirdQuoteTakenTime: "1 week ago",
    QuestionsAndAnswers: [
        {
            id:1,
            question: "What is a sleep test?",
            answer: "A sleep test is a questionnaire-based assessment designed to evaluate your sleep habits and patterns. It consists of multiple-choice questions related to various aspects of your sleep, such as sleep duration, sleep quality, bedtime routines, and sleep disturbances."
        }, 
        {
            id:2,
            question: "Why take a sleep test",
            answer: "Taking a sleep test can provide valuable insights into your sleep habits and help identify any potential sleep issues or areas for improvement. It can assist in understanding your sleep patterns, identifying factors that may be affecting your sleep quality, and guiding you towards adopting healthier sleep practices."
        },
        {
            id:3,
            question: "What are the results made for?",
            answer: "The results of the sleep test are used to categorize individuals into different sleep types or groups based on their sleep habits and patterns. These categories help provide a framework for understanding sleep quality and identifying areas for improvement. The results can offer personalized recommendations and advice tailored to your specific sleep type to enhance your sleep quality and overall well-being."
        },
        {
            id:4,
            question: "How is my sleep type established?",
            answer: "Your sleep type is established based on your responses to the sleep test questionnaire. The questionnaire covers various aspects of your sleep habits, including sleep duration, bedtime routines, sleep disturbances, and daytime sleepiness. By analyzing your answers, the sleep test assigns you to one of the predetermined sleep types based on the established scoring system."
        }, 
        {
            id:5,
            question: "Which are the best sleep types?",
            answer: "In the context of the sleep test, the 'best' sleep types refer to the categories that indicate healthier sleep habits and better sleep quality. The 'Excellent Sleep' and 'Good Sleep' categories typically represent individuals with commendable sleep habits and high-quality sleep. These sleep types often experience minimal sleep disturbances, wake up feeling refreshed, and have fewer daytime sleepiness issues. It's important to note that sleep is a highly individualized experience, and what works best for one person may not necessarily be the same for another. Each sleep type has its unique characteristics and associated advice to help individuals improve their sleep habits and overall quality of sleep."
        }
    ],
    LoadingSentences: ["Analayzing Your Sleeping Habits...", "Processing Your Answers..."],
    domain: "http://sleep.behavioralabs.com"
}






