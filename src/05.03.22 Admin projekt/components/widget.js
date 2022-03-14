import React from 'react'
import { iconsEnum } from "../enums"


export default function Widget({title, currency, value, icon}) {    
    const Icon = iconsEnum[icon]
    return (
    <div>
        <Icon />
        <h3>{title}</h3>
        <p>{currency}{value}</p>
    </div>
  )
}
