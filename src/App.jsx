import "./App.css";
import AbraSuaConta from "./screens/abra_sua_conta/AbraSuaConta";
import Header from "./components/header/Header";
import Inicio from "./screens/inicio/Inicio";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Inicio />
          <AbraSuaConta />
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
