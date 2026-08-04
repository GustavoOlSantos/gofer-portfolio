import { useEffect } from 'react'

import SkillIcon from './components/skill-icon/'
import ProjectCard from './components/projetos-card/'
import ExperienciaHighlight from './components/experiecia-hightlight/'

import { experiencias } from './data/experiencias.js'

import Eu from './assets/eu.webp'

import Serpro from './assets/Serpro.svg'
import BNDES from './assets/Bndes.webp'

import Java from './assets/icons/java.svg'
import SpringBoot from './assets/icons/spring.webp'
import ReactIcon from './assets/icons/react.svg'
import JavaScript from './assets/icons/js.svg'
import TypeScript from './assets/icons/ts.svg'
import Cypress from './assets/icons/cypress.webp'
import Jquery from './assets/icons/jquery.svg'
import Docker from './assets/icons/docker.svg'
import PHP from './assets/icons/php.svg'
import MySQL from './assets/icons/mysql.svg'
import MongoDB from './assets/icons/mongo.svg'
import Git from './assets/icons/git.svg'
import GitHub from './assets/icons/github.svg'
import Bootstrap from './assets/icons/bootstrap.svg'
import HTML5 from './assets/icons/html-5.svg'
import CSS3 from './assets/icons/css-3.svg'
import Maven from './assets/icons/maven.svg'
import OracleDB from './assets/icons/oracle-db.svg'
import SQLServer from './assets/icons/sql-server.svg'
import Gitlab from './assets/icons/gitlab.svg'
import Python from './assets/icons/python.svg'
import SkillUp from './assets/projects/SkillUp.webp'
import ClinicaVet from './assets/projects/ClinicaVetJavaFX.webp'
import Llg from './assets/projects/LLG.webp'
import SocketArquivosCriptografados from './assets/projects/SocketCriptografado.webp'
import RiexOS from './assets/projects/RiexOS.webp'
import Central from './assets/projects/Central.webp'

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

  return (
    <div className="App">

      <header>
        <h2> Gustavo <span className="highlight">Santos</span></h2>

        <div className="social-icons">
            <a href="https://github.com/GustavoOlSantos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-of-santos/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Desenvolvedor Full Stack</h1>
            <h1>Meu nome é <span data-value="Gustavo Santos" className="highlight-underline">Gustavo Santos</span>.</h1>

            <p>Especializado em Java, Spring Boot e React, com experiência em desenvolvimento de aplicações corporativas, automação de processos e testes automatizados.</p>

            <br></br>

            <p>Experiência em empresas como:</p>
            <section className="experience-container">
              <img src={Serpro} alt="Serpro" />
              <img src={BNDES} alt="BNDES" />
            </section>
            
            <section className="actions-container">
              <a href="https://res.cloudinary.com/dvzuxbm5h/image/upload/v1784268918/Gustavo_O_F_dos_Santos_eyy74v.pdf" className="primary" target="_blank" rel="noopener noreferrer">Baixar Currículo</a>
              <a href="#Sobre" className="secondary">Sobre mim</a>
              <a href="#Projetos" className="secondary">Projetos</a>
            </section>
          </div>

          <div className="hero-image">
            <img src={Eu} alt="Hero" />
          </div>
        </section>

        <hr></hr>

        <section id="Sobre">
          <h2 className="highlight-underline">Sobre mim</h2>
          <p>Um pouco sobre minha trajetória</p>

          <div className="sobre-container">
            <div  className="sobre-text">
              <p className="bold">
                Sou Gustavo Santos, Desenvolvedor Full Stack com foco em back-end Java/Spring, atuando com Spring Boot, Spring Security, 
                JPA/Hibernate e APIs REST, além de experiência em front-end com React. 
              </p>

              <p>
                Atualmente atuo como estagiário em desenvolvimento de sistemas no <b>BNDES</b>, enquanto concluo meu curso de 
                Ciência da Computação na <b>Universidade Veiga de Almeida (UVA)</b>, utilizando evoluindo, mantendo e desenvolvendo sistemas
                e portais institucionais utilizando Java, Bancos de Dados SQL, Gerenciadores de conteúdo (CMS) e integrando APIs REST.
              </p>

               <p>
                Na minha atuação, também trabalhei com desenvolvimento de sistemas web, APIs REST, testes automatizados em Cypress, 
                integração de sistemas e microcontroladores, automação de processos e tratamento de vulnerabilidades, aplicando boas práticas de desenvolvimento, arquitetura e qualidade de software.
              </p>
            </div>

            <aside className="sobre-aside-highlight">
                <section>
                  <h2> {`${Math.floor((new Date() - new Date("2021-08-01")) / (1000 * 60 * 60 * 24 * 365.25))}+`} </h2>
                  <p>anos de experiência em desenvolvimento e manutenção de soluções web</p>
                </section>

                <div className="sobre-aside-highlight-grid">
                  <section className="highlight-grid-col">
                    <h4>Modelo de atuação</h4>
                    <p>Remoto, Híbrido e Presencial</p>
                  </section>

                    <section className="highlight-grid-col">
                      <h4>Métodos de desenvolvimento</h4>
                      <p>Scrum e Kanban.</p>
                    </section>
                </div>

                <section className="highlight-grid-col">
                  <h4>Foco de Atuação</h4>
                  <p>Sistemas Web, CMS,  APIs REST, Testes Automatizados e Integrações entre Sistemas.</p>
                </section>
            </aside>

          </div>
        </section>

        <hr></hr>

        <section id="habilidades">
          <h2 className="highlight-underline">Habilidades</h2>
          <p>Tecnologias que uso no dia a dia</p>
          
          <div className="skills-container">
              <SkillIcon name="Java" icon={Java} />
              <SkillIcon name="Spring Boot" icon={SpringBoot} />
              <SkillIcon name="React" icon={ReactIcon} />
              <SkillIcon name="Docker" icon={Docker} />
              <SkillIcon name="JavaScript" icon={JavaScript} />
              <SkillIcon name="TypeScript" icon={TypeScript} />
              <SkillIcon name="Cypress" icon={Cypress} />
              <SkillIcon name="MySQL" icon={MySQL} />
              <SkillIcon name="Oracle" icon={OracleDB} />
              <SkillIcon name="SQL Server" icon={SQLServer} />
              <SkillIcon name="MongoDB" icon={MongoDB} />
              <SkillIcon name="Git" icon={Git} />
              <SkillIcon name="GitHub" icon={GitHub} />
              <SkillIcon name="Gitlab" icon={Gitlab} />
              {/* <SkillIcon name="Jquery" icon={Jquery} /> */}
              <SkillIcon name="PHP" icon={PHP} />
              <SkillIcon name="Python" icon={Python} />
              <SkillIcon name="Bootstrap" icon={Bootstrap} />
              <SkillIcon name="HTML5" icon={HTML5} />
              <SkillIcon name="CSS3" icon={CSS3} />
          </div>

        </section>

        <hr></hr>

        <section id="Experiencia">
          <h2 className="highlight-underline">Carreira</h2>
          <p>Uma visão geral das minhas experiências profissionais</p>

          <div className="exp-container">
              {experiencias.map((exp) => (
                <ExperienciaHighlight
                  key={`${exp.empresa}-${exp.cargo}`}
                  {...exp}
                />
              ))}
          </div>
        </section>

        <hr></hr>

        <section id="Projetos">
          <h2 className="highlight-underline">Projetos pessoais</h2>
          <p>Alguns projetos que desenvolvi</p>

          <div className="projects-container">
            <ProjectCard
              title="SkillUp: Plataforma de Cursos"
              description="Plataforma EAD full stack com autenticação JWT, persistência híbrida,logs estruturados, pipeline e arquitetura escalável."
              image={SkillUp}
              repo="https://github.com/GustavoOlSantos/plataforma-de-cursos"
              acesse="https://project-pritz.vercel.app/"
              destaque={true}
              stack={[ReactIcon, SpringBoot, Cypress, MySQL, MongoDB, Docker, JavaScript]}
            />

            <ProjectCard
              title="ClinicaVet: Gestão de Clínica Veterinária"
              description="Aplicação desktop para registro de clientes e pets de uma clínica veterinária, utilizando padrão MVC, JavaFX e arquitetura escalável."
              image={ClinicaVet}
              repo="https://github.com/GustavoOlSantos/ClinicaVet"
              acesse=""
              stack={[Java, MySQL, Maven, CSS3]}
            />

            <ProjectCard
              title="LLG: Gestão de Vendas de Sacolé"
              description="Aplicação web para gestão de vendas de sacolé, desenvolvida com padrões MVC."
              image={Llg}
              repo="https://github.com/GustavoOlSantos/vendasSacole"
              acesse="https://vendas-sacole.infinityfreeapp.com"
              stack={[PHP, MySQL, HTML5, CSS3, Jquery, JavaScript]}
            />

            <ProjectCard
              title="Socket Criptografados: Compartilhamento de Arquivos"
              description="Sistema cliente-servidor para transferência segura de arquivos utilizando criptografia híbrida, auditoria de envio e Logs de observação."
              image={SocketArquivosCriptografados}
              repo="https://github.com/GustavoOlSantos/SocketArquivosCriptografados"
              acesse=""
              stack={[Java]}
            />

            <ProjectCard
              title="Riex: Controle de Ordens de Serviço"
              description="Sistema web local para gestão e controle de ordens de serviço, integrado à microcontroladores, desenvolvido com PHP, MySQL e Arduinos."
              image={RiexOS}
              repo=""
              acesse=""
              stack={[PHP, MySQL, HTML5, CSS3, Jquery, JavaScript, Bootstrap]}
            />

            <ProjectCard
              title="Riex: Central de combate à incêndios"
              description="Sistema de monitoramento e controle de incêndios, desenvolvido com Arduino, em C++."
              image={Central}
              repo=""
              acesse=""
            />
          </div>
        </section>

        <hr></hr>

        <section id="Disclaimer"> 
          <p> <i className="fas fa-info-circle"></i> Os logotipos de empresas, tecnologias e marcas exibidos neste portfólio pertencem aos seus respectivos proprietários e são utilizados exclusivamente para fins informativos e de identificação da minha experiência profissional e das tecnologias empregadas nos projetos apresentados.</p>
        </section>

        <hr></hr>

      </main>

      <footer>
        <h2> Gustavo <span className="highlight">Santos</span></h2>

        <span className="contact-info">
          <p className='contact'> <i className="fas fa-envelope"></i> santos.gustavo.of@gmail.com</p> 
          <p className='spacer'>  |  </p>
          <p className='contact'><i className="fas fa-phone"></i>+55 (21) 99235-1782</p>
        </span>

        <div className="social-icons">
            <a href="https://github.com/GustavoOlSantos" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/gustavo-of-santos/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
        </div>
      </footer>

    </div>
  )
}

export default App;
