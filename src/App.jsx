import { useState } from "react";
import "../src/App.css";
import {
  calcularResultado,
  calcularTotalVotos,
  obterVotos,
  zerarVotos,
} from "./services/votacaoService";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resultado from "./pages/Resultado";

function App() {
  const [votos, setVotos] = useState(() => obterVotos());

  const total = calcularTotalVotos(votos);
  const resultado = calcularResultado(votos);

  function handleZerar() {
    if (window.confirm("Apagar todos os votos?")) {
      zerarVotos();
      setVotos({});
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>

      {resultado.map((p) => {
        <div className="barra">
          <div
            className="barra-preenchida"
            style={{
              width: `${p.percentual.toLocaleString("pt-BR", {
                maximumFractionDigits: 1,
              })}%`,
            }}
          />
          {total == 0 && (
            <span>
              O total de votos foi 0, vote <a href="/votacao">aqui</a>
            </span>
          )}

          <button type="button" onClick={() => handleZerar()}>
            Zerar Votos
          </button>
        </div>;
      })}
    </BrowserRouter>
  );
}

export default App;
