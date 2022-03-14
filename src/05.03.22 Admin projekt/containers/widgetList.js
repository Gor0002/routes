import React from 'react'
import Widget from '../components/widget'
export default function WidgetList({dashboardList}) {
  return (
    <div>
        {
            dashboardList && dashboardList.map((elem,index)=>{
                return <Widget {...elem} key={index}/>
              })
        }
    </div>
  )
}
