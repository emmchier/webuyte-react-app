import Navbar from "./components/navbar";
import "./styles/globalStyles.css";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="homeSection">
        <div className="container">
          <div className="homeSection__content">
            <h1>Hello Coder World!</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
