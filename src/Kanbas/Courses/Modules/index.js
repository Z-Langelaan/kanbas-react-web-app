import ModuleList from "./ModuleList";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEllipsisVertical} from "react-icons/fa6";

function Modules() {

  const navigate = useNavigate();

  return (
    <div>
      <div className="modules">
        <h2>Modules</h2>
        <Link to={`/Kanbas/Courses/Modules`}
              className="btn btn-secondary">
          Collapse All
        </Link>
        <Link to={`/Kanbas/Courses/Modules`}
              className="btn btn-secondary">
          View Progress
        </Link>
        <Link to={`/Kanbas/Courses/Modules`}
              className="btn btn-secondary">
          Publish All
        </Link>
        <Link to={`/Kanbas/Courses/Modules`}
              className="btn btn-danger">
          Module
        </Link>
        <Link to={`/Kanbas/Courses/Modules`}
              className="btn btn-secondary">
          <FaEllipsisVertical />          
        </Link>
        <ModuleList />
        </div>
    </div>
  );
}
export default Modules;