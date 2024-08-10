import React, { useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { getSemesters, deleteSemester } from '../../../services/ApiService';

const DeleteSemester = () => {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        fetchSemesters();
    }, []);

    const fetchSemesters = async () => {
        const response = await getSemesters();
        setSemesters(response.data);
    };

    const handleDelete = async (id) => {
        await deleteSemester(id);
        alert('Semester deleted successfully');
        fetchSemesters();
    };

    return (
        <Container>
            <h2>Delete Semester</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Semester Name</th>
                        <th>Current</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {semesters.map(semester => (
                        <tr key={semester.id}>
                            <td>{semester.semesterName}</td>
                            <td>{semester.current ? 'Yes' : 'No'}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(semester.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DeleteSemester;
