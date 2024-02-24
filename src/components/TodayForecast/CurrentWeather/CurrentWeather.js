import classes from "./CurrentWeather.module.css"

const CurrenWeather = () => {
    return (
        <div className={classes["current-weather"]}>
            <p>Sunday</p>
            <p>24C</p>
            <p>Berlin</p>
        </div>
    )
}

export default CurrenWeather;