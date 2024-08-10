import React, { useEffect, useState } from 'react';
import AppContext from './Context';
import { 
    getSemesters, 
    getSubjects, 
    getData, 
    getClassnames, 
    getGroups, 
    updateSubject,  
    createSubject,  
    deleteSubject   
} from '../../services/ApiService';

function Provider({ children }) {
    const [semesters, setSemesters] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [dataLession, setDataLession] = useState([]);
    const [className, setClassName] = useState([]);
    const [groups, setGroups] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [semestersRes, subjectsRes, datasRes, classsRes, groupsRes] = await Promise.all([
                    getSemesters(),
                    getSubjects(),
                    getData(),
                    getClassnames(),
                    getGroups(),
                ]);
                
                setSemesters(semestersRes.data);
                setSubjects(subjectsRes.data);
                setDataLession(datasRes.data);
                setClassName(classsRes.data);
                setGroups(groupsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const contextValue = {
        semesters, setSemesters, 
        subjects, setSubjects,
        dataLession, setDataLession,
        className, setClassName,
        groups, setGroups,
        isLoading,
        updateSubject,  
        createSubject,  
        deleteSubject   
    };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
