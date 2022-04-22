import { Button } from "@mui/material";

const Table = (props) => {
  const length = props?.users?.length
  return(
  <table className="table">
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
          <td colSpan={3}>Sem agendamentos</td>
        </tr>
      )}
    </tbody>
  </table>
);
}

export default Table;
