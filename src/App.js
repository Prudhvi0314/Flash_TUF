// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import FlashcardApp from './components/FlashcardApp'; // Ensure this path is correct
import Home from './components/Home'; // Import the Home component
import Layout from './components/Layout'; // Import the Layout component
import './index.css';
import Flashcard from './components/Flashcard';

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/flashcards" element={<FlashcardApp />} /> {/* Route for FlashcardApp */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> Optional 404 page */}
        <Route path='/flash' element={<Flashcard/>} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
