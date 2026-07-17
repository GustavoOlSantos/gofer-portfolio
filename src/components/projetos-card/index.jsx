import react from "react";

function ProjetosCard({ title, description, image, repo, acesse, destaque = false, stack = [] }) {
  const semRepo = !repo;
  const semDeploy = !acesse;

  return (
    <div className="projetos-card">

      {destaque && (
        <span className="featured-badge">
          ⭐ Projeto Principal
        </span>
      )}

      <img src={image} alt={title} />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
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
          <a className="btn btn-primary" disabled style={{ cursor: "not-allowed" }} title="Sem repositório disponível" >
            Ver repositório
          </a>
        ) : (
          <a className="btn btn-primary" href={repo} target="_blank" rel="noopener noreferrer">
            Ver repositório
          </a>
        )}

        {semDeploy ? (
          <a className="btn btn-secondary" disabled style={{ cursor: "not-allowed" }} title="Sem deploy, apenas execução local" >
            Acessar Projeto
          </a>
        ) : (
          <a className="btn btn-secondary" href={acesse} target="_blank" rel="noopener noreferrer">
            Acessar Projeto
          </a>
        )}
    </div>
      
    </div>
  );
}

export default ProjetosCard;