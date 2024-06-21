import css from "./App.module.css"
import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"
import { useEffect, useState } from "react"
import Notification from "../Notification/Notification"

export default function App() {
    const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });


    useEffect(()=>{
        const storedFeedback = localStorage.getItem("feedback");
        if(storedFeedback){
        setFeedback(JSON.parse(storedFeedback));
        }
    },[]);

    useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback))
    },[feedback])

    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback=>({
            ...prevFeedback,
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
    };

    const resetFeedback = () => {
        setFeedback({good: 0,neutral: 0, bad: 0});
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;


    return(
        <div className={css.container}>
            <Description />
            <Options updateFeedback={updateFeedback} 
                resetFeedback={resetFeedback} 
                totalFeedback={totalFeedback}
                positiveFeedback={positiveFeedback}
                />
            {totalFeedback > 0 ? 
                (<Feedback 
                    feedback={feedback}
                    totalFeedback={totalFeedback}
                    positiveFeedback={positiveFeedback}
                    />) : 
                (<Notification message="No feedback yet" />)} 
        </div>
    )
}



