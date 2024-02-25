
import classes from "./IconBunch.module.css"
import penguinImg from "../../../assets/penguin.png"
import cloudy from "../../../assets/cloudy.svg"

const IconBunch = () => {
    return (
        <>
            <img src={penguinImg} alt="penguin" className={classes.penguin} />
            <div className={classes.clouds}>
                <img src={cloudy} alt="cloudy" />
                <img src={cloudy} alt="cloudy" />
                <img src={cloudy} alt="cloudy" />
                <img src={cloudy} alt="cloudy" />
            </div>
        </>
    )
}

export default IconBunch;

