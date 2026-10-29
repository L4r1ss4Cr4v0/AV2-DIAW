import { obterVotos } from "../services/votacaoService";

export default function Resultado() {
  const votosTotais = obterVotos().length;

  return (
    <>
      <h1>Parcial da eliminação</h1>
      <span>
        <strong>{votosTotais ? votosTotais : 0}</strong> votos computados
      </span>

      {votosTotais == null && (
        <div>
          <span>
            Nenhum voto ainda. Escolha quem sai da roça para var a parcial
          </span>

          <a href="/votacao">
            <button type="button">Ir para a votação</button>
          </a>
        </div>
      )}

      <span>DIAW 2026 PUC Minas</span>
    </>
  );
}
