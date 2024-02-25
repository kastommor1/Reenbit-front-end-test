import clearDayDark from "../../assets/1st-Set-Color-SVG-Dark/clear-day.svg"

const IconWeather = (props)=>{
    // const link =  require('../../assets/1st-Set-Color-SVG-Dark/clear-day.svg');

    return (
        <img src={clearDayDark} alt="icon-weather" {...props} />
        // <img src={link} alt="icon-weather" {...props} />
    )
}

export default IconWeather;