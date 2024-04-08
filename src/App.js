import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header"; // Importar como default export
import Hero from "./components/Hero/Hero";

import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
    </div>
  );
}

export default App; // Asegúrate de exportar App correctamente
