import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Component
function Home() {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ color: '#3498db' }}>Welcome to Multi-Page SPA</h1>
            <p>This application demonstrates multiple routes in a Single Page Application.</p>
            <p>Use the navigation menu to explore different pages without page refresh!</p>
        </div>
    );
}

// Dashboard Component
function Dashboard() {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ color: '#3498db' }}>Dashboard</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginTop: '20px'
            }}>
                <div style={{
                    background: '#ecf0f1',
                    padding: '20px',
                    borderRadius: '8px'
                }}>
                    <h3>Total Users</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' }}>1,234</p>
                </div>
                <div style={{
                    background: '#ecf0f1',
                    padding: '20px',
                    borderRadius: '8px'
                }}>
                    <h3>Active Sessions</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' }}>456</p>
                </div>
            </div>
        </div>
    );
}

// Profile Component
function Profile() {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ color: '#3498db' }}>User Profile</h1>
            <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginTop: '20px'
            }}>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Role:</strong> Administrator</p>
                <p><strong>Member Since:</strong> January 2024</p>
            </div>
        </div>
    );
}

// Navigation Component
function Navigation() {
    return (
        <nav style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
            <Link to="/" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 20px',
                fontSize: '18px',
                fontWeight: '500'
            }}>
                Home
            </Link>
            <Link to="/dashboard" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 20px',
                fontSize: '18px',
                fontWeight: '500'
            }}>
                Dashboard
            </Link>
            <Link to="/profile" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 20px',
                fontSize: '18px',
                fontWeight: '500'
            }}>
                Profile
            </Link>
        </nav>
    );
}

// Main App Component
function App() {
    return (
        <Router>
            <div style={{
                fontFamily: 'Arial, sans-serif',
                minHeight: '100vh',
                background: '#f5f5f5'
            }}>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
