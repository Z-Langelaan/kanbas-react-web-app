import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import { BiEdit } from "react-icons/bi";

function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  const course = {
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  };
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  


  return (
    <div>
      <h1>Dashboard</h1>
      <hr />

      <div className="dashboard-item">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {courses.map((course) => (
            <div className="col mb-5" key={course._id}>
              <Link to={`/Kanbas/Courses/${course._id}`} className="card-link">
                <div className="card dashboard-card shadow-sm">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEWIiIhYZW6zAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTg"
                    alt="Course Thumbnail"
                    className="bd-placeholder-img card-img-top"
                  />
                  <div className="card-body">
                    {editCourseId === course._id ? (
                      <div>
                        <input
                          value={course.name}
                          className="form-control"
                          onChange={(e) => {
                            const updatedName = e.target.value;
                            setCourses((prevCourses) => {
                              return prevCourses.map((c) => {
                                if (c._id === course._id) {
                                  return { ...c, name: updatedName };
                                }
                                return c;
                              });
                            });
                          }}
                        />
                        <input
                          value={course.number}
                          className="form-control"
                          onChange={(e) => {
                            const updatedNumber = e.target.value;
                            setCourses((prevCourses) => {
                              return prevCourses.map((c) => {
                                if (c._id === course._id) {
                                  return { ...c, number: updatedNumber };
                                }
                                return c;
                              });
                            });
                          }}
                        />
                        <input
                          value={course.startDate}
                          className="form-control"
                          type="date"
                          onChange={(e) => {
                            const updatedStartDate = e.target.value;
                            setCourses((prevCourses) => {
                              return prevCourses.map((c) => {
                                if (c._id === course._id) {
                                  return { ...c, startDate: updatedStartDate };
                                }
                                return c;
                              });
                            });
                          }}
                        />
                        <input
                          value={course.endDate}
                          className="form-control"
                          type="date"
                          onChange={(e) => {
                            const updatedEndDate = e.target.value;
                            setCourses((prevCourses) => {
                              return prevCourses.map((c) => {
                                if (c._id === course._id) {
                                  return { ...c, endDate: updatedEndDate };
                                }
                                return c;
                              });
                            });
                          }}
                        />
                        <button onClick={updateCourse} >
                          Save
                        </button>

                      </div>
                    ) : (
                      <div>
                        <h3 className="card-text">{course.name}</h3>
                        <p className="card-text">{course.number}</p>
                        <small>
                          from {course.startDate} to {course.endDate}
                        </small>
                      </div>
                    )}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}>        
                          <BiEdit />
                        </button>
                      </div>
                    </div>
                    <button
                        type="button"
                        className="btn btn-sm btn-danger"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>

                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>

    </div>
  );
}

export default Dashboard;
