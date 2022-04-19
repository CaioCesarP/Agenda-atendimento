import { TextField, Button } from "@mui/material";

const Content = () => {
  return (
    <div className="content">
      <div className="left">
        <div className="box box-1">
          <div className="adjust">
            <div className="box-input">
              <TextField className="input input--produto" label="Produto" />
              <TextField
                className="input input--quantidade"
                label="Quantidade"
              />
            </div>
            <div className="box-button">
              <div className="adjust-1">
                <Button variant="outlined">
                  adicionar
                </Button>
                <Button variant="outlined">
                  editar
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="box box-2">
          <div className="box-glass">
            <div className="box-grid">
              <div className="item item-1">
                <img alt="item-1" src="./img/3-48-64px-icon-11.svg" />
              </div>
              <div className="item item-2">
                <img alt="item-2" src="./img/3-48-64px-icon-17.svg" />
              </div>
              <div className="item item-3">
                <img alt="item-3" src="./img/3-48-64px-icon-25.svg" />
              </div>
              <div className="item item-4">
                <img alt="item-4" src="./img/3-48-64px-icon-34.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="field">
          <table className="table">
            <tr>
              <th>Id</th>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Joías</td>
              <td>6</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Anéis</td>
              <td>15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Brincos</td>
              <td>20</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Content;
