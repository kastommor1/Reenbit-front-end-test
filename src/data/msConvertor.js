export const dateConvertor = (date) => {    
    const year = date.getFullYear();    
    const month = (date.getMonth() + 1).toString().padStart(2, '0');   
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export const getTomorrowDate = () => {
    let today = new Date(); 
    let tomorrow = new Date(today); 
    tomorrow.setDate(today.getDate() + 1); 
    return tomorrow;
}


const msConvertor = (milliseconds) => {        
    const msPerSecond = 1000;
    const msPerMinute = 60 * msPerSecond;
    const msPerHour = 60 * msPerMinute;
    const msPerDay = 24 * msPerHour;    
   
    let days = Math.floor(milliseconds / msPerDay);
    milliseconds %= msPerDay;

    let hours = Math.floor(milliseconds / msPerHour);
    milliseconds %= msPerHour;

    let minutes = Math.floor(milliseconds / msPerMinute);
    milliseconds %= msPerMinute;

    let seconds = Math.floor(milliseconds / msPerSecond);    
    
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

export default msConvertor;