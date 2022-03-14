import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import SpeedIcon from '@mui/icons-material/Speed';
import WidgetsIcon from '@mui/icons-material/Widgets';
import BarChartIcon from '@mui/icons-material/BarChart';

const icon = (elem) =>{
    switch (elem) {
        case "Dashboard" : return <div className='nav-icon'><SpeedIcon sx={{ fontSize: 23 }}/></div>;
        case "Charts" : return <div className='nav-icon'><WidgetsIcon sx={{ fontSize: 23 }}/></div>;
        case "Widgets" : return <div className='nav-icon'><BarChartIcon sx={{ fontSize: 23 }}/></div>;
    }
}

export default function NavBar({navigationList}) {
    if(!navigationList){return<div>Loading</div>}  
    return (
    <div className='navbar'>
        <div className='logo'># DASHMIN</div>
        <div className='nav-buttons'>
            {navigationList.map((elem, index)=>{
                return <Link to={elem.path} key={index} className='nav-button-link'>
                            <div className='nav-button'>{icon(elem.title)}{elem.title}</div>
                        </Link>
            })}
        </div>
    </div>

  )
}
