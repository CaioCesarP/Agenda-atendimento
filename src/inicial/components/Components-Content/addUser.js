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

        props.addUser(user);
        setUser(props.initialFormState);
      }}
    >
      <div className="box-input">
        <TextField
          required
          name="titulo"
          type="text"
          className="input input--titulo"
          label="Título"
          value={user.titulo}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="descricao"
          type="text"
          className="input input--descricao"
          label="Descrição"
          value={user.descricao}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="prazo"
          type="text"
          className="input input--prazo"
          label="Prazo de entrega"
          placeholder="dd-mm-aaaa"
          value={user.prazo}
          onChange={handleInputChange}
        />
        <TextField
          required
          name="entregue"
          type="text"
          className="input input--entregue"
          label="Entrega concluída"
          placeholder="sim/não"
          value={user.entregue}
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
