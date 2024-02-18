
import './Style.css';
import {BrowserRouter as Router,Routes,Route}from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//Components
import Header from "./components/Header";
import Mover from './components/Mover';
import Dashboard  from './components/Dashboard';
import Verycard from './components/Verycard';
import Slidercard from './components/Slidercard';
import Verycardfour from './components/Verycardfour';
import Slidersecond from './components/Slidersecond';
import Thirdcard from './components/Thirdcard';
import Girl from './components/Girl';
import Card from './components/Images/Card';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

        <Route path="/" element={<Dashboard/>} />
          <Route path="/Header" element={<Header/>} />
          <Route path="/Mover" element={<Mover/>} />
          
          <Route path="/Verycard" element={<Verycard/>} />
          <Route path="/Slidercard" element={<Slidercard/>} /> 
          <Route path="/Verycardfour" element={<Verycardfour/>}/>
          <Route path="/Slidersecond" element={<Slidersecond/>} />
          <Route path="/Thirdcard" element={<Thirdcard/>} />
          <Route path="/Girl" element={<Girl/>} />
          
        </Routes>
      </Router>
      <Card/>
    </div>
  );
}

export default App;
