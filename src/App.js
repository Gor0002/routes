import './App.css';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import Counter from './components';
// import Main from './25.01.22'
import Main from './jsonServer/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetails from './jsonServer/components/postDetails';
import NotFaund from './jsonServer/components/notFaund';
function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <Counter />
    //   </div>
    // </Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Main />} />
        <Route path="/post/:id" element ={<PostDetails />} />
        <Route path="*" element={<NotFaund />} />
        {/* <Route path="*" element={<Main />} /> */}

      </Routes>
    </BrowserRouter>

  )
}

export default App;
