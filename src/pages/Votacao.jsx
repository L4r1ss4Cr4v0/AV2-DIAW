import { useState } from "react";
import ParticipantsCard from "../components/ParticipanteCard";
import {
  listarNaRoca,
  listarForaDaRoca,
  registrarVoto,
} from "../services/votacaoService";

export default function Votacao() {
  const [ultimoVoto, setUltimoVoto] = useState(null);
  const [votosNaSessao, setVotosNaSessao] = useState(0);
  const naRoca = listarNaRoca();
  const foraRoca = listarForaDaRoca();
  function handleVotar(participante) {
    registrarVoto(participante.id);
    setUltimoVoto(participante);
    setVotosNaSessao((prev) => prev + 1);
  }

  return (
    <>
      <section>
        {naRoca.map((p) => (
          <ParticipantsCard key={p.id} participante={p} onVotar={handleVotar} />
        ))}
      </section>
      <section>
        {foraRoca.map((p) => (
          <ParticipantsCard key={p.id} participante={p} />
        ))}
      </section>
      <section>
        {ultimoVoto != null && (
          <div>
            <span>Nome participante: </span>
            {votosNaSessao != 1 ? (
              <span> Você votou {votosNaSessao} vezes</span>
            ) : (
              <span>Você votou {votosNaSessao} vez</span>
            )}
            <span>
              <a href="/resultado">Ir para o resultado</a>
            </span>
          </div>
        )}
      </section>
    </>
  );
}
