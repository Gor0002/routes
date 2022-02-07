import React, { useEffect, useState } from 'react';

import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import PostControler from '../../controllers/posts';
export default function PostDetails() {
    const [postData, setPostData] = useState(null);
    let params = useParams();
    useEffect(() =>{
        PostControler.getById(params.id).then(res => setPostData(res))
    },[]) ;

    let location = useLocation()
    console.log(location);
    let navigation = useNavigate()
    console.log(navigation);


    //update
    const [showPut,setShowPut] = useState(false);
    const [putAuthor, setPutAuthor] = useState("");    
    const [putTitle, setPutTitle] = useState("");    

    const showPutPage = () => {setShowPut(!showPut)}
    const handleChangePutTitle = ({target}) => setPutTitle(target.value)
    const handleChangePutAuthor = ({target}) => setPutAuthor(target.value)
    const body = {
        id:1,
        author: putAuthor,
        title: putTitle
    }
    
    if(!postData){
        return <div>Loading...</div>
    }
    const sendPutReq = () => PostControler.getPut(body,params.id).then(res => setPostData(res))
    const handleDelete = () => {
        PostControler.DelById(params.id).then(res => navigation("/"))
    }
    return (
    <div>
        <Link to="/" className='link' style={{cursor:"pointer"}}> Home</Link> 
        <div>
                <div onClick={showPutPage} style={{cursor:"pointer"}}>update</div>
                {showPut && 
                <div className='update'>
                    <input
                        placeholder='author'
                        type='text'
                        name='author'
                        value={putAuthor}
                        onChange={(e) => {handleChangePutAuthor(e)}}
                        className='input'
                    />
                    <input
                        placeholder='title'
                        name='title'
                        value={putTitle}
                        type='text'
                        onChange={(e) => {handleChangePutTitle(e)}}
                        className='input'

                    />
                    <button onClick={sendPutReq} className='input' >update</button>
                </div>
                }
        </div>
        <button onClick={handleDelete}>Delete</button>
        <div className='list-pages'>
            <div>{postData.id}</div>
            <div>{postData.title}</div>
            <div>{postData.author}</div>
            
        </div>
    </div>    
    )
}
