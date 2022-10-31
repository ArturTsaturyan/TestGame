import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./pages/Game/Game";
import Games from "./pages/Games/Games";
import './App.css';

function App() {
  return (
    <Router>
     <Routes>
        <Route path='/' element={<Games/>}/>
        <Route exact path='game/:title'  element={<Game/>}/>
     </Routes>
   </Router>
  )
}

export default App;
