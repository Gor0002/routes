const BaseUrl = "http://localhost:3000/coments/";
const ComentsControler = {};

ComentsControler.getList = async (comentsArr) => {
    // fetch(BaseUrl)
    console.log(comentsArr)
    let str = "?";
    comentsArr.forEach((elem, index) => {

        if (index === comentsArr.length - 1) {
            str = str + `id=${elem}`
        }
        else {
            str = str + `id=${elem}&`
        }
    });
    console.log(str);
    return fetch(`${BaseUrl}${str}`).then(res => res.json())

}

ComentsControler.postComent = async (body) =>{
    return fetch(BaseUrl,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    
    }).then(res => res.json())
}


export default ComentsControler;
