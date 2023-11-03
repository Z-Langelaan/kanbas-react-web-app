import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css';
import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisVertical } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="assignmentHead">
        <input type="text" id="assignment" name="assignment" placeholder="Search for Assignment"></input>
        <button type="button" className="btn btn-secondary btn-sm"><AiOutlinePlus />Group</button>
        <button type="button" className="btn btn-danger btn-sm"><AiOutlinePlus />Assignment</button>
        <button type="button" className="btn btn-secondary btn-sm"><FaEllipsisVertical /></button>
      </div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;