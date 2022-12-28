import React from 'react';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/Banner';
import { Skill } from './component/Skills';
import { Project } from './component/Project';

const App = () => {
  return (
    <div >
      <Navbar />
      <Banner />
      <Skill />
      <Project />
    </div>
  )
}

export default App;