import { Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="copyright">
          <Typography variant="caption" color="#666666">
            Caio César 2022<span className="icon">copyright</span>
          </Typography>
        </div>
        <div className="sociais">
          <a
            href="https://www.linkedin.com/in/profile-caio-c%C3%A9sar-link/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="linkedin">
              <LinkedInIcon />
            </IconButton>
          </a>
          <a
            href="https://github.com/CaioCesarP/E-commerce"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
