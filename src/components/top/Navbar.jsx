import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "auto",
    height: "auto",
    padding: "20px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 800px)": {
      flexDirection: "column",
      gap: "2rem",
    },
  },
  nav: {
    width: "13rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    fontSize: "18px",
    textDecoration: "none",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "0.6rem",
    backgroundColor: "black",
    transition: "all 0.6s",
    "&:hover": {
      position: "relative",
      transform: "scale(1.1)",
    },
    "@media (max-width: 800px)": {
      fontSize: "20px",
    },
  },
}));

const Navbar = () => {
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <Typography className={styles.title} variant="h2">
        EU.Delivery
      </Typography>
      {/* <div className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/sobre" className={styles.link}>
          Sobre
        </Link>
      </div> */}
    </section>
  );
};

export default Navbar;
