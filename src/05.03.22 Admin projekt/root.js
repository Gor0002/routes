import React, {useEffect} from 'react'
import Home from './pages'
import AppController from './controlers/app'
import {Provider} from 'react-redux';
import store from './store'; 

export default function Root() {
    useEffect(()=>{
        AppController.GetNavigation()
    },[])
    
  return (
      <Provider store={store}>
          <Home />
        {/* <div>Home</div> */}
      </Provider>
  )
}