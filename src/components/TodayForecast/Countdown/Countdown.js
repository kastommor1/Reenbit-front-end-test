import classes from "./Countdown.module.css"

const Countdown = () => {
    return (
        <div className={classes.countdown}>
            <div className={classes.column}>
                <p>30</p>
                <p>days</p>
            </div>
            <div className={classes.column}>
                <p>16</p>
                <p>hours</p>
            </div>
            <div className={classes.column}>
                <p>15</p>
                <p>minutes</p>
            </div>
            <div className={classes.column}>
                <p>35</p>
                <p>seconds</p>
            </div>
        </div>
    )
}

export default Countdown;