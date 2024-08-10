import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const GroupsDashboard = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('http://localhost:9999/listGroup');
                setGroups(response.data);
            } catch (error) {
                console.error('There was an error fetching the groups!', error);
            }
        };
        fetchGroups();
    }, []);

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Groups Dashboard</h2>
            <div className="d-flex justify-content-end mb-4">
                <Button as={Link} to="/admin/groups/add" variant="success">
                    Add Group
                </Button>
            </div>
            <ListGroup>
                {groups.map((group) => (
                    <ListGroup.Item key={group.id} className="d-flex justify-content-between align-items-center">
                        <span>{group.name}</span>
                        <div>
                            <Button 
                                as={Link} 
                                to={`/admin/groups/edit/${group.id}`} 
                                variant="warning" 
                                className="mr-2"
                            >
                                Edit
                            </Button>
                            <Button 
                                as={Link} 
                                to={`/admin/groups/delete/${group.id}`} 
                                variant="danger"
                            >
                                Delete
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default GroupsDashboard;
