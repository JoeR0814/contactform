import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './Pages/ContactForm';
import ReachOut from './Pages/ReachOut';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ContactForm />} />
          <Route path='/reachout' element={<ReachOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

