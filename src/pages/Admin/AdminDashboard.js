
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Admin Dashboard</h1>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Semesters</Card.Title>
                            <Card.Text>
                                Create, edit, and manage semesters.
                            </Card.Text>
                            <Button as={Link} to="/admin/semesters" variant="primary">
                                Go to Semesters
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Subjects</Card.Title>
                            <Card.Text>
                                Create, edit, and manage subjects.
                            </Card.Text>
                            <Button as={Link} to="/admin/subjects" variant="primary">
                                Go to Subjects
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Manage Groups</Card.Title>
                            <Card.Text>
                                Create, edit, and manage groups.
                            </Card.Text>
                            <Button as={Link} to="/admin/groups" variant="primary">
                                Go to Groups
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;
