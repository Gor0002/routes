import React, { useEffect, useState } from 'react';
import PostControler from '../controllers/posts';
// import Post from "./components/post"



export default function Main() {
    //get
    const [getList, setGetList] = useState(null);
    // const sendGetReq = () => PostControler.getList().then(res => setGetList(res))
    
    useEffect(()=>{
      PostControler.getList().then(res => setGetList(res))
    },[])
    
    //post

    const [showPost, setShowPost] = useState(false);
      const [author, setAuthor] = useState("");    
      const [title, setTitle] = useState("");    
    const handleChangeTitle = ({target}) => setTitle(target.value)
    const handleChangeAuthor = ({target}) => setAuthor(target.value)
    const showPostPage = () => setShowPost(!showPost)
    const postBody = {
      author: author,
      title: title
    }
    const sendPostReq = () => PostControler.getPost(postBody).then(res => console.log(res))
    //Put
    const [showPut, setShowPut] = useState(false);
      const [putAuthor, setPutAuthor] = useState("");    
      const [putTitle, setPutTitle] = useState("");    
      const [putId, setPutId] = useState(0)
    const handleChangePutTitle = ({target}) => setPutTitle(target.value)
    const handleChangePutAuthor = ({target}) => setPutAuthor(target.value)
    const handleChangePutId = ({target}) => setPutId(target.value)
    const showPutPage = () => setShowPut(!showPut)
    const putBody = {
      putAuthor: putAuthor,
      putTitle: putTitle
    }
    const sendPutReq = () => PostControler.getPut(putBody,putId)
    //Del 
    const [showDelete, setShowDelete] = useState(false);
      const [delId, setDelId] = useState(0)
      const handleChangeId = ({target}) => setDelId(target.value)
    const showDeletePage = () => setShowDelete(!showDelete)
    const sendDelReq = () => PostControler.DelById(delId)

    

    return (
      <>
        <div>
          <button onClick={showPostPage}>post</button>
            {showPost &&
              <div>  
                <input 
                  type="text"
                  value = {author} 
                  onChange={(e) => handleChangeAuthor(e)}
                  placeholder = "author"
                /> 
                <input 
                  type="text"
                  value = {title} 
                  onChange={(e) => handleChangeTitle(e)}
                  placeholder = "title"
                />
                <button onClick={sendPostReq}>create</button>
              </div>   
            }
        </div>
        <div>
          <button onClick={showPutPage}>put</button>
              {showPut &&
                <div>  
                  <input 
                    type="text"
                    value = {putAuthor} 
                    onChange={(e) => handleChangePutAuthor(e)}
                    placeholder = "author"
                  /> 
                  <input 
                    type="text"
                    value = {putTitle} 
                    onChange={(e) => handleChangePutTitle(e)}
                    placeholder = "title"
                  />
                  <input 
                    type="number"
                    value = {putId} 
                    onChange={(e) => handleChangePutId(e)}
                    placeholder = "write id"
                 /> 
                  <button onClick={sendPutReq}>change</button>
                </div>   
              }
        </div>
        <div>
          <button onClick={showDeletePage}>delete</button>
            {showDelete &&
            <div>
              <input 
                type="number"
                value = {delId} 
                onChange={(e) => handleChangeId(e)}
                placeholder = "write id"
              /> 
              <button onClick={sendDelReq}>Delete</button>
            </div>
            }
        </div>
      </>
    )
}











    // useEffect(() =>{
    //     PostControler.getPostList().then(res => setState(res)) 
    // },[])
    // if(state === null){
    //   return <div>loading...</div>
    // }
