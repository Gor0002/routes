import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faWeight } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export default function TodayTemp({sortData}) {
    const {nowTime,district,windSpeed,prec,
            pressure,feelsLike,temperature,yesterday,
            locality,beginRightNow} = sortData
  return(
    <>
        <div className='today-grafik'>
            {/* texanqi div */}
            <div className='location'>
                <div>  
                <div className='loc-dives'>{district} ,{locality}</div>
                <div>Сейчас {nowTime} 18:14. Вчера в это время {yesterday}</div>
                </div>
                <div className='loc-dives-icon'>
                <FontAwesomeIcon icon={faLocationArrow} />
                </div>
            </div>
            {/* astichani div */}
            <div className='temp'>
                <div className='temp-div'>
                <div>{temperature}</div>
                <div><FontAwesomeIcon icon={faCloudSun} /></div>                
                </div>
                <div className='feels-like'>
                    <div style={{height:"10px"}}>  </div>
                    <div>
                    Облачно с прояснениями 
                    {/* {condition} */}
                    </div>
                    <div>Ощущается как {feelsLike}</div>
                </div>
                <div className='wind'>
                <div className='wind-div'>
                    <div className='wind-div-child'><FontAwesomeIcon icon={faWind} /></div>
                    {windSpeed} м/с, В
                </div>
                <div className='wind-div'>
                    <div className='wind-div-child'><FontAwesomeIcon icon={faTint} /></div>
                    {prec}%
                </div>
                <div className='wind-div'>
                    <div className='wind-div-child'><FontAwesomeIcon icon={faWeight} /></div>
                    {pressure}
                </div>
                </div>
            </div>
            {/* 7 jamva jermastichani div */}
            <div className='hours'>
                {beginRightNow}
            </div>
        </div>
        {/* <img src="/images/sky.jpg"></img> */}
        {/* {JSON.stringify(state.data.data,null,2)} */}
    </>  
    )
}
