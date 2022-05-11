import React from "react";
import { Button, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { makeStyles } from "@mui/styles";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
  left: {
    padding: "20px",
    border: "3px solid #6d6d6d",
    boxShadow: "0 0 1rem black",
  },
  rigth: {
    padding: "20px",
    border: "3px solid #6d6d6d",
    boxShadow: "0 0 1rem black",
  },
}));

const Sobre = () => {
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <section className={styles.left}>
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
      </section>
      <section className={styles.rigth}>
        <CarouselProvider
          infinite
          totalSlides={3}
          naturalSlideHeight
          naturalSlideWidth
          isPlaying
          interval={7000}
          className="carousel"
        >
          <Slider>
            <Slide index={0} className="card">
              <p className="comentario">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ratione, ea dolor quidem autem et, tempora, sit non
                nesciunt quas eligendi molestiae laudantium neque doloremque
                voluptates quae perspiciatis sequi tenetur!{" "}
              </p>
              <p className="autor">CEO da Lorem ipsum</p>
              <img
                src="https://www.hublinksindia.com/img/sample.png"
                alt="cliente"
                className="img--client"
              />
            </Slide>
            <Slide index={1} className="card">
              <p className="comentario">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ratione, ea dolor quidem autem et, tempora, sit non
                nesciunt quas eligendi molestiae laudantium neque doloremque
                voluptates quae perspiciatis sequi tenetur! ea dolor quidem
                autem et, tempora, sit.{" "}
              </p>
              <p className="autor">Empresário Lorem ipsum</p>
              <img
                src="https://www.hublinksindia.com/img/sample.png"
                alt="cliente"
                className="img--client"
              />
            </Slide>
            <Slide index={2} className="card">
              <p className="comentario">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ratione, ea dolor quidem autem et, tempora!{" "}
              </p>
              <p className="autor">Equipe da Lorem ipsum</p>
              <img
                src="https://www.hublinksindia.com/img/sample.png"
                alt="cliente"
                className="img--client"
              />
            </Slide>
          </Slider>
          <ButtonBack className="button-slide">
            <ArrowLeftIcon />
          </ButtonBack>
          <ButtonNext className="button-slide">
            <ArrowRightIcon />
          </ButtonNext>
        </CarouselProvider>
      </section>
    </section>
  );
};

export default Sobre;
