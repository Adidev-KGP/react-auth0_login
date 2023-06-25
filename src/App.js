import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Profile from './Profile';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <Router>
    <LoginButton />
    <LogoutButton />
    <Routes>
    <Route path = '/profile' element= {<Profile />} />
    </Routes>
    </Router>
  );
}

export default App;
