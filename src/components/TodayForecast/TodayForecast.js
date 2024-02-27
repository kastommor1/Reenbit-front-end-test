import classes from "./TodayForecast.module.css"

import Countdown from "./Countdown/Countdown";
import CurrenWeather from "./CurrentWeather/CurrentWeather";
import IconBunch from "./IconBunch/IconBunch";
import { useState } from "react";




const TodayForecast = () => {
    const [icon, setIcon ] = useState('cloudy');    
    
    return (        
        <div className={classes['today-forecast']}>          
            <CurrenWeather setIcon={setIcon} />
            <Countdown />
            <IconBunch icon={icon}/>                   
        </div>
    )
}

export default TodayForecast;