import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill, BsPlusCircleFill, BsTrash3Fill, BsPencil }  from "react-icons/bs";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      // const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
        <tr>
            <td>
              <label>Username</label>
              <input value={user.username} placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <label>Password</label>
              <input value={user.password} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <label>First Name</label>
              <input value={user.firstName} placeholder="First name" onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <label>Last Name</label>
              <input value={user.lastName} placeholder="Last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsFillCheckCircleFill onClick={updateUser} className="me-2 text-success fs-1 text" />
              <BsPlusCircleFill onClick={createUser} className="me-2 text-success fs-1 text" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`/Kanbas/account/${user._id}`}>
                  {user.username}
                </Link>
              </td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button className="btn btn-danger me-2">
                  <BsTrash3Fill onClick={() => deleteUser(user)} />
                </button>
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;