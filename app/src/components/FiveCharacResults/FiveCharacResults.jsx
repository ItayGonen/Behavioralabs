import React from 'react';
import './FiveCharacResults.css';
import { useSelector } from 'react-redux';
import advisorImage from '../../assets/Five-Charac/advisor.png';
import forumImage from '../../assets/Five-Charac/forum.png';
import laptopImage from '../../assets/Five-Charac/laptop.png';
import marketingImage from '../../assets/Five-Charac/marketing.png';
import trophyImage from '../../assets/Five-Charac/trophy.png';
import leadImage from '../../assets/Five-Charac/lead.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { globalStyles } from '../../styles';
import starImg from '../../assets/star.png';
import lampImg from '../../assets/lamp.png';

const FiveCharacResults = () => {

    const result = useSelector(state => state.payment.result);


  return (
    <>
    <div className='characts'>
        <div className='chrarc'>
            {result > 0 && result < 35 ? // IN WHICH GROUP YOU ARE
             <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                <img src={starImg} />
                <h4>{Math.round((result / 135) * 100)} /  {100}</h4>
                <h1>Poor Sleep Group</h1>
                <p> Users in this group have poor sleep habits and experience significant sleep difficulties. They may struggle to fall asleep, experience frequent awakenings, have chronic daytime sleepiness, and generally feel unrested. </p> 
                <div className='arrs'>
                    <div className='arr-last'>
                        <p> Lack a consistent sleep schedule, with irregular bedtimes and wake-up times. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Lack a structured bedtime routine that promotes relaxation and prepares the mind and body for sleep. </p> 
                    </div>
                    <div className='arr-last'>
                        <p>Have an unfavorable sleep environment, which may include factors such as excessive noise, uncomfortable bedding, or inadequate darkness. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Exhibit poor sleep hygiene practices, such as engaging in stimulating activities or consuming sleep-disruptive substances close to bedtime. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Experience frequent and significant sleep disturbances, including difficulties falling asleep or staying asleep throughout the night. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Face chronic daytime sleepiness and fatigue, leading to impaired functioning and a reduced quality of life. </p>
                    </div>
                </div>
            </div>
            : 
            <>
                {
                    result > 35 && result < 70 ?
                    <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                        <img src={starImg} />
                        <h4>{Math.round((result / 135) * 100)} /  {100}</h4>
                        <h1> Fair Sleep Group </h1>
                        <p> Users in this group have fair sleep habits but may experience moderate sleep difficulties and disruptions. They may have occasional difficulty falling asleep, wake up during the night, or experience some daytime sleepiness. </p>
                        <div className='arrs'>
                            <div className='arr-last'>
                                <p> Have an irregular sleep schedule with variations in bedtime and wake-up times. </p>
                            </div>
                            <div className='arr-last'>
                                <p> Lack a consistent bedtime routine that promotes relaxation and signals the body for sleep. </p> 
                            </div>
                            <div className='arr-last'>
                                <p> Face challenges in maintaining an ideal sleep environment due to factors like noise, light, or comfort issues. </p>
                            </div>
                            <div className='arr-last'>
                                <p> Exhibit some sleep hygiene issues, such as occasional electronic device use or consumption of stimulating substances close to bedtime. </p>
                            </div>
                            <div className='arr-last'>
                                <p> Experience moderate sleep disturbances or awakenings during the night, impacting sleep continuity. </p>
                            </div>
                            <div className='arr-last'>
                                <p> Encounter daytime sleepiness or fatigue, although it may not be chronic or severely impairing. </p>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        {
                            result > 70 && result < 105 ? 
                            <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                                <img src={starImg} />
                                <h4>{Math.round((result / 135) * 100)} /  {100}</h4>
                                <h1> Good Sleep Group</h1>
                                <p> Users in this group have good sleep habits and generally experience restful sleep. They may have occasional sleep difficulties or mild disruptions, but their overall sleep quality is satisfactory. </p>
                                <div className='arrs'>
                                    <div className='arr-last'>
                                        <p> Maintain a somewhat regular sleep schedule, although slight variations may occur. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Follow a moderate bedtime routine that helps promote relaxation before sleep. </p> 
                                    </div>
                                    <div className='arr-last'>
                                        <p> Create a reasonably comfortable sleep environment, but there may be minor improvements that could be made. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Practice basic sleep hygiene habits, though there might be occasional lapses. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Experience occasional sleep disturbances or awakenings during the night. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Generally wake up feeling relatively refreshed, with a decent amount of energy during the daytime. </p>
                                    </div>
                                </div>
                            </div> 
                            :
                            // 105-140
                            <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                                <img src={starImg} />
                                <h4>{Math.round((result / 135) * 100)} /  {100}</h4>
                                <h1>Excellent Sleep Group</h1>
                                <p> Users in this group exhibit excellent sleep habits and have a high quality of sleep. They experience minimal sleep difficulties and wake up feeling refreshed and well-rested.</p> 
                                <div className='arrs'>
                                    <div className='arr-last'>
                                        <p> Consistently maintain a regular sleep schedule, going to bed and waking up at consistent times. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Create a sleep-friendly environment, ensuring their sleep space is comfortable, dark, quiet, and at an optimal temperature. </p> 
                                    </div>
                                    <div className='arr-last'>
                                        <p> Practice good sleep hygiene habits, such as avoiding stimulating activities or electronic devices close to bedtime. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Experience minimal sleep disturbances and awakenings throughout the night. </p>
                                    </div>
                                    <div className='arr-last'>
                                        <p> Wake up feeling refreshed, energized, and alert during the daytime. </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </>
                }
            </>
        }
        </div>

        <div className='chrarc'>
            {result > 0 && result < 35 ? 
             <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                <img src={lampImg} />
                <h1>Advices and Tips</h1>
                <p> Advices to Improve Sleeping Habits and Quality of Life </p>
                <div className='arrs'>
                    <div className='arr-last'>
                        <p> Establish a consistent sleep schedule, prioritizing regular bedtimes and wake-up times to regulate the sleep-wake cycle. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Develop a relaxing bedtime routine that incorporates activities like reading, taking a warm bath, or practicing relaxation exercises. </p> 
                    </div>
                    <div className='arr-last'>
                        <p> Create a sleep-friendly environment by addressing factors that may disrupt sleep, such as noise, light, temperature, or uncomfortable bedding. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Implement good sleep hygiene practices consistently, including limiting screen time before bed, avoiding stimulating substances, and creating a calm and dark bedroom environment. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Seek professional help to address underlying sleep disorders or medical conditions contributing to poor sleep quality. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Explore relaxation techniques, such as guided imagery, progressive muscle relaxation, or meditation, to promote relaxation and reduce sleep difficulties. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Limit or avoid caffeine and heavy meals close to bedtime, as they can interfere with sleep onset and quality. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Consider cognitive-behavioral therapy for insomnia (CBT-I), a therapeutic approach that targets sleep-related behaviors and thoughts, to improve sleep quality and address sleep difficulties. </p>
                    </div>
                    <div className='arr-last'>
                        <p> Engage in stress management techniques, such as practicing stress-reduction exercises, seeking support, or addressing lifestyle factors contributing to stress and sleep disruptions. </p>
                    </div>

                </div>
            </div>
            : 
            <>
                {
                    result > 35 && result < 70 ?
                    <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                        <img src={lampImg} />
                        <h1>Advices and Tips</h1>
                        <p> Advices to Improve Sleeping Habits and Quality of Life </p>
                        <div className='arrs'>
                            <div className='arr-last'> Establish a consistent sleep schedule, aiming for regular bedtimes and wake-up times to regulate the body's internal clock. </div>
                            <div className='arr-last'> Create a calming bedtime routine that incorporates activities like reading, listening to relaxing music, or practicing gentle stretching. </div>
                            <div className='arr-last'> Improve your sleep environment by addressing issues such as noise, light, temperature, or bedding comfort. </div>
                            <div className='arr-last'> Practice good sleep hygiene habits consistently, including limiting screen time before bed and avoiding stimulating substances. </div>
                            <div className='arr-last'> Implement strategies to manage and reduce sleep disturbances, such as using earplugs, white noise machines, or addressing any underlying medical conditions. </div>
                            <div className='arr-last'> Address underlying causes of sleep difficulties, such as stress, anxiety, or lifestyle factors that may contribute to sleep disruptions. </div>
                            <div className='arr-last'> Consider relaxation techniques or meditation before bed to promote a state of calmness and facilitate sleep onset. </div>
                            <div className='arr-last'> Limit caffeine intake and avoid consuming heavy meals close to bedtime. </div>
                            <div className='arr-last'> Seek professional guidance if experiencing persistent sleep issues that significantly impact daily functioning and well-being. </div>
                        </div>
                    </div>
                    :
                    <>
                        {
                            result > 70 && result < 105 ? 
                            <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                                <img src={lampImg} />
                                <h1>Advices and Tips</h1>
                                <p> Advices to Improve Sleeping Habits and Quality of Life </p>
                                <div className='arrs'>
                                   <div className='arr-last'> Establish a consistent sleep schedule to reinforce a more stable sleep pattern. </div>
                                    <div className='arr-last'> Optimize your sleep environment by minimizing noise, improving bedding comfort, and adjusting room temperature to your preference. </div>
                                    <div className='arr-last'> Minimize exposure to screens and stimulating activities before bed to facilitate better sleep onset. </div>
                                    <div className='arr-last'> Practice relaxation techniques such as deep breathing, progressive muscle relaxation, or listening to calming music to enhance sleep quality. </div>
                                    <div className='arr-last'> Avoid consuming caffeine or heavy meals close to bedtime, as they can interfere with sleep. </div>
                                    <div className='arr-last'> Manage stress levels and adopt stress-reducing strategies, such as engaging in hobbies or practicing mindfulness. </div>
                                    <div className='arr-last'> Incorporate regular physical exercise into your routine, aiming for at least 30 minutes of moderate-intensity activity most days of the week. </div>
                                    <div className='arr-last'> Seek professional guidance if occasional sleep difficulties persist or impact your well-being. </div>
                                </div>
                            </div> 
                            :
                            // 105-140
                            <div className='charac-div' style={{ background: globalStyles.LoadingBeforeQuiz.first, background: `linear-gradient(90deg, ${globalStyles.LoadingBeforeQuiz.first} 0%, ${globalStyles.LoadingBeforeQuiz.second} 100%, ${globalStyles.StepsBeforeBackgroundColor.third} 100%)` }}> 
                                <img src={lampImg} />
                                <h1>Advices and Tips</h1>
                                <p> Advices to Improve Sleeping Habits and Quality of Life </p>
                                <div className='arrs'>
                                <div className='arr-last'> Maintain a consistent sleep schedule, even on weekends, to reinforce a healthy sleep-wake rhythm. </div>
                                    <div className='arr-last'> Establish a relaxing bedtime routine that includes activities like reading, gentle stretching, or taking a warm bath. </div>
                                    <div className='arr-last'> Ensure your sleep environment is conducive to quality rest by minimizing noise, light, and distractions. </div>
                                    <div className='arr-last'> Practice good sleep hygiene by avoiding caffeine, nicotine, and heavy meals close to bedtime. </div>
                                    <div className='arr-last'> Engage in regular physical exercise during the day, which can promote better sleep. </div>
                                    <div className='arr-last'> Manage stress levels effectively through techniques such as relaxation exercises, meditation, or journaling. </div>
                                    <div className='arr-last'> Seek professional help if experiencing persistent sleep issues that impact daily functioning. </div>
                                </div>
                            </div>
                        }
                    </>
                }
            </>
        }
        </div>
        </div>
    </>
    )
}

export default FiveCharacResults;