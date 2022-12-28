import React from 'react';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/Banner';
import { Skill } from './component/Skills';

const App = () => {
  return (
    <div >
      <Navbar />
      <Banner />
      <Skill />
    </div>
  )
}

export default App;