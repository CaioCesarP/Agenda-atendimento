import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddUser = (props) => {
  const [user, setUser] = useState(props.initialState);

  const HandleChangeInput = (event) => {
    const { nome, value } = event.target;

    setUser({ ...user, [nome]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // if (user.nome !== null && user.data !== null) return

        props.addUser(user);
        setUser(props.initialState);
      }}
    >
      <div className="box-input">
        <TextField
          name="nome"
          type="text"
          className="input input--nome"
          label="Nome"
          value={user.nome}
          onChange={HandleChangeInput}
        />
        <TextField
          name="data"
          type="text"
          className="input input--data"
          label="Data"
          value={user.data}
          onChange={HandleChangeInput}
        />
      </div>
      <div className="box-button">
        <div className="adjust-1">
          <Button type="submit" variant="outlined">adicionar</Button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
