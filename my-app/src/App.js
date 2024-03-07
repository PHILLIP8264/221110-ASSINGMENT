import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ChatComponent from './ChatComponent';

const App = () => {
  return (
    <Router style={{ height: '100vh' }}>
      <div style={{ display: 'flex', backgroundColor: '#595f39', color: 'white', height: '100vh' }}>
        <nav style={{ flex: 1, padding: '1rem', backgroundColor: '#595f39', textAlign: 'center', fontSize: '1.5rem', color: 'black', display: 'flex', flexDirection: 'column', marginTop: '10px'}}>
          <h1>Helloworld Business</h1>
          <ul style={{ listStyleType: 'none', padding: 20 }}>
            <li>
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/ChatComponent" style={{ color: 'black', textDecoration: 'none',  }}>Chat</Link>
            </li>
          </ul>
        </nav>
        <div style={{ flex: 3, backgroundColor: ' #C4C5BA', padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/ChatComponent" element={<ChatComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
