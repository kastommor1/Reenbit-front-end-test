import classes from "./Trips.module.css"
import PoltavaImg from "../../assets/City-Suit-Small/Poltava.jpg"
import BarcelonaImg from "../../assets/City-Suit-Small/Barcelona.jpg"
import LondonImg from "../../assets/City-Suit-Small/London.jpg"
import { useContext } from "react"
import TripsContext from "../../store/trips-context"

const Trips = () => {
    const tripsCtx = useContext(TripsContext);
    console.log(tripsCtx.trips);
    tripsCtx.addTrip({id: 5})

    return (
        <div className={classes.trips}>
            <input type="search" placeholder="Search your trip" />
            <ul>
                <li className={classes.add}>
                    <div>
                       <span>+ Add trip</span>                        
                    </div>                    
                </li>
                <li className={classes.active}>
                    <div className={classes.photo}>
                        <img src={PoltavaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Poltava</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                <li>
                    <div className={classes.photo}>
                        <img src={LondonImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>London</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                <li>
                    <div className={classes.photo}>
                        <img src={BarcelonaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Barcelona</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                <li>
                    <div className={classes.photo}>
                        <img src={PoltavaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Poltava</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                <li>
                    <div className={classes.photo}>
                        <img src={PoltavaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Poltava</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                <li>
                    <div className={classes.photo}>
                        <img src={PoltavaImg} alt="" />
                    </div>
                    <div className={classes.description}>
                        <div className={classes.city}>Poltava</div>
                        <div className={classes.date}>14.07.2023-15.07.2023</div>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Trips;