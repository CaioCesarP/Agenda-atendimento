import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles.css";

const useStyles = makeStyles(() => ({
  containter: {
    fontFamily: "Arial, Helvectica, sans-serif",
    borderCollapse: "collapse",
    backgroundColor: "aliceblue",
    width: "98%",
    Height: "10rem"
  },
}));

const Table = (props) => {
  const styles = useStyles();
  const length = props?.users?.length;
  return (
    <table className={styles.containter}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Prazo de entrega</th>
          <th>Entrega concluída</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {length > 0 ? (
          props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.titulo}</td>
              <td>{user.descricao}</td>
              <td>{user.prazo}</td>
              <td>{user.entregue}</td>
              <td>
                <Button
                  onClick={() => {
                    props.editRow(user);
                  }}
                >
                  Editar
                </Button>
                <Button
                  onClick={() => {
                    props.deleteUser(user.id);
                  }}
                >
                  Excluir
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>Sem agendamentos</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
