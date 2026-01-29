import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Component
function Home() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#27ae60' }}>Home Page</h1>
            <p>Welcome! Use the navigation links above to explore.</p>
        </div>
    );
}

// Services Component
function Services() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#27ae60' }}>Our Services</h1>
            <ul>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Solutions</li>
            </ul>
        </div>
    );
}

// Contact Component
function Contact() {
    return (
        <div style={{ padding: '20px' }}>
            <h1 style={{ color: '#27ae60' }}>Contact Us</h1>
            <p>Email: info@example.com</p>
            <p>Phone: +91-1234567890</p>
        </div>
    );
}

// Navigation Component
function Navigation() {
    return (
        <nav style={{
            background: '#34495e',
            padding: '15px',
            marginBottom: '20px'
        }}>
            <Link to="/" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 15px',
                fontSize: '18px'
            }}>
                Home
            </Link>
            <Link to="/services" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 15px',
                fontSize: '18px'
            }}>
                Services
            </Link>
            <Link to="/contact" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 15px',
                fontSize: '18px'
            }}>
                Contact
            </Link>
        </nav>
    );
}

// Main App Component
function App() {
    return (
        <Router>
            <div style={{ fontFamily: 'Arial, sans-serif' }}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
