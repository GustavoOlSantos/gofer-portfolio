import react from "react";

function ExperienciaHighlight({ cargo, empresa, icone, periodo, atividades}) {
  return (
    <div className="experiencia-highlight">
        <header>
            <aside>
                <div>
                    <img src={icone} alt={empresa} />
                </div>
            </aside>

            <section>
                <p>{periodo.toUpperCase()}</p>
                <h3>{cargo}</h3>
                <h4>{empresa}</h4>
            </section>
        </header>

        <div className="description">
            <ul>
                {atividades.map((atividade, index) => (
                    <li key={index}>{atividade}</li>
                ))}
            </ul>
        </div>
        
    </div>
    );
}

export default ExperienciaHighlight;