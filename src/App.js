import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import WhyZeva from './components/WhyZeva';
import JoinTeam from './components/JoinTeam';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/why-zeva" element={<WhyZeva />} />
        <Route path="/join-team" element={<JoinTeam />} />
      </Routes>
    </Router>
  );
}

export default App;
