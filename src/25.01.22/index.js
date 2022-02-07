import React, { useState, useEffect } from 'react';
import FixedPage from './components/fixedPage';
import {getDataInfo} from './components/getDataInfo';
import {sortingInfo} from './components/sortingInfo'
import TodayTemp from './components/todayTemp';
import WeeksTemp from './components/weeksTemp' 

export default function Main() {
    const [state, setState] = useState(null);
    const [active, setActive] = useState({})
    useEffect(() =>{
        getDataInfo()
        .then(res => setState({data: res}))
        .catch((err) => {
          console.log(err);
        })
      },[])
      if(state === null){
        return <div>Loading...</div>
      }
      // console.log(state.data.data);
      const handleWeeksDay = (elem) =>{
        setActive(elem)
      }
      
      return(
        <div className='page'>
          <div className='today-page'><TodayTemp sortData={sortingInfo(state)}/></div>
          <div className='week-page'><WeeksTemp sortData={sortingInfo(state)}  handleWeeksDay={handleWeeksDay}/></div>
          <div className='fixed-page'><FixedPage active={active} /></div>

        </div>
        
      )}
