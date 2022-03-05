const BaseUrl = "http://localhost:3000/posts/";
const PostControler = {};


PostControler.getList = async () =>{
    return fetch(BaseUrl).then(res => res.json())
}
PostControler.getById = async (id) =>{
    return fetch(`${BaseUrl}${id}`).then(res => res.json())
}
PostControler.DelById = async (id) =>{
    return fetch(`${BaseUrl}${id}`, { method: 'DELETE' })
}
PostControler.createPost = async (body) =>{
    return fetch(BaseUrl,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    }).then(res => res.json())
}
PostControler.getPut = async (body, id) =>{
    return fetch(`${BaseUrl}${id}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    }).then(res => res.json())
}

export default PostControler;


