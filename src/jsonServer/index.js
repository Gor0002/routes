import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostControler from '../controllers/posts';
import Post from "./components/post"
export default function Main() {
    const [getList, setGetList] = useState(null);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    useEffect(()=>{
      PostControler.getList().then(res => setGetList(res))
    },[])
    const navigate = useNavigate();
    const handleChangeAuthorPost = ({target}) => setAuthor(target.value)
    const handleChangeTitlePost = ({target}) => setTitle(target.value)
    
    const handlePost = () =>{
      const body = {
        author,
        title
      }
      // PostControler.createPost(body).then(req => navigate(`/post/${req.id}`))
      PostControler.createPost(body).then(req => PostControler.getList().then(res => setGetList(res)))

    } 

    return (

      <>
        <div>
          <button onClick={handlePost}>create</button>
          <input
            placeholder='author'
            type='text'
            name='author'
            value={author}
            onChange={(e) => {handleChangeAuthorPost(e)}}
            className='input'
          />
          <input
            placeholder='author'
            type='text'
            name='author'
            value={title}
            onChange={(e) => {handleChangeTitlePost(e)}}
            className='input'
          />
          <div>{getList && getList.map((elem,index) => <Post key={index} elem={elem}  />)}</div>
        </div>
      </>
    )
}
