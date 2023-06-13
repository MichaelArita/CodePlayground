import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Test from './Test';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path='home' element={<Home />} />
        <Route path='test' element={<Test />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App;