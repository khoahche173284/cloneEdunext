import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Delete = () => {
    const { id } = useParams();
    const [groupId, setGroupId] = useState(id || '');

    useEffect(() => {
        if (id) {
            setGroupId(id);
        }
    }, [id]);

    const handleDeleteGroup = async () => {
        try {
            const response = await axios.delete(`http://localhost:9999/listGroup/${groupId}`);
            alert('Group deleted successfully!');
        } catch (error) {
            console.error('There was an error deleting the group!', error);
            alert('Failed to delete group.');
        }
    };

    return (
        <Container>
            <h2>Delete Group</h2>
            <Form>
                <Form.Group controlId="groupId">
                    <Form.Label>Group ID</Form.Label>
                    <Form.Control
                        type="hidden"
                        placeholder="Enter group ID"
                        value={groupId}
                        onChange={(e) => setGroupId(e.target.value)}
                    />
                </Form.Group>
                <Button variant="danger" onClick={handleDeleteGroup}>
                    Delete Group
                </Button>
            </Form>
        </Container>
    );
};

export default Delete;
