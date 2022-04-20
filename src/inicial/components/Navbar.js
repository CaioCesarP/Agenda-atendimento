import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Typography variant="h2">Atendimento</Typography>
      </div>
      <div className="nav">
        <Link to="/" className="nav--link">
          Agenda
        </Link>
        <Link to="/sobre" className="nav--link">
          Sobre
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
