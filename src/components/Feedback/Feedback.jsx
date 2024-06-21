import css from "./Feedback.module.css"
export default function Feedback({feedback, totalFeedback, positiveFeedback})
{
    return(
        <div className={css.info}>
            <ul>
                <li>Good: {feedback.good}</li>
                <li>Neutral: {feedback.neutral}</li>
                <li>Bad: {feedback.bad}</li>
                <li>Total: {totalFeedback}</li>
                <li>Positive: {positiveFeedback}%</li>
            </ul>
        </div>
    )
}