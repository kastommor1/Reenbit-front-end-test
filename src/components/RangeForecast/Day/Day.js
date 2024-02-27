import IconWeather from "../../IconWeather/IconWeather"
import classes from "./Day.module.css"

const Day = props => {
    const tripDate = new Date(props.date);    
    const dayTitle = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(tripDate);

    return (
        <li>
            <div className={classes.day}>{dayTitle}</div>
            <IconWeather icon={props.icon} className={classes.icon} />
            <div className={classes.temperature}>{props.tempMin}°/{props.tempMax}°</div>
        </li>
    )
}

export default Day;