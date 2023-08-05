import "./App.css";
import Header from "./components/header/Header";
import Inicio from "./components/inicio/Inicio";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Inicio />
          <div>abra sua conta</div>
          <div>#inovação</div>
          <div>#depoimentos</div>
          <div>uma nova esperiencia</div>
          <div>#ajuda</div>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
