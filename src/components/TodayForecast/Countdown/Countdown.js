import classes from "./Countdown.module.css"

const Countdown = () => {
    return (
        <div className={classes.countdown}>
            <div>
                <p>30</p>
                <p>days</p>
            </div>
            <div>
                <p>16</p>
                <p>hours</p>
            </div>
            <div>
                <p>15</p>
                <p>minutes</p>
            </div>
            <div>
                <p>35</p>
                <p>seconds</p>
            </div>
        </div>
    )
}

export default Countdown;