import Button from '@mui/material/Button';
import React, { useEffect, useRef, useState } from 'react';
import moment from "moment";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ComentsControler from '../../controllers/coments';
import PostControler from '../../controllers/posts';
import Input from './inputes';
import Coment from './coment';

export default function PostDetails() {
    const [postData, setPostData] = useState(null);
    const [comentsData, setComentsData] = useState([]);
    const [comentsInput, setComentsInput] = useState("");
    const [comentsName, setComentsName] = useState("");
    const [comentsMail, setComentsMail] = useState("");
    const [showPut, setShowPut] = useState(false);
    const [putAuthor, setPutAuthor] = useState("");
    const [putTitle, setPutTitle] = useState("");
    let params = useParams();
    let location = useLocation()
    let navigation = useNavigate()
    const refContainer = useRef(null); //nayel anpyman
    useEffect(() => {
        PostControler.getById(params.id).then(res => {
            setPostData(res)
            if (res.coments && Array.isArray(res.coments) && res.coments.length > 0) {
                ComentsControler.getList(res.coments).then(res => setComentsData(res))
            }
        })
    }, []);
    const handleChangeComentsInput = ({ target }) => setComentsInput(target.value)
    const handleChangeComentsName = ({ target }) => setComentsName(target.value)
    const handleChangeComentsMail = ({ target }) => setComentsMail(target.value)

    const showPutPage = () => { setShowPut(!showPut) }
    const handleChangePutTitle = ({ target }) => setPutTitle(target.value)
    const handleChangePutAuthor = ({ target }) => setPutAuthor(target.value)
    if (!postData) {
        return <div>Loading...</div>
    }
    const sendPutReq = () => {
        if (!putAuthor || !putTitle) {
            alert("putAuthor is requared")
            return
        }
        const body = {
            ...postData,
            author: putAuthor,
            title: putTitle
        }
        PostControler.getPut(body, params.id).then(res => setPostData(res))
    }
    const handleDelete = () => {
        PostControler.DelById(params.id).then(res => navigation("/"))
    }
    const sendNewComent = () => {
        if (!comentsInput || !comentsName || !comentsMail) {
            return
        }
        else {
            let date = moment().format('MMMM Do YYYY, h:mm');
            const bodyForComentsControler = {
                text: comentsInput,
                name: comentsName,
                email: comentsMail,
                nowTime: date
            }
            return ComentsControler.postComent(bodyForComentsControler).then(res => {
                const bodyForPostControler = {
                    ...postData,
                    coments: [...postData.coments, res.id]
                }
                PostControler.getPut(bodyForPostControler, params.id).then(respons => {
                    setComentsData([...comentsData, res]);
                    setPostData(respons);
                    setComentsInput("");
                    setComentsName("");
                    setComentsMail("")
                })
            })

        }
    }
    return (
        <div className='list-pages'>
            <Link to="/" className='link' >
                <Button variant="contained">Home</Button>
            </Link>
            <div className='list-pages-deep'>
                <div>{postData.title}</div>
                <div>{postData.content}</div>
                <div className='img' style={{ backgroundImage: `url(${postData.photo})` }}>
                    {/* <img src={postData.photo} style={{width:100,height:100,backgroundSize:"cover"}} />    */}
                </div>
                <div>
                    <div style={{ margin: 0 }}>Post Author `  {postData.author}</div>
                    <div style={{ margin: 0 }}>Mail `  {postData.mail}</div>
                </div>
                <div>
                    <div>
                        <Button variant="contained" onClick={showPutPage}>Update</Button>
                        {showPut &&
                            <div className='update'>
                                <Input func={handleChangePutAuthor} val={putAuthor} placeholder="author" classname="input" type="text" />
                                <Input func={handleChangePutTitle} val={putTitle} placeholder="title" classname="input" type="text" />
                                <Button onClick={sendPutReq} className='input'>create</Button>
                            </div>
                        }
                    </div>
                    <div style={{ marginLeft: 5 }}><Button variant="contained" onClick={handleDelete}>Delete</Button></div>
                </div>
            </div>
            <div className="list-pages-deep" ref={refContainer} onClick={() => { console.log(refContainer.current) }}>
                <Coment 
                    comentsData={comentsData}
                    sendNewComent={sendNewComent} 
                    postData={postData}
                    comentsInput={comentsInput}
                    comentsName={comentsName}
                    comentsMail={comentsMail}
                    handleChangeComentsInput={handleChangeComentsInput}
                    handleChangeComentsName={handleChangeComentsName} 
                    handleChangeComentsMail={handleChangeComentsMail}
                />
            </div>
        </div>
    )
}
