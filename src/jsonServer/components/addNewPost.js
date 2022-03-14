import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostControler from '../../controllers/posts';
import Input, { BeNotHtmlTag, capitalize, upToFiftySymbol, BeNotHttpUrl } from './inputes';

export default function AddNewPost() {
  let nav = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const [author, setAuthor] = useState("");
  const [mail, setMail] = useState("");
  const [file, setFile] = useState("");
  const handleChangeAuthorPost = ({ target }) => setAuthor(target.value)
  const handleChangeTitlePost = ({ target }) => setTitle(target.value)
  const handleChangeContent = ({ target }) => setContent(target.value)
  const handleChangeMail = ({ target }) => setMail(target.value)
  const handleChangeUrl = ({ target }) => setPhoto(target.value)
  const handleChangeFile = ({ target }) => setFile(target.value)
  const handleClick = () => nav("/")
  const handlePost = () => {
    if (!title || !content || !photo || !author || !mail || !capitalize(title) || !upToFiftySymbol(title) || !BeNotHtmlTag(content) || !BeNotHttpUrl(photo)) {
      return
    }
    else {
      const body = {
        title,
        content,
        photo,
        author,
        mail,
        coments: [],
        file
      }
      // PostControler.createPost(body).then(req => nav(`/post/${req.id}`))
      PostControler.createPost(body).then(req => nav("/"))
    }
  }
  return (
    <>
      <div className="header">
        <Button variant="contained" onClick={handleClick}>Home</Button>
      </div>
      <div className="add-block">
        <div className="create">
            <span>
              {!capitalize(title) && "write capital letter and up to 50 simbol"}
              {!upToFiftySymbol(title) && "write capital letter and up to 50 simbol"}
            </span>
          <Input func={handleChangeTitlePost} val={title} placeholder="title" classname={capitalize(title) ? "input-right" : "input-error"} type="text" />
            <span>{!BeNotHtmlTag(content) && "dont write html tags"}</span>
          <Input func={handleChangeContent} val={content} placeholder="content" classname={BeNotHtmlTag(content) ? "input-right" : "input-error"} type="text" />
            <span>{!BeNotHttpUrl(photo) && "pls write url https"}</span>
          <Input func={handleChangeUrl} val={photo} placeholder="url" classname={photo && BeNotHttpUrl(photo) ? "input-right" : "input-error"} type="url" />
            <span>{!capitalize(author) && "write capital letter and up to 50 simbol"}</span>
          <Input func={handleChangeAuthorPost} val={author} placeholder="author" classname={capitalize(author) ? "input-right" : "input-error"} type="text" />
          <Input func={handleChangeMail} val={mail} placeholder="mail" classname="input" type="email" />
          {/* <Input func={handleChangeFile} val={file} placeholder="file" classname="input" type="file" /> */}
            
            <Button variant="contained" onClick={handlePost}>Add</Button>
        </div>
      </div>
    </>
  )
}
