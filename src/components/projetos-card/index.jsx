import react from "react";

function ProjetosCard({ titulo, descricao, image, repo, acesse, destaque = false, producao = false, stack = [], actions, highlights }) {
  const semRepo = !repo;
  const semDeploy = !acesse;

  return (
    <div className="projetos-card">

      {destaque && (
        <span className="featured-badge">
          {highlights.principal}
        </span>
      )}

      {producao && (
        <span className="featured-badge production">
          {highlights.producao}
        </span>
      )}

      <img src={image} alt={titulo} />

      <div>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>

      <div className="stack-container">
        {stack.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="Tecnologia"
            className="stack-image"
          />
        ))}
      </div>

      
    <div className="projetos-card-buttons">
        {semRepo ? (
          <a className="btn btn-primary disabled" style={{ cursor: "not-allowed" }} title={actions.tooltips.semRepo} >
            {actions.repositorio}
          </a>
        ) : (
          <a className="btn btn-primary" href={repo} target="_blank" rel="noopener noreferrer">
            {actions.repositorio}
          </a>
        )}

        {semDeploy ? (
          <a className="btn btn-secondary disabled" style={{ cursor: "not-allowed" }} title={actions.tooltips.semDeploy} >
            {actions.acessar}
          </a>
        ) : (
          <a className="btn btn-secondary" href={acesse} target="_blank" rel="noopener noreferrer">
            {actions.acessar}
          </a>
        )}
    </div>
      
    </div>
  );
}

export default ProjetosCard;