import Countdown from "./Countdown/Countdown";
import CurrenWeather from "./CurrentWeather/CurrentWeather";
import classes from "./TodayForecast.module.css"

const TodayForecast = () => {
    return (
        <div className={classes['today-forecast']}>
            <CurrenWeather />
            <Countdown />
        </div>
    )
}

export default TodayForecast;