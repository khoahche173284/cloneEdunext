import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSubject } from '../../../services/ApiService';
import { Form, Button } from 'react-bootstrap';

const AddSubject = () => {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [className, setClassName] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubject = { title, email, className, courseCode };
        try {
            await createSubject(newSubject);
            navigate('/admin/subjects');
        } catch (error) {
            console.error('Error creating subject:', error);
        }
    };

    return (
        <div>
            <h2>Add Subject</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formClassName">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formCourseCode">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Add Subject</Button>
            </Form>
        </div>
    );
};

export default AddSubject;
