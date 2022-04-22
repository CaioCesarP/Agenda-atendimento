import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <div className="box-input">
        <TextField
          name="nome"
          className="input input--nome"
          label="Nome"
          value={user.nome}
          onChange={handleInputChange}
        />
        <TextField
          name="data"
          className="input input--data"
          label="Data"
          value={user.data}
          onChange={handleInputChange}
        />
      </div>
      <div className="box-button">
        <div className="adjust-1">
          <Button type="submit" variant="outlined">
            editar
          </Button>
          <Button variant="outlined" onClick={() => props.setEditing(false)}>
            cancelar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditUser;
