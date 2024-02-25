import classes from "./App.module.css"

import RangeForecast from "./components/RangeForecast/RangeForecast";
import TodayForecast from "./components/TodayForecast/TodayForecast";
import Trips from "./components/Trips/Trips";


function App() {
  return (
    <div className={classes.app}>
      <div className={classes.left}>
        <h1><span>Weather</span> Forecast</h1>
        <Trips />
        <RangeForecast/>       
      </div>
      <TodayForecast/>
    </div>
  );
}

export default App;
