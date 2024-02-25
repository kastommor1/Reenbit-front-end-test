import IconWeather from "../../IconWeather/IconWeather";
import classes from "./CurrentWeather.module.css"

const CurrenWeather = () => {
    return (
        <div className={classes["current-weather"]}>
            <p>Sunday</p>
            <p>
                <IconWeather
                    className={classes["icon-weather"]}
                    theme='dark'
                    weather='clear-day'
                />
                24
                <sup>°C</sup>
            </p>
            <p>Berlin</p>
        </div>
    )
}

export default CurrenWeather;