import "./app.css";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
