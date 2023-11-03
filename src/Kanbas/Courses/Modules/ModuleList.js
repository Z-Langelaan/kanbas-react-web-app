import React from "react";
import { useParams } from "react-router-dom";
// import db from "../../Database";
import { BiEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => dispatch(updateModule(module))}>Update</button>
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
             onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;