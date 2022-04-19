import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Typography variant="h2">E-commerce</Typography>
      </div>
      <div className="nav">
        <a href="#E-commerce" className="nav--link">
          E-commerce
        </a>
        <a href="#Sobre" className="nav--link">
          Sobre
        </a>
      </div>
    </div>
  );
};

export default Navbar;
