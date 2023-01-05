//import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './Main';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import NoPage from './NoPage';

function Router() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/'  element={<Main/>}/>
   <Route path='/home' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='*' element={<NoPage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default Router
