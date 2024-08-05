import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './Pages/ContactForm';
import ReachOut from './Pages/emergency';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ContactForm' element={<ContactForm />} />
            <Route path='/emergency' element={<ReachOut />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

