import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home Component
function Home() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#2c3e50' }}>Home Page</h1>
            <p>Welcome to React Router Basics!</p>
            <p>This is the home page of our Single Page Application.</p>
        </div>
    );
}

// About Component
function About() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#2c3e50' }}>About Page</h1>
            <p>This page demonstrates basic client-side routing.</p>
            <p>Navigate using the browser's address bar:</p>
            <ul>
                <li>Type <code>/</code> for Home</li>
                <li>Type <code>/about</code> for About</li>
            </ul>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
