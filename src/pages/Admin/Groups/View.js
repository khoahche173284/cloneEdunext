import React, { useEffect, useState } from 'react';
import axios from 'axios';

const View = ({ match }) => {
    const [group, setGroup] = useState(null);
    const groupId = match.params.id;

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await axios.get(`/api/groups/${groupId}`);
                setGroup(response.data);
            } catch (error) {
                console.error('There was an error fetching the group!', error);
            }
        };
        fetchGroup();
    }, [groupId]);

    if (!group) return <div>Loading...</div>;

    return (
        <div>
            <h2>View Group</h2>
            <p>ID: {group.id}</p>
            <p>Name: {group.name}</p>
        </div>
    );
};

export default View;
