import React, { useState, useEffect } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import { getSemesters } from '../../../services/ApiService';

const ViewSemesters = () => {
    const [semesters, setSemesters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSemesters();
    }, []);

    const fetchSemesters = async () => {
        try {
            const response = await getSemesters();
            setSemesters(response.data);
        } catch (error) {
            console.error('Error fetching semesters:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">View Semesters</h2>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Semester Name</th>
                            <th>Current</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semesters.map((semester) => (
                            <tr key={semester.id}>
                                <td>{semester.semesterName}</td>
                                <td>{semester.current ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default ViewSemesters;
