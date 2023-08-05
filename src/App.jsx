import "./App.css";
import AbraSuaConta from "./screens/abra_sua_conta/AbraSuaConta";
import Header from "./components/header/Header";
import Inicio from "./screens/inicio/Inicio";
import Inovacao from "./screens/inovacao/Inovacao";
import Depoimentos from "./screens/depoimentos/Depoimentos";
import Experiencia from "./screens/experiencia/Experiencia";
import Ajuda from "./screens/ajuda/Ajuda";

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
          <Ajuda />
        </main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default App;
