import KanbasNavigation from "./KanbasNavigation";
import Signin from "./users/signin";
import Account from "./users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import db from "./Database";
// import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import React, { useState, useEffect } from "react";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  // const URL = "http://localhost:4000/api/courses";
  const URL = "https://kanbas-node-server-app-seiy.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  // };
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({ name: "" });
  };
  // const deleteCourse = async (course) => {
  //   const response = await axios.delete(
  //     `${URL}/${course._id}`
  //   );
  //   setCourses(courses.filter(
  //     (c) => c._id !== course._id));
  // };

  // const updateCourse = async (course) => {
  //   const response = await axios.put(
  //     `${URL}/${course._id}`,
  //     course
  //   );
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       }
  //       return c;
  //     })
  //   );
  //   setCourse({ name: "" });
  // };



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

   return (
    <Provider store={store}>
      <div className="d-flex">
        <div>
        <KanbasNavigation />
        </div>
        <div>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/account" element={<Account />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="Dashboard" element={<Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />

            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            <Route path="Calender" element={<h1>Calender</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            <Route path="History" element={<h1>History</h1>} />
            <Route path="Studio" element={<h1>Studio</h1>} />
            <Route path="Commons" element={<h1>Commons</h1>} />
            <Route path="Help" element={<h1>Help</h1>} />
          </Routes>

        </div>
      </div>
      </Provider>
   );
 }
 export default Kanbas;