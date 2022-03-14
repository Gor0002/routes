import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppController from '../../controlers/app'
import WidgetList from '../../containers/widgetList'



export default function Dashboard() {
  useEffect(()=>{
    AppController.GetDashboardsList()
  },[])
  const dashboardList = useSelector((state)=>{
    return state.app.dashboardList
  })
  console.log(dashboardList)
  return (
    <div>
      <WidgetList dashboardList={dashboardList}/>
    </div>
  )
}
