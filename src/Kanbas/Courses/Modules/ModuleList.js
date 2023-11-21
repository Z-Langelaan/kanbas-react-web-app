import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { BiEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";



import * as client from "./client";
function ModuleList() {
  const dispatch = useDispatch();
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const { courseId } = useParams();
  
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);
  
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={handleAddModule}>Add</button>

          <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleUpdateModule(module._id)}>Update</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleDeleteModule(module._id)}>Update</button>
        </div>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             <button
             type="button"
             className="btn btn-secondary btn-sm"
             onClick={() => dispatch(setModule(module))}>
              <BiEdit />
            </button>

             <button
             type="button"
             className="btn btn-sm btn-danger"
             onClick={() => handleDeleteModule(module._id)}>
              Delete
            </button>

           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;