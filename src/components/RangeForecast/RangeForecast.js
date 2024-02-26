import IconWeather from "../IconWeather/IconWeather";
import classes from "./RangeForecast.module.css"

const RangeForecast = () => {
    const arr = [1,2,3,4,5,6,7]
    return (
        <div className={classes['range-forecast']}>
            <h2>Week</h2>
            <ul>
                {arr.map(item=>(
                          <li key={item}>
                          <div className={classes.day}>Monday</div>
                          <IconWeather icon="cloudy" className={classes.icon} />
                          <div className={classes.temperature}>28°/29°</div>
                      </li>
                ))}
          
            </ul>
        </div>
    )
}

export default RangeForecast;