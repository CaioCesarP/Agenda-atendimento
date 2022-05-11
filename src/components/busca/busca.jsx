import React, { useState } from "react";
import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Table from "../table/index";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifContent: "center",
    gap: "1rem",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    backgroundColor: "whitesmoke",
    backdropFilter: "blur(0.1)",
    border: "2px solid #000",
    boxShadow: "0 0 1rem black",
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifContent: "center",
  },
}));

const Busca = (props) => {
  const [busca, setBusca] = useState(props.initialBuscaState);
  const [modalBusca, setModalBusca] = useState(props.initialBuscaState);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    setBusca({ ...busca, [name]: value });
    setModalBusca(value);
  };

  const styles = useStyles();
  return (
    <section className={styles.container}>
      <Typography variant="h4">Campo de busca</Typography>
      <TextField
        name="busca"
        type="text"
        label="Busca por Título"
        placeholder="exemplo... Produto 102"
        value={busca.busca}
        onChange={handleChangeInput}
      />
      <Button
        variant="outlined"
        onClick={(event) => {
          if (busca.busca !== "") {
            event.preventDefault();

            props.buscarTitulo(busca.busca);
            setBusca(props.initialBuscaState);
            handleOpen();
          }
        }}
      >
        Buscar
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        onClose={() => {
          handleClose();
          setModalBusca(props.initialBuscaState);
        }}
      >
        <Box className={styles.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalBusca}
          </Typography>
          <Table
            users={props.modalUsers}
            editRow={props.editRow}
            deleteUser={props.deleteUser}
          />
        </Box>
      </Modal>
    </section>
  );
};

export default Busca;
