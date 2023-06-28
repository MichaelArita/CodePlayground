import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Routes, Route, Outlet, Link, useLocation, useNavigate, useParams} from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Test from './Test';
import Blog from './Blog';
import About from './About';
import NoMatch from './NoMatch';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='test' element={<Test />} />
        <Route path='about' element={<About />} />
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>

  );
};


export default App;