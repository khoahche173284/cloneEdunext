import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getSemesters, updateSemester } from '../../../services/ApiService';

const EditSemester = () => {
    const [semesters, setSemesters] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState(null);

    useEffect(() => {
        fetchSemesters();
    }, []);

    const fetchSemesters = async () => {
        const response = await getSemesters();
        setSemesters(response.data);
    };

    const handleSelect = (semester) => {
        setSelectedSemester(semester);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateSemester(selectedSemester);
        alert('Semester updated successfully');
        fetchSemesters();
    };

    return (
        <Container>
            <h2>Edit Semester</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSemesterSelect">
                    <Form.Label>Select Semester</Form.Label>
                    <Form.Control as="select" onChange={(e) => handleSelect(semesters.find(s => s.id === parseInt(e.target.value)))}>
                        <option value="">Select a semester</option>
                        {semesters.map(semester => (
                            <option key={semester.id} value={semester.id}>{semester.semesterName}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                {selectedSemester && (
                    <>
                        <Form.Group controlId="formSemesterName">
                            <Form.Label>Semester Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter semester name" 
                                value={selectedSemester.semesterName} 
                                onChange={(e) => setSelectedSemester({ ...selectedSemester, semesterName: e.target.value })} 
                            />
                        </Form.Group>
                        <Form.Group controlId="formCurrent">
                            <Form.Check 
                                type="checkbox" 
                                label="Current Semester" 
                                checked={selectedSemester.current} 
                                onChange={(e) => setSelectedSemester({ ...selectedSemester, current: e.target.checked })} 
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Update Semester</Button>
                    </>
                )}
            </Form>
        </Container>
    );
};

export default EditSemester;
