import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';


export default function WeeksTemp({sortData, handleWeeksDay}) {
  const {week} = sortData
//   console.log(week);
  const date = new Date("2022-01-26")
    
    const WhatDayOfTheWeekIsIt = (date) =>{
        switch (date) {
            case "Sun": return "Вос";
            case "Mon": return "Пон";
            case "Tue": return "Вто";
            case "Wed": return "Сре";
            case "Thu": return "Чет";
            case "Fri": return "Пят";
            case "Sat": return "Суб";
        }
    } 
    const WhatMonthIsIt = (date) =>{
        switch (date) {
            case "Jan": return "Янв";
            case "Feb": return "Фев";
        }
    } 
    const skyOrSun = (temp) =>{
        if(temp>0){
            return <FontAwesomeIcon icon={faSun} />
        }
        return <FontAwesomeIcon icon={faCloudSun} />
    } 
    return(
        <>
            {week.map((elem,index) => {
                let month = new Date(elem.date).toDateString().split("").slice(4,7).join("")
                let today = elem.date.split("").slice(8,10).join("")
                let date = new Date(elem.date).toDateString().split("").slice(0,3).join("") 
                let day = elem.parts.day.temp_avg
                let night = elem.parts.night.temp_avg
                return (
                   <div className='week-day' key= {index} onClick={() => handleWeeksDay(elem)}>

                       <div>{WhatDayOfTheWeekIsIt(date)}</div>
                       <div>{WhatMonthIsIt(month)}{today}</div>
                       <div className='week-day-icon'> {skyOrSun(day)} </div>
                       <div>днем {day}</div>
                       <div>ночью {night}</div>
                   </div> 
                )
            })}
        </>
        
    ) 
}
