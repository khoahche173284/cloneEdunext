import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppContext from './Context';

function Provider({children}) {
    const [semesters, setSemesters] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [dataLession, setDataLession] = useState([]);
    const [className, setClassName] = useState([]);
    const [userStore, setUserStore] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const semestersRes = await axios.get('http://localhost:9999/semesters');
                const subjectsRes = await axios.get('http://localhost:9999/subjects');
                const datasRes = await axios.get('http://localhost:9999/data');
                const classsRes = await axios.get('http://localhost:9999/classname');
                setSemesters(semestersRes.data);
                setSubjects(subjectsRes.data);
                setDataLession(datasRes.data);
                setClassName(classsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
        const storeUser = localStorage.getItem('user');
        if (storeUser) {
            setUserStore(JSON.parse(storeUser));
        }
    }, []);
    console.log(userStore);
    const data = {
        semesters, setSemesters, subjects, dataLession,setSubjects,className, isLoading,userStore
    };
  return (
    <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>
  )
}

export default Provider