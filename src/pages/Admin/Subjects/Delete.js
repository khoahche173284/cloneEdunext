import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteSubject } from '../../../services/ApiService';
import { Button } from 'react-bootstrap';

const DeleteSubject = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteSubject(id);
            navigate('/admin/subjects');
        } catch (error) {
            console.error('Error deleting subject:', error);
        }
    };

    return (
        <div>
            <h2>Delete Subject</h2>
            <p>Are you sure you want to delete this subject?</p>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
            <Button variant="secondary" onClick={() => navigate('/admin/subjects')}>Cancel</Button>
        </div>
    );
};

export default DeleteSubject;
