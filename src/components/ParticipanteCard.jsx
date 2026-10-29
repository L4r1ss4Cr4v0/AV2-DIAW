export default function ParticipantsCard({ participante, onVotar }) {
  const { nome, foto, naRoca } = participante;

  return (
    <article>
      {naRoca ? (
        <>
          <span className="selo-roca card-roca">Na roça</span>
          <img src={foto} alt={nome} className="card-foto" />
          {onVotar && (
            <button type="button" onClick={() => onVotar(participante)}>
              Votar para eliminar
            </button>
          )}
        </>
      ) : (
        <>
          <span>{nome}</span>
          <img src={foto} alt={nome} className="card-foto" />
        </>
      )}
    </article>
  );
}
