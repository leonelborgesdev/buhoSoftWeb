import Experties from "./components/Experties/Experties";
import Header from "./components/Header/Header";
import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

import css from "./styles/app.module.scss";

function App() {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <LandingHeader />
      <WhoWeAre />
      <Experties />
    </div>
  );
}

export default App; // Asegúrate de exportar App correctamente
