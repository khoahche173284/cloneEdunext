import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9999',
});

export const getData = () => api.get('/data');
export const getClassnames = () => api.get('/classname');

export const getSemesters = () => api.get('/semesters');
export const createSemester = (semester) => api.post('/semesters', semester);
export const deleteSemester = (id) => api.delete(`/semesters/${id}`);
export const updateSemester = (semester) => api.put(`/semesters/${semester.id}`, semester);

export const getSubjects = () => api.get('/subject')


export const getSubjectById = (courseId) => api.get(`/subjects/${courseId}`); // Added this line
export const createSubject = (subject) => api.post('/subjects', subject);
export const deleteSubject = (courseId) => api.delete(`/subjects/${courseId}`);
export const updateSubject = (subject) => api.put(`/subjects/${subject.courseId}`, subject);

export const getGroups = () => api.get('/listGroup');
export const getGroupById = (id) => api.get(`/listGroup/${id}`); // Added this line
export const createGroup = (group) => api.post('/listGroup', group);
export const deleteGroup = (id) => api.delete(`/listGroup/${id}`);
export const updateGroup = (group) => api.put(`/listGroup/${group.id}`, group); // Added this line

export const getComments = () => api.get('/commentStudent');
export const getQuestions = () => api.get('/questions');

export default api;
