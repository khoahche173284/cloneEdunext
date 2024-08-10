import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { createSemester } from '../../../services/ApiService';

const AddSemester = () => {
    const [semester, setSemester] = useState({ semesterName: '', current: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createSemester(semester);
        alert('Semester added successfully');
    };

    return (
        <Container>
            <h2>Add Semester</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSemesterName">
                    <Form.Label>Semester Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter semester name" 
                        value={semester.semesterName} 
                        onChange={(e) => setSemester({ ...semester, semesterName: e.target.value })} 
                    />
                </Form.Group>
                <Form.Group controlId="formCurrent">
                    <Form.Check 
                        type="checkbox" 
                        label="Current Semester" 
                        checked={semester.current} 
                        onChange={(e) => setSemester({ ...semester, current: e.target.checked })} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Add Semester</Button>
            </Form>
        </Container>
    );
};

export default AddSemester;
