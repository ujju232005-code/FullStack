import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
    const products = [
        {
            id: 1,
            title: 'Product 1',
            description: 'High-quality product with premium features',
            price: '$99.99',
            image: 'https://via.placeholder.com/300x200/4A90E2/ffffff?text=Product+1'
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'Affordable solution for everyday use',
            price: '$49.99',
            image: 'https://via.placeholder.com/300x200/50C878/ffffff?text=Product+2'
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'Premium edition with advanced capabilities',
            price: '$149.99',
            image: 'https://via.placeholder.com/300x200/E74C3C/ffffff?text=Product+3'
        }
    ];

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Product Catalog</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.description}</Card.Text>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0 text-primary">{product.price}</h5>
                                    <Button variant="success">Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default App;
