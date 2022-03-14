import { Button, TextField } from '@mui/material';
import React from 'react'
import PeoplesComent from './peoplesComent'

export default function Coment({comentsData, sendNewComent, postData, comentsInput, comentsName, comentsMail, handleChangeComentsInput, handleChangeComentsName, handleChangeComentsMail}) {
    return (
        comentsData &&
        <div className='coments'>
            <div>{comentsData.length} комментариев</div>
            <div>
                <TextField
                    id="standard-basic"
                    label="name"
                    value={comentsName}
                    variant="standard"
                    onChange={(e) => { handleChangeComentsName(e) }}
                    sx={{ width: "30%" }}
                />
                <TextField
                    id="standard-basic"
                    label="email"
                    value={comentsMail}
                    variant="standard"
                    onChange={(e) => { handleChangeComentsMail(e) }}
                    sx={{ width: "48.5%" }}
                    style={{ marginLeft: 20 }}
                />
            </div>
            <div className="coments-form">
                <TextField
                    id="standard-basic"
                    label="hi"
                    value={comentsInput}
                    variant="standard"
                    onChange={(e) => { handleChangeComentsInput(e) }}
                    sx={{ width: "80%" }}
                />
                <Button onClick={sendNewComent} variant="contained" className='button'>create</Button>
            </div>
            <div>{postData && postData.coments !== 0 &&
                comentsData.map((elem, index) => {
                    return <PeoplesComent key={index} name={elem.name} text={elem.text} nowTime={elem.nowTime} />
                })}
            </div>
        </div>
  )
}
