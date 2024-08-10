import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import AppContext from '../../Admin/Context';
import axios from 'axios';

const SubjectsDashboard = () => {
    const { subjects, setSubjects } = useContext(AppContext);
    const navigate = useNavigate();

    if (!Array.isArray(subjects)) {
        return <p>No subjects data available</p>;
    }

    const handleDelete = async (courseId) => {
        try {
            await axios.delete(`http://localhost:9999/subjects/${courseId}`);
            setSubjects((prevSubjects) => prevSubjects.filter(subject => subject.courseId !== courseId));
            alert('Subject deleted successfully!');
        } catch (error) {
            console.error('There was an error deleting the subject!', error);
            if (error.response && error.response.status === 404) {
                alert('Subject not found!');
            } else {
                alert('Failed to delete subject.');
            }
        }
    };

    return (
        <div>
            <h2>Subjects Dashboard</h2>
            <Link to="/admin/subjects/add">
                <Button variant="primary">Add Subject</Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Email</th>
                        <th>Class Name</th>
                        <th>Course Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.length === 0 ? (
                        <tr>
                            <td colSpan="5">No subjects available</td>
                        </tr>
                    ) : (
                        subjects.map((subject) => (
                            <tr key={subject.courseId}>
                                <td>{subject.title}</td>
                                <td>{subject.email}</td>
                                <td>{subject.className}</td>
                                <td>{subject.courseCode}</td>
                                <td>
                                    <Link to={`/admin/subjects/edit/${subject.courseId}`}>
                                        <Button variant="warning" className="mr-2">Edit</Button>
                                    </Link>
                                    <Button 
                                        variant="danger" 
                                        onClick={() => handleDelete(subject.courseId)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default SubjectsDashboard;
