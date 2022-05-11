import Pages from "./route/routes";
import Footer from "./components/footer/index";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "auto",
    height: "auto",
    padding: "10px",
  },
}));

function App() {
  const styles = useStyles();
  return (
    <section className={styles.container}>
      <Pages />
      {/* <Footer /> */}
    </section>
  );
}

export default App;
