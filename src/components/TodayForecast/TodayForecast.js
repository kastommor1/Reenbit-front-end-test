import classes from "./TodayForecast.module.css"

import Countdown from "./Countdown/Countdown";
import CurrenWeather from "./CurrentWeather/CurrentWeather";
import IconBunch from "./IconBunch/IconBunch";




const TodayForecast = () => {
    const icon = 'clear-day';
    
    return (        
        <div className={classes['today-forecast']}>          
            <CurrenWeather icon={icon} />
            <Countdown />
            <IconBunch icon={icon}/>                   
        </div>
    )
}

export default TodayForecast;