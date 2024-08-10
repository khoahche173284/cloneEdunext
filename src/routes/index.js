import Home from '../pages/Home/index';
import SlotPage from '../pages/SlotPage/index';
import Learning from '../pages/Learning/index';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AddSemester from '../pages/Admin/Semesters/Add';
import DeleteSemester from '../pages/Admin/Semesters/Delete';
import EditSemester from '../pages/Admin/Semesters/Edit';
import ViewSemester from '../pages/Admin/Semesters/View';
import SemestersDashboard from '../pages/Admin/Semesters/SemestersDashboard';
import AddSubject from '../pages/Admin/Subjects/Add';
import DeleteSubject from '../pages/Admin/Subjects/Delete';
import EditSubject from '../pages/Admin/Subjects/Edit';
import ViewSubject from '../pages/Admin/Subjects/View';
import SubjectsDashboard from '../pages/Admin/Subjects/SubjectsDashboard';
import AddGroup from '../pages/Admin/Groups/Add';
import DeleteGroup from '../pages/Admin/Groups/Delete';
import EditGroup from '../pages/Admin/Groups/Edit';
import ViewGroup from '../pages/Admin/Groups/View';
import GroupsDashboard from '../pages/Admin/Groups/GroupsDashboard';
import FirstTime from '../pages/Auth/FirstTime';
import LoginAuth from '../pages/Auth/LoginAuth';

// public router
const publicRoutes = [
    { path: '/', component: FirstTime },
    { path: '/login', component: LoginAuth }
]
    

const privateRoutes = [
    { path: '/home', component: Home },
    { path: '/slotPage/:courseId/:classId', component: SlotPage },
    { path: '/learning/:courseId/:classId/:orderId/:classSessionId/:index', component: Learning, layout: null },
    { path: '/admin', component: AdminDashboard },
    { path: '/admin/semesters/add', component: AddSemester },
    { path: '/admin/semesters/delete', component: DeleteSemester },
    { path: '/admin/semesters/edit', component: EditSemester },
    { path: '/admin/semesters/view', component: ViewSemester },
    { path: '/admin/semesters', component: SemestersDashboard },
    { path: '/admin/subjects/add', component: AddSubject },
    { path: '/admin/subjects/delete/:courseId', component: DeleteSubject },
    { path: '/admin/subjects/edit/:courseId', component: EditSubject },
    { path: '/admin/subjects/view/:courseId', component: ViewSubject },
    { path: '/admin/subjects', component: SubjectsDashboard },
    { path: '/admin/groups/add', component: AddGroup },
    { path: '/admin/groups/delete/:id', component: DeleteGroup },
    { path: '/admin/groups/edit/:id', component: EditGroup },
    { path: '/admin/groups/view/:id', component: ViewGroup },
    { path: '/admin/groups', component: GroupsDashboard }
    

];

export { publicRoutes, privateRoutes };
