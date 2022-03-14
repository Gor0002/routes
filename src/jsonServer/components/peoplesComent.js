import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function PeoplesComent({name,text,nowTime}) {
    return (
        <div className="comment-persons">
            <div className='comment-persons-person-field'>
                <div><AccountCircleIcon sx={{ fontSize: 50 }} /></div>
                <div className="comment-persons-name-field">
                    <div>{name}</div>
                    <div>{nowTime}</div>
                </div>
            </div>
            <div>{text}</div>
        </div>
    )
}
