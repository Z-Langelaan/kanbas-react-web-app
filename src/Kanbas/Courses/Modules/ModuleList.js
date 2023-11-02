import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BiEdit } from "react-icons/bi";


function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module) => {
    setModules([
      { ...module, _id: new Date().getTime().toString() },
        ...modules,
    ]);
  };
  const deleteModule = (moduleId) => {
    setModules(modules.filter(
      (module) => module._id !== moduleId));
  };
  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  }

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => { addModule(module) }}>Add</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={updateModule}>Update</button>
        </div>
        <input value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
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
              onClick={(event) => { setModule(module); }}>
              <BiEdit />
            </button>

             <button
             type="button"
             className="btn btn-sm btn-danger"
              onClick={() => deleteModule(module._id)}>
              Delete
            </button>

           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;