import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [groupName, setGroupName] = useState('');

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await axios.get(`http://localhost:9999/listGroup/${id}`);
                setGroupName(response.data.name);
            } catch (error) {
                console.error('There was an error fetching the group!', error);
            }
        };
        fetchGroup();
    }, [id]);

    const handleEditGroup = async () => {
        try {
            await axios.put(`http://localhost:9999/listGroup/${id}`, { name: groupName });
            alert('Group updated successfully!');
            navigate('/admin/groups');
        } catch (error) {
            console.error('There was an error updating the group!', error);
            alert('Failed to update group.');
        }
    };

    const handleCancel = () => {
        navigate('/admin/groups');
    };

    return (
        <Container>
            <h2>Edit Group</h2>
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
                <Button variant="primary" onClick={handleEditGroup} className="mr-2">
                    Update Group
                </Button>
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
        </Container>
    );
};

export default Edit;
