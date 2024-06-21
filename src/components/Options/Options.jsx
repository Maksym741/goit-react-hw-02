import css from "./Options.module.css"
export default function Options({updateFeedback, totalFeedback, resetFeedback}){
    
    return(
        <div className={css.container}>
            <button
            onClick={() => updateFeedback("good")} 
            className={css.btn}
            >Good
            </button>

            <button
            onClick={() => updateFeedback("neutral")} 
            className={css.btn}
            >Neutral
            </button>

            <button
            onClick={() => updateFeedback("bad")} 
            className={css.btn}
            >Bad
            </button>

            {totalFeedback > 0 && (
            <button 
            onClick={resetFeedback}
            className={css.btn}
            >Reset
            </button>
            )}
        </div>
    )
}



