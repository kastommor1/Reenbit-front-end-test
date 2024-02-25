import IconWeather from "../../IconWeather/IconWeather";
import classes from "./CurrentWeather.module.css"

const CurrenWeather = (props) => {
    return (
        <div className={classes["current-weather"]}>
            <p>Sunday</p>
            <p>
                <IconWeather
                    className={classes["icon-weather"]}
                    theme='dark'
                    icon={props.icon}
                />
                24
                <sup>°C</sup>
            </p>
            <p>Berlin</p>
        </div>
    )
}

export default CurrenWeather;