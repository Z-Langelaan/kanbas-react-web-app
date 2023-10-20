import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import '../style.css';
import { BiEdit } from "react-icons/bi";

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1><hr />
      <div className="dashboard-item">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {courses.map((course) => (
            <div className="col mb-5" key={course._id}>
              <Link to={`/Kanbas/Courses/${course._id}`} className="card-link"> {
              <div className="card dashboard-card shadow-sm">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" 
                alt="Course Thumbnail" className="bd-placeholder-img card-img-top"/>
                <div className="card-body">
                  <h3 className="card-text">{course.name}</h3>
                  <p className="card-text">{course.number}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm">
                        <BiEdit />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              } </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;