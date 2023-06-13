import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Test from './Test';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='about' element={<About />} />
      <Route path='test' element={<Test />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App;