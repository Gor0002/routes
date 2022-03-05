import React from 'react'
import {useSelector} from 'react-redux'

export default function Home() {
    const navigationList = useSelector((state)=>{
        return state.app.navigationList
    })
    console.log(navigationList)
    return (
    <div>Home</div>
  )
}

