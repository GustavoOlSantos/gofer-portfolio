import { useEffect } from 'react'

import { useLanguage } from './i18n/languageContext.jsx'

import SkillIcon from './components/skill-icon/'
import ProjectCard from './components/projetos-card/'
import ExperienciaHighlight from './components/experiencia-hightlight/'

import Eu from './assets/eu.webp'
import Serpro from './assets/Serpro.svg'
import BNDES from './assets/Bndes.webp'

import { skills } from './data/skills.js'
import './styles/App.css'

function App() {

  const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  useEffect(() => { 
    
    let interval = null;

    document.querySelector(".hero-content > h1 > span.highlight-underline").onmouseover = event => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 52)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
  },[])

  const { t, changeLang, toggleLang, lang } = useLanguage();

  return (
    <div className="App">

      <header>
        <h2> Gustavo <span className="highlight">Santos</span></h2>

        <div className="social-icons">
            <a href="https://github.com/GustavoOlSantos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/gustavoolsantos/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>

             <button onClick={() => toggleLang()} className="lang-toggle" aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'} title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
                <i className="fa-solid fa-earth-americas"></i>
                <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
             </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>{t.hero.titulo.cargo}</h1>
            <h1>{t.hero.titulo.apresentacao} <span data-value="Gustavo Santos" className="highlight-underline">Gustavo Santos</span>.</h1>

            <p>{t.hero.subtitulo}</p>

            <br></br>

            <p>{t.hero.experiencia}</p>
            <section className="experience-container">
              <img src={BNDES} alt="BNDES" />
              <img src={Serpro} alt="Serpro" />
            </section>
            
            <section className="actions-container">
              <a href={t.hero.actions.curriculo_url} className="primary" target="_blank" rel="noopener noreferrer">{t.hero.actions.curriculo}</a>
              <a href="#habilidades" className="secondary">{t.hero.actions.habilidades}</a>
              <a href="#Projetos" className="secondary">{t.hero.actions.projetos}</a>
            </section>
          </div>

          <div className="hero-image">
            <img src={Eu} alt="Hero" fetchpriority="high" />
          </div>
        </section>

        <hr></hr>

        <section id="Sobre">
          <h2 className="highlight-underline">{t.sobre.titulo}</h2>
          <p>{t.sobre.subtitulo}</p>

          <div className="sobre-container">
            <div  className="sobre-text">
              <p className="bold">
                {t.sobre.paragrafoBold}
              </p>

              <p>
                {t.sobre.paragrafo1}
              </p>

               <p>
                {t.sobre.paragrafo2}
              </p>
            </div>

            <aside className="sobre-aside-highlight">
                <section>
                  <h2> {`${Math.floor((new Date() - new Date("2021-08-01")) / (1000 * 60 * 60 * 24 * 365.25))}+`} </h2>
                  <p>{t.sobre.destaques.experiencia}</p>
                </section>

                <div className="sobre-aside-highlight-grid">
                  <section className="highlight-grid-col">
                    <h4>{t.sobre.destaques.modelo.titulo}</h4>
                    <p>{t.sobre.destaques.modelo.dado}</p>
                  </section>

                    <section className="highlight-grid-col">
                      <h4>{t.sobre.destaques.metodos.titulo}</h4>
                      <p>{t.sobre.destaques.metodos.dado}</p>
                    </section>
                </div>

                <section className="highlight-grid-col">
                  <h4>{t.sobre.destaques.foco.titulo}</h4>
                  <p>{t.sobre.destaques.foco.dado}</p>
                </section>
            </aside>

          </div>
        </section>

        <hr></hr>

        <section id="Experiencia">
          <h2 className="highlight-underline">{t.experiencia.titulo}</h2>
          <p>{t.experiencia.subtitulo}</p>

          <div className="exp-container">
              {t.experiencia.experiencias.map((exp) => (
                <ExperienciaHighlight
                  key={`${exp.empresa}-${exp.cargo}`}
                  {...exp}
                />
              ))}
          </div>
        </section>

        <hr></hr>

        <section id="habilidades">
          <h2 className="highlight-underline">{t.habilidades.titulo}</h2>
          <p>{t.habilidades.subtitulo}</p>
          
          <div className="skills-container">
            
              {skills.map((s) => (
                  <SkillIcon key={s.name} name={s.name} icon={s.icon} />
              ))}

          </div>

        </section>

        <hr></hr>

        <section id="Projetos">
          <h2 className="highlight-underline">{t.projetos.titulo}</h2>
          <p>{t.projetos.subtitulo}</p>

          <div className="projects-container">

              {t.projetos.listaProjetos.map((projeto) => (
                  <ProjectCard
                    key={`${projeto.titulo}`}
                    {...projeto}
                    actions= {t.projetos.actions}
                    highlights= {t.projetos.highlights}
                  />
                ))}

          </div>
        </section>

        <hr></hr>

        <section id="Disclaimer"> 
          <p> <i className="fas fa-info-circle"></i> {t.disclaimer.mensagem}</p>
        </section>

        <hr></hr>

      </main>

      <footer>
        <h2> Gustavo <span className="highlight">Santos</span></h2>

        <span className="contact-info">
          <p className='contact'> <i className="fas fa-envelope"></i> <a href="mailto:gustavoolsantos.tech@gmail.com">gustavoolsantos.tech@gmail.com</a></p> 
          <p className='spacer'>  |  </p>
          <p className='contact'><i className="fas fa-phone"></i>+55 (21) 99235-1782</p>
        </span>

        <div className="social-icons">
            <a href="https://github.com/GustavoOlSantos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gustavoolsantos/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
        </div>
      </footer>

    </div>
  )
}

export default App;
