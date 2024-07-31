import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteForm from './Pages/QuoteForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<QuoteForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

