import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SemestersDashboard = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Semesters Dashboard</h2>
            <Row className="text-center">
                <Col md={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Add Semester</Card.Title>
                            <Card.Text>
                                Create a new semester.
                            </Card.Text>
                            <Button 
                                variant="primary" 
                                onClick={() => navigate('/admin/semesters/add')} 
                                block
                            >
                                Add
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Edit Semester</Card.Title>
                            <Card.Text>
                                Modify an existing semester.
                            </Card.Text>
                            <Button 
                                variant="secondary" 
                                onClick={() => navigate('/admin/semesters/edit')} 
                                block
                            >
                                Edit
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>Delete Semester</Card.Title>
                            <Card.Text>
                                Remove a semester.
                            </Card.Text>
                            <Button 
                                variant="danger" 
                                onClick={() => navigate('/admin/semesters/delete')} 
                                block
                            >
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            <Card.Title>View Semesters</Card.Title>
                            <Card.Text>
                                View all semesters.
                            </Card.Text>
                            <Button 
                                variant="info" 
                                onClick={() => navigate('/admin/semesters/view')} 
                                block
                            >
                                View
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SemestersDashboard;
