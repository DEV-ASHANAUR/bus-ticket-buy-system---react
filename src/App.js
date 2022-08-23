import React from 'react'
import Home from './pages/Home'
import "react-datepicker/dist/react-datepicker.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFound';
import List from './pages/List';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App