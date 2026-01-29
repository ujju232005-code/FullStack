import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

function App() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
                <Container>
                    <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="basic-navbar-nav"
                        onClick={() => setExpanded(!expanded)}
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                                About
                            </Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#service1" onClick={() => setExpanded(false)}>
                                    Web Development
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#service2" onClick={() => setExpanded(false)}>
                                    Mobile Apps
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#service3" onClick={() => setExpanded(false)}>
                                    Consulting
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <h1>Responsive Navigation Bar Demo</h1>
                <p>Resize the browser window to see the responsive navigation in action.</p>
                <p>On smaller screens, the menu collapses into a hamburger icon.</p>

                <div className="mt-4">
                    <h3>Features:</h3>
                    <ul>
                        <li>Fully responsive design</li>
                        <li>Mobile-friendly hamburger menu</li>
                        <li>Dropdown menu support</li>
                        <li>Dark theme styling</li>
                        <li>Bootstrap integration</li>
                    </ul>
                </div>
            </Container>
        </>
    );
}

export default App;
