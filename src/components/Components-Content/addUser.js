import React from "react";
import { TextField, Button } from "@mui/material";

const AddUser = (props) => {
  const [user, setUser] = React.useState(props.initialState);

  const HandleChange = (event) => {
    const { nome, value } = event.target;

    setUser({ ...user, [nome]: value });
  };

  return (
    <div>
      <div className="box-input">
        <TextField
          required
          name="nome"
          type="text"
          className="input input--nome"
          label="Nome"
          value={user.nome}
          onChange={HandleChange}
        />
        <TextField
          required
          name="data"
          type="text"
          className="input input--data"
          label="Data"
          value={user.data}
          onChange={HandleChange}
        />
      </div>
      <div className="box-button">
        <div className="adjust-1">
          <Button
            variant="outlined"
            onClick={(event) => {
              event.preventDefault();
              if (user.nome === "" || !user.data === "") return;

              props.addUser(user);
              setUser(props.initialFormState);
            }}
          >
            adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
