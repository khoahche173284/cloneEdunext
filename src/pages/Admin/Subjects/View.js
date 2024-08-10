import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getSubjects } from '../../../services/ApiService';
import axios from 'axios';
import AppContext from '../Context';

const ViewSubject = () => {
    const { courseId } = useParams();
    const [subject, setSubject] = useState({});
    const {subjects} = useContext(AppContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const subJectMatch = subjects.find((sub) => sub.courseId === Number(courseId));
        if(subJectMatch){
            setSubject(subJectMatch);
        }
    }, [courseId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>View Subject</h2>
            {subject ? (
                <>
                    <p>Title: {subject.title}</p>
                    <p>Email: {subject.email}</p>
                    <p>Class Name: {subject.className}</p>
                    <p>Course Code: {subject.courseCode}</p>
                </>
            ) : (
                <p>No subject data available</p>
            )}
        </div>
    );
};

export default ViewSubject;
