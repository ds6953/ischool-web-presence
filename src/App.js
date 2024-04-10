import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/about';
import Degrees from './components/Degrees';
import Minors from './components/Minors';
import Employment from './components/Employment';
import People from './components/People';
import CoursesButton from './components/CoursesButton';
import './App.css'; // Assuming you have a CSS file for basic styling

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          {/* Navigation Links */}
          <nav>
            <ul className="nav-links">
              <li><Link to="/">About</Link></li>
              <li><Link to="/degrees">Degrees</Link></li>
              <li><Link to="/minors">Minors</Link></li>
              <li><Link to="/employment">Employment</Link></li>
              <li><Link to="/people">People</Link></li>
              <li><Link to="/courses">Courses</Link></li>
            </ul>
          </nav>
        </header>
        
        {/* Route Configuration */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/degrees" element={<Degrees />} />
          <Route path="/minors" element={<Minors />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/people" element={<People />} />
          <Route path="/courses" element={<CoursesButton />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
