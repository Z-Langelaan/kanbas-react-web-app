import ModuleList from "./ModuleList";
import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisVertical} from "react-icons/fa6";
import { AiOutlinePlus, AiOutlineCheckCircle } from "react-icons/ai";
import '../../style.css';

function Modules() {

  return (
    <div>
      <div className="wd-modules">
        
        <h2>Modules</h2>

        <div className="wd-button">
          <Link to={`/Kanbas/Courses/Modules`}
                className="btn btn-secondary">
            Collapse All
          </Link>
        </div>
        <div className="wd-button">
          <Link to={`/Kanbas/Courses/Modules`}
                className="btn btn-secondary">
            View Progress
          </Link>
        </div>
        <div className="wd-button">
          <Link to={`/Kanbas/Courses/Modules`}
                className="btn btn-secondary">
            <div className="check"><AiOutlineCheckCircle /></div> Publish All
          </Link>
        </div>
        <div className="wd-button">
          <Link to={`/Kanbas/Courses/Modules`}
                className="btn btn-danger">
            <AiOutlinePlus /> Module
          </Link>
        </div>
        <div className="wd-button">
          <Link to={`/Kanbas/Courses/Modules`}
                className="btn btn-secondary">
            <FaEllipsisVertical />          
          </Link>
        </div>
        <ModuleList />
        </div>
    </div>
  );
}
export default Modules;