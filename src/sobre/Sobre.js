import { Button, Typography } from "@mui/material";
import "./style.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="left">
        <div className="glass">
          <Typography variant="h4" color="red" gutterBottom>
            NOSSA MISSÃO
          </Typography>
          <Typography variant="h5" className="destaque" gutterBottom>
            Temos como missão principal se tornar um dos maiores sistemas de
            agendamento para as empresas em toda a america latina, visando
            sempre a clareza das nossas funções e buscando sempre aprimorar no
            ámbito tecnologico.
          </Typography>
          <Typography variant="h5" className="convite" gutterBottom>
            Venha se tornar mais conectado conosco, entre em contato já!
          </Typography>
          <Button color="secondary" variant="contained" size="large">
            CONTATO
          </Button>
        </div>
      </div>
      <div className="right">
        <Typography variant="h4" color="red" gutterBottom>
          COMENTÁRIOS
        </Typography>
        <div className="double">
          <div className="card">
            <p className="comentario">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ratione, ea dolor quidem autem et, tempora, sit non
              nesciunt quas eligendi molestiae laudantium neque doloremque
              voluptates quae perspiciatis sequi tenetur!{" "}
            </p>
            <p className="autor">CEO da Lorem ipsum</p>
          </div>
          <div className="card">
            <p className="comentario">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ratione, ea dolor quidem autem et, tempora, sit non
              nesciunt quas eligendi molestiae laudantium neque doloremque
              voluptates quae perspiciatis sequi tenetur!{" "}
            </p>
            <p className="autor">Empresário Lorem ipsum</p>
          </div>
        </div>
        <div className="single">
          <div className="card">
            <p className="comentario">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ratione, ea dolor quidem autem et, tempora, sit non
              nesciunt quas eligendi molestiae laudantium neque doloremque
              voluptates quae perspiciatis sequi tenetur!{" "}
            </p>
            <p className="autor">Equipe da Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
