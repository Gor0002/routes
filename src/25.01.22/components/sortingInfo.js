import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export const sortingInfo = (state) =>{
    const week = state.data.data.forecasts
    const nowTime = state.data.data.now_dt.split("").slice(11,16).join("")
    console.log(state.data.data.now_dt);
    
    const nowTimeForCompare = nowTime.split("").slice(0,2).join("")
    const date = state.data.data.now_dt.split("").slice(0,10).join("")
    const windSpeed = state.data.data.fact.wind_speed
    const prec = state.data.data.fact.prec_prob
    const pressure = state.data.data.fact.pressure_mm
    const feelsLike = state.data.data.fact.feels_like
    const condition = state.data.data.fact.condition //vichak
    const temperature = state.data.data.fact.temp
    const yesterday = state.data.data.yesterday.temp
    const locality = state.data.data.geo_object.locality.name   //erevan
    const country = state.data.data.geo_object.country.name  //Armenia
    const district = state.data.data.geo_object.district.name  //kentron 
    const day = week[0] // esor
    const hour = day.hours 
    //   hour.map(elem => console.log(elem))

    const beginRightNow = hour.filter((elem) =>{
    return JSON.parse(elem.hour) > JSON.parse(nowTimeForCompare) || elem.hour === nowTimeForCompare
    })
    .map((filteredElem,index) =>{
    return (
        <div key={index} className='hour-dives'> 
        {filteredElem.hour}:00
        <div><FontAwesomeIcon icon={faCloudSun} /></div>  
        {filteredElem.temp}              
        </div>
    )}) //himikva jamic sksac

    return {
        nowTime: nowTime,
        week: week,
        district: district,
        windSpeed: windSpeed,
        prec: prec,
        pressure: pressure,
        feelsLike: feelsLike,
        temperature: temperature,
        yesterday: yesterday,
        locality: locality,
        day: day,
        hour: hour,
        beginRightNow: beginRightNow
    }
}