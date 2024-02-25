import classes from "./TodayForecast.module.css"

import Countdown from "./Countdown/Countdown";
import CurrenWeather from "./CurrentWeather/CurrentWeather";
import IconBunch from "./IconBunch/IconBunch";




const TodayForecast = () => {
    return (        
        <div className={classes['today-forecast']}>          
            <CurrenWeather />
            <Countdown />
            <IconBunch/>                   
        </div>
    )
}

export default TodayForecast;