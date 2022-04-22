import "../../style.css";

import Table from "./Components-Content/Table";
import AddUserForm from "./Components-Content/addUser";
import EditUser from "./Components-Content/editUser";

import React, { useState } from "react";

const Content = () => {
  const usersData = [
    { id: 1, nome: "Juca", data: "10:30 | 04/22" },
    { id: 2, nome: "John", data: "13:30 | 04/22" },
    { id: 3, nome: "Mary", data: "13:30 | 04/25" },
  ];

  const initialFormState = { id: null, nome: "", data: "" };

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;

    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, nome: user.nome, data: user.data });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="content">
      <div className="left">
        <div className="box box-1">
          {editing ? (
            <div className="adjust">
              <h2 className="subtitle">Editando</h2>
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="adjust">
              <h2 className="subtitle">Adicionando</h2>
              <AddUserForm initialFormState={initialFormState} addUser={addUser} />
            </div>
          )}
        </div>
        <div className="box box-2">
          <div className="box-glass">
            <div className="box-grid">
              <div className="item item-1">
                <img alt="item-1" src="#" />
              </div>
              <div className="item item-2">
                <img alt="item-2" src="#" />
              </div>
              <div className="item item-3">
                <img alt="item-3" src="#" />
              </div>
              <div className="item item-4">
                <img alt="item-4" src="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="field">
          <Table users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Content;
