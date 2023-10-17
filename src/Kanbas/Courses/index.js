import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);

    return (
    <div>
        <h1>Course {course.name}</h1>
        <CourseNavigation />
        <div>
            <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{
                left: "320px",
                top: "50px",
                }}
            >
                <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Piazza" element={<h1>Piazza</h1>} />
                <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                <Route
                    path="Assignments/:assignmentId"
                    element={<AssignmentEditor/>} />
                <Route path="Grades" element={<Grades />} />
                <Route path="People" element={<h1>People</h1>} />
                </Routes>
            </div>
        </div>

    </div>
    );
}
export default Courses;