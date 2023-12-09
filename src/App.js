import React from 'react';
import './app.css';
import './index.css';
import { Navbar, Home, Services, Blog, About, Footer, Contact } from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
          <div className='Gradient__bg'>
          <Navbar/>
          </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

      </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
    </>
  ); 
}

export default App;
