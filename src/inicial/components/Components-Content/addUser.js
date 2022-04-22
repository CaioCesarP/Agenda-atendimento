import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const AddUserForm = (props) => {
  const [user, setUser] = useState(props.initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (user.nome === "" && (user.data === "" || user.data.length <= 3) ) return
        
        props.addUser(user);
        setUser(props.initialFormState);
      }}
    >
      <div className="box-input">
        <TextField
          name="nome"
          type="text"
          className="input input--nome"
          label="Nome"
          value={user.nome}
          onChange={handleInputChange}
        />
        <TextField
          name="data"
          type="text"
          className="input input--data"
          label="Data"
          value={user.data}
          onChange={handleInputChange}
        />
      </div>
      <div className="box-button">
        <div className="adjust-1">
          <Button type="submit" variant="outlined">
            adicionar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddUserForm;
