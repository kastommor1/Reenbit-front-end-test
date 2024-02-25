import forbidden from "../../assets/forbidden.svg"

const IconWeather = (props) => {
    const availableIcon = ['clear-day', 'clear-night', 'cloudy', 'fog', 'hail', 'partly-cloudy-day', 'partly-cloudy-night',
        'rain', 'rain-snow', 'rain-snow-showers-day', 'rain-snow-showers-night', 'showers-day', 'showers-night', 'sleet', 'snow', 'snow-showers-day',
        'snow-showers-night', 'thunder', 'thunder-rain', 'thunder-showers-day', 'thunder-showers-night', 'wind'];

    const isAvailableIcon = availableIcon.includes(props.weather)
    if (!isAvailableIcon) {
        return <img src={forbidden} alt="icon-weather" className={props.className} />
    }


    const theme = props.theme === 'dark' ? '1st-Set-Color-SVG-Dark' : "1st-Set-Color-SVG";
    const link = `assets/${theme}/${props.weather}.svg`;
    return (               
        <img src={link} alt="icon-weather" className={props.className} />
    )
}

export default IconWeather;