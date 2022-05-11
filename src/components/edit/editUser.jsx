import React, { useEffect, useState } from "react";
import { TextField, Button, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "1rem",
    gap: "1rem",
    margin: "1rem 0",
  },
  button: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const EditUser = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const validation = (event) => {
    const regPrazo =
      /^\b(0?[1-9]|[12][0-9]|3[01])\b-\b(0?[1-9]|1[0-2])\b-\b([2-9][0-9][0-9][0-9])\b$/;
    if (
      user.titulo === "" ||
      user.descricao === "" ||
      user.prazo === "" ||
      user.entregue === ""
    ) {
      setErro("empty");
      return;
    } else if (user.prazo.match(regPrazo) === null) {
      setErro("term");
      return;
    } else if (user.entregue !== "sim" && user.entregue !== "não") {
      setErro("delivered");
      return;
    }

    event.preventDefault();

    props.updateUser(user.id, user);
    setErro(null);
  };
  const styles = useStyles();

  return (
    <section className={styles.form}>
      {erro === "empty" ? (
        <Alert severity="error">
          Campo vazio - <strong>revise dados</strong>
        </Alert>
      ) : erro === "term" ? (
        <Alert severity="error">
          Campo prazo inválido - <strong>revise dados</strong>
        </Alert>
      ) : erro === "delivered" ? (
        <Alert severity="error">
          Campo entrega concluída inválido - <strong>revise dados</strong>
        </Alert>
      ) : (
        <Alert severity="info">
          Preencha os dados - <strong>dados a serem modificados</strong>
        </Alert>
      )}
      <div className={styles.box}>
        <TextField
          name="titulo"
          type="text"
          className={styles.input}
          label="Título"
          value={user.titulo}
          onChange={handleInputChange}
        />
        <TextField
          name="descricao"
          type="text"
          className={styles.input}
          label="Descrição"
          value={user.descricao}
          onChange={handleInputChange}
        />
        <TextField
          name="prazo"
          type="text"
          className={styles.input}
          label="Prazo de entrega"
          placeholder="dd-mm-aaaa"
          value={user.prazo}
          onChange={handleInputChange}
        />
        <TextField
          name="entregue"
          type="text"
          className={styles.input}
          label="Entrega concluída"
          placeholder="sim/não"
          value={user.entregue}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.button}>
        <Button variant="outlined" onClick={validation}>
          editar
        </Button>
        <Button variant="outlined" onClick={() => props.setEditing(false)}>
          cancelar
        </Button>
      </div>
    </section>
  );
};

export default EditUser;
