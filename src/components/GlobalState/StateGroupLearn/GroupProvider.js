import React, { useEffect, useState } from 'react'
import GroupContext from './Context'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function GroupProvider({children}) {
    const [listStudent , setListStudent] = useState([]);
    const [commentStudent, setCommentStudent] = useState([]);
    useEffect(() => {
        const fetData = async () => {
           try {
            const resList = await axios.get(`http://localhost:9999/listGroup`);
            const resComment = await axios.get(` http://localhost:9999/commentStudent`);
            setListStudent(resList.data);
            setCommentStudent(resComment.data);
           } catch (error) {
                console.log(error);
           }
        };
        fetData();
    }, [])
    const dataGroup = {
        listStudent, setListStudent, commentStudent, setCommentStudent
    };
  return (
    <GroupContext.Provider value={dataGroup}>
        {children}
    </GroupContext.Provider>
  )
}

export default GroupProvider