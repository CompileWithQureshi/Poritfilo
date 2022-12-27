import React from 'react';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './component/Banner';

const App = () => {
  return (
    <div >
      <Navbar />
      <Banner />
    </div>
  )
}

export default App;