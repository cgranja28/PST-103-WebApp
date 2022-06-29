import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import Show from './components/ShowEstudiante'
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
     <Navigation/>
     <Routes>
       <Route path="/estudiantes" element={<Show/>} />
       <Route path="/profesores" element={<div>Lista de Profesores</div>} />
      </Routes>
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
}

export default App;


