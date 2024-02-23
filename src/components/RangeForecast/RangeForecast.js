import classes from "./RangeForecast.module.css"

const RangeForecast = ()=>{
    return(
        <div className={classes['range-forecast']}>
            <h2>Week</h2>
            <ul>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
            </ul>
        </div>
    )
}

export default RangeForecast;