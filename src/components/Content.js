import Table from "./Components-Content/Table";
import AddUser from "./Components-Content/addUser";
import EditUser from "./Components-Content/editUser";

import React from "react";

const Content = () => {
  const usersData = [
    { id: 1, nome: "Juca", data: "24/04 | 13:30" },
    { id: 2, nome: "Maria", data: "24/04 | 15:30" },
    { id: 3, nome: "Leonardo", data: "25/04 | 15:30" },
  ];

  const initialState = { id: null, nome: "", data: "" };

  const [users, setUsers] = React.useState(usersData);

  const [editing, setEditing] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState(initialState);

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

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
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
              <AddUser initialState={initialState} addUser={addUser} />
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
