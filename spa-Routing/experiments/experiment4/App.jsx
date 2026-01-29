import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home Component
function Home() {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ color: '#e74c3c' }}>Home Page</h1>
            <p>This experiment demonstrates default and fallback routes.</p>
            <p>Try navigating to a non-existent route to see the 404 page!</p>
            <div style={{ marginTop: '20px' }}>
                <p>Valid routes:</p>
                <ul>
                    <li><code>/</code> - Home Page</li>
                    <li><code>/products</code> - Products Page</li>
                    <li><code>/some-invalid-route</code> - Will show 404</li>
                </ul>
            </div>
        </div>
    );
}

// Products Component
function Products() {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ color: '#e74c3c' }}>Products Page</h1>
            <div style={{ marginTop: '20px' }}>
                <h3>Our Products:</h3>
                <ul>
                    <li>Product A - $99</li>
                    <li>Product B - $149</li>
                    <li>Product C - $199</li>
                </ul>
            </div>
        </div>
    );
}

// 404 Not Found Component
function NotFound() {
    return (
        <div style={{
            padding: '50px',
            textAlign: 'center',
            background: '#fff3cd',
            margin: '20px',
            borderRadius: '8px'
        }}>
            <h1 style={{
                fontSize: '72px',
                color: '#856404',
                margin: '0'
            }}>404</h1>
            <h2 style={{ color: '#856404' }}>Page Not Found</h2>
            <p style={{ fontSize: '18px', color: '#856404' }}>
                The page you are looking for does not exist.
            </p>
            <Link to="/" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '12px 24px',
                background: '#e74c3c',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold'
            }}>
                Go Back Home
            </Link>
        </div>
    );
}

// Navigation Component
function Navigation() {
    return (
        <nav style={{
            background: '#c0392b',
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
            <Link to="/products" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 20px',
                fontSize: '18px',
                fontWeight: '500'
            }}>
                Products
            </Link>
            <Link to="/invalid-page" style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0 20px',
                fontSize: '18px',
                fontWeight: '500'
            }}>
                Test 404
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
                    <Route path="/products" element={<Products />} />
                    {/* Wildcard route for 404 - must be last */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
