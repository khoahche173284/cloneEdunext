import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [groupName, setGroupName] = useState('');
    const navigate = useNavigate();

    const handleAddGroup = async () => {
        try {
            const response = await axios.post('http://localhost:9999/listGroup', { name: groupName });
            alert('Group added successfully!');
            navigate('/admin/groups');
        } catch (error) {
            console.error('There was an error adding the group!', error);
            alert('Failed to add group.');
        }
    };

    return (
        <Container>
            <h2>Add Group</h2>
            <Form>
                <Form.Group controlId="groupName">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter group name"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleAddGroup}>
                    Add Group
                </Button>
            </Form>
        </Container>
    );
};

export default Add;
