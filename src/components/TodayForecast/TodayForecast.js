import classes from "./TodayForecast.module.css"

const TodayForecast = ()=>{
    return (
        <div className={classes['today-forecast']}>
            <div>
                <p>Sunday</p>
            <p>24C</p>
            <p>Berlin</p>
            </div>
            <div>
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
        </div>
    )
}

export default TodayForecast;