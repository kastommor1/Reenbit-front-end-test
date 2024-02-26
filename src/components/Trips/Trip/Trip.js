import classes from "./Trip.module.css"
import PoltavaImg from "../../../assets/City-Suit-Small/Poltava.jpg"
import BarcelonaImg from "../../../assets/City-Suit-Small/Barcelona.jpg"
import LondonImg from "../../../assets/City-Suit-Small/London.jpg"

const Trip = props => {
    return (
        <li className={classes.active}>
        <div className={classes.photo}>
            <img src={PoltavaImg} alt="" />
        </div>
        <div className={classes.description}>
            <div className={classes.city}>Poltava</div>
            <div className={classes.date}>14.07.2023-15.07.2023</div>
        </div>
    </li>
    )
}

export default Trip;