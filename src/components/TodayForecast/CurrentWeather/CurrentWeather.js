import IconWeather from "../../IconWeather/IconWeather";
import classes from "./CurrentWeather.module.css"

const CurrenWeather = (props) => {
    return (
        <div className={classes["current-weather"]}>
            <div className={classes.day}>Sunday</div>
            <div className={classes.temperature}>
                <IconWeather
                    className={classes["icon-weather"]}
                    theme='dark'
                    icon={props.icon}
                />
                24
                <sup>°C</sup>
            </div>
            <div className={classes.city}>Berlin</div>
        </div>
    )
}

export default CurrenWeather;