import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { getSubjectById, updateSubject } from '../../../services/ApiService';

const Edit = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [subject, setSubject] = useState({
        title: '',
        email: '',
        className: '',
        courseCode: ''
    });

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const response = await getSubjectById(courseId);
                setSubject(response.data);
            } catch (error) {
                console.error('Error fetching subject:', error);
            }
        };

        fetchSubject();
    }, [courseId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSubject((prevSubject) => ({
            ...prevSubject,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateSubject(subject);
            navigate('/admin/subjects');
        } catch (error) {
            console.error('Error updating subject:', error);
        }
    };

    return (
        <Container>
            <h2>Edit </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={subject.title}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={subject.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formClassName">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="className"
                        value={subject.className}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formCourseCode">
                    <Form.Label>Course Code</Form.Label>
                    <Form.Control
                        type="text"
                        name="courseCode"
                        value={subject.courseCode}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Subject
                </Button>
            </Form>
        </Container>
    );
};

export default Edit;
