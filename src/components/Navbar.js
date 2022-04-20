import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Typography variant="h2">Atendimento</Typography>
      </div>
      <div className="nav">
        <a href="#Agenda" className="nav--link">
          Agenda
        </a>
        <a href="#Sobre" className="nav--link">
          Sobre
        </a>
      </div>
    </div>
  );
};

export default Navbar;
