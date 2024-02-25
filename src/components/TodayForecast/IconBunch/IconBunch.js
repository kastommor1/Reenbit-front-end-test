
import classes from "./IconBunch.module.css"
import penguinImg from "../../../assets/penguin.png"
import IconWeather from "../../IconWeather/IconWeather"

const IconBunch = (props) => {
    return (
        <>
            <img src={penguinImg} alt="penguin" className={classes.penguin} />
            <div className={classes.clouds}>                
                <IconWeather theme="dark" icon={props.icon} />
                <IconWeather theme="dark" icon={props.icon} />
                <IconWeather theme="dark" icon={props.icon} />
                <IconWeather theme="dark" icon={props.icon} />                
            </div>
        </>
    )
}

export default IconBunch;

