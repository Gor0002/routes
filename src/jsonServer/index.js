import React, { useEffect, useState } from 'react';
import Post from "./components/post"; 
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import PostControler from '../controllers/posts';
import { Link } from 'react-router-dom';

export default function Main() {
    const [getList, setGetList] = useState(null);
    let nav = useNavigate();
    useEffect(()=>{
      PostControler.getList().then(res => setGetList(res))
    },[])
    const handleClick = () => nav("/")
    return (
      <>
        <div className="header">
          <Button variant="contained" onClick={handleClick}>Home</Button>
        </div> 
        <div className='home'>
          <div className="linkes">
            {getList && getList.map((elem,index) => <Post key={index} elem={elem}  />)}
            <Link to="/addNewPost"><Button variant="contained">Add new post</Button></Link>
            
          </div>
        </div>
      </>
    )
}
