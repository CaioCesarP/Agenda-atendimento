import { Button } from "@mui/material";

const Table = (props) => {
  const length = props?.users?.length
  return(
  <table className="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Data</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      {length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.data}</td>
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
          <td colSpan={3}>Sem agendamentos</td>
        </tr>
      )}
    </tbody>
  </table>
);
}

export default Table;
