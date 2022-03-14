import React from 'react'
import {useSelector} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Charts from './charts'
import Dashboard from './dashboard'
import Widgets from './widgets'
import NavBar from './navbar/navbar'

const routingEnum = {
    "DASHBOARD": Dashboard,
    "WIDGETS": Widgets,
    "CHARTS": Charts
}

export default function Home() {
    const navigationList = useSelector((state)=>state.app.navigationList)
    console.log(navigationList)
    return (
        <BrowserRouter>
        <div style={{display:"flex"}}>
            <NavBar navigationList={navigationList}/>

            <Routes>
            {navigationList && navigationList.map((elem,index)=>{
                const Comp = routingEnum[elem.component]
                return <Route path={elem.path} element={<Comp />}  key={index}/> 
            })}    
                {/* <Route path='/' element={<Dashboard/>} />
                <Route path='/charts' element={<Charts />}/>
                <Route path='/widgets' element={<Widgets/>} />
                <Route path='*' element={<Widgets/>} /> */}
            </Routes>
        </div>
        
        </BrowserRouter>
    // <div>Home</div>
  )
}

// <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element ={<Main />} />
    //     <Route path="/addNewPost" element ={<AddNewPost />} />
    //     <Route path="/post/:id" element ={<PostDetails />} />
    //     <Route path="*" element={<NotFaund />} />
    //     {/* <Route path="*" element={<Main />} /> */}
    //   </Routes>
    // </BrowserRouter>