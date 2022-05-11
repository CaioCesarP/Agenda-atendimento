import Table from "../../components/table/index";
import AddUserForm from "../../components/add/index";
import EditUser from "../../components/edit/index";
import Busca from "../../components/busca/index";
import { Typography } from "@mui/material";

import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "98%",
    height: "auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    gap: "3rem",
    "@media (max-width: 800px)": {
      flexDirection: "column",
    },
  },
  left: {
    width: "auto",
    minWidth: "45%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  box: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  rigth: {
    width: "auto",
    height: "20rem",
    display: "flex",
    justifyContent: "center",
  },
}));

const Content = () => {
  const usersData = [
    {
      id: 1,
      titulo: "Produto 102",
      descricao: "lorem ipsum",
      prazo: "18-04-2022",
      entregue: "sim",
    },
    {
      id: 2,
      titulo: "Produto 006",
      descricao: "lorem ipsum",
      prazo: "25-04-2022",
      entregue: "não",
    },
    {
      id: 3,
      titulo: "Produto 250",
      descricao: "lorem ipsum",
      prazo: "01-05-2022",
      entregue: "não",
    },
  ];

  const initialFormState = {
    id: null,
    titulo: "",
    descricao: "",
    prazo: "",
    entregue: "",
  };

  const initialBuscaState = {
    busca: "",
  };

  const [users, setUsers] = useState(usersData);

  const [modalUsers, setModalUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user) => {
    user.id = users.length + 1;
    console.log(user);
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      titulo: user.titulo,
      descricao: user.descricao,
      prazo: user.prazo,
      entregue: user.entregue,
    });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const buscarTitulo = (titulo) => {
    console.log(modalUsers)
    setModalUsers(usersData.filter((user) => user.titulo === titulo))
  }

  const styles = useStyles();

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.form}>
          {editing ? (
            <>
              <Typography variant="h4" className={styles.title}>
                Editando
              </Typography>
              busca{" "}
              <EditUser
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </>
          ) : (
            <>
              <Typography variant="h4" className={styles.title}>
                Adicionando
              </Typography>
              <AddUserForm
                initialFormState={initialFormState}
                addUser={addUser}
              />
            </>
          )}
        </div>
        <div className={styles.busca}>
          <Busca
            initialFormState={initialFormState}
            initialBuscaState={initialBuscaState}
            modalUsers={modalUsers}
            editRow={editRow}
            deleteUser={deleteUser}
            buscarTitulo={buscarTitulo}
          />
        </div>
      </div>
      <div className={styles.rigth}>
        <Table users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </section>
  );
};

export default Content;
