import "./App.css";
import AbraSuaConta from "./screens/abra_sua_conta/AbraSuaConta";
import Header from "./components/header/Header";
import Inicio from "./screens/inicio/Inicio";
import Inovacao from "./screens/inovacao/Inovacao";
import Depoimentos from "./screens/depoimentos/Depoimentos";
import Experiencia from "./screens/experiencia/Experiencia";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Inicio />
          <AbraSuaConta />
          <Inovacao />
          <Depoimentos />
          <Experiencia />
          <div>#ajuda</div>
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
