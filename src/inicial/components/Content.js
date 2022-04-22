import "../../style.css";

import Table from "./Components-Content/Table";
import AddUserForm from "./Components-Content/addUser";
import EditUser from "./Components-Content/editUser";

import React, { useState } from "react";

const Content = () => {
  const usersData = [
    { id: 1, titulo: "Produto 102", descricao: "lorem ipsum", prazo: "18-04-2022", entregue: "sim" },
    { id: 2, titulo: "Produto 006", descricao: "lorem ipsum", prazo: "25-04-2022", entregue: "não" },
    { id: 3, titulo: "Produto 250", descricao: "lorem ipsum", prazo: "01-05-2022", entregue: "não" },
  ];

  const initialFormState = { id: null, titulo: "", descricao: "", prazo: "", entregue: "" };

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

    setCurrentUser({ id: user.id, titulo: user.titulo, descricao: user.descricao, prazo: user.prazo, entregue: user.entregue });
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
