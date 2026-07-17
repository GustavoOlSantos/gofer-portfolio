import { useEffect } from 'react'

import Eu from './assets/eu.webp'
import SkillIcon from './components/skill-icon/'

import Serpro from './assets/Serpro.svg'
import BNDES from './assets/Bndes.webp'

import Java from './assets/icons/java.svg'
import SpringBoot from './assets/icons/spring.png'
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

import ProjectCard from './components/projetos-card/'
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
            <h1>Olá, tudo bem? </h1>
            <h1>Meu nome é <span data-value="Gustavo Santos" className="highlight-underline">Gustavo Santos</span>.</h1>

            <p>Desenvolvedor Full Stack com experiência em criar soluções digitais, preocupado com a qualidade, usabilidade e manutenibilidade dos produtos.</p>

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

        <section id="habilidades">
          <h2 className="highlight-underline">Habilidades</h2>
          <p>Tecnologias que tenho domínio</p>
          
          <div className="skills-container">
              <SkillIcon name="Java" icon={Java} />
              <SkillIcon name="Spring Boot" icon={SpringBoot} />
              <SkillIcon name="React" icon={ReactIcon} />
              <SkillIcon name="JavaScript" icon={JavaScript} />
              <SkillIcon name="TypeScript" icon={TypeScript} />
              <SkillIcon name="Cypress" icon={Cypress} />
              <SkillIcon name="Jquery" icon={Jquery} />
              <SkillIcon name="Docker" icon={Docker} />
              <SkillIcon name="PHP" icon={PHP} />
              <SkillIcon name="MySQL" icon={MySQL} />
              <SkillIcon name="MongoDB" icon={MongoDB} />
              <SkillIcon name="Git" icon={Git} />
              <SkillIcon name="GitHub" icon={GitHub} />
              <SkillIcon name="Bootstrap" icon={Bootstrap} />
              <SkillIcon name="HTML5" icon={HTML5} />
              <SkillIcon name="CSS3" icon={CSS3} />
          </div>

        </section>

        <hr></hr>

        <section id="Projetos">
          <h2 className="highlight-underline">Projetos</h2>
          <p>Alguns projetos que desenvolvi</p>

          <div className="projects-container">
            <ProjectCard
              title="SkillUp: Plataforma de Cursos"
              description="Plataforma Web EAD full stack desenvolvida com React e Spring Boot, utilizando autenticação JWT, MySQL e MongoDB."
              image={SkillUp}
              repo="https://github.com/GustavoOlSantos/plataforma-de-cursos"
              acesse="https://project-pritz.vercel.app/"

            />

            <ProjectCard
              title="ClinicaVet: Gestão de Clínica Veterinária"
              description="Aplicação desktop para registro de clientes e pets de uma clínica veterinária, utilizando JavaFX e MySQL."
              image={ClinicaVet}
              repo="https://github.com/GustavoOlSantos/ClinicaVet"
              acesse=""

            />

            <ProjectCard
              title="LLG: Gestão de Vendas de Sacolé"
              description="Aplicação web para gestão de vendas de sacolé, desenvolvida com PHP e MySQL."
              image={Llg}
              repo="https://github.com/GustavoOlSantos/vendasSacole"
              acesse=""

            />

            <ProjectCard
              title="Socket Criptografados: Compartilhamento de Arquivos"
              description="Sistema cliente-servidor para transferência segura de arquivos utilizando criptografia híbrida, desenvolvido com Java."
              image={SocketArquivosCriptografados}
              repo="https://github.com/GustavoOlSantos/SocketArquivosCriptografados"
              acesse=""
            />

            <ProjectCard
              title="Riex: Controle de Ordens de Serviço"
              description="Sistema web local para gestão e controle de ordens de serviço, integrado à microcontroladores, desenvolvido com PHP, MySQL e Arduinos."
              image={RiexOS}
              repo=""
              acesse=""
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

        <section id="Sobre">
          <h2 className="highlight-underline">Sobre mim</h2>
          <p>Um pouco sobre minha trajetória</p>

          <div  className="sobre-text">
            <p>
              Meu primeiro contato com programação aconteceu aos 15 anos, durante o curso técnico em Automação Industrial no CEFET/RJ. Desde então, venho construindo minha trajetória em desenvolvimento de software, conciliando formação acadêmica, experiências profissionais e projetos pessoais.
            </p>
            <p>
              Atualmente curso Ciência da Computação e atuo como estagiário em desenvolvimento de sistemas no BNDES, após também ter estagiado no Serpro. Ao longo da minha carreira, desenvolvi aplicações web full stack, APIs REST, testes automatizados, integrações de sistemas e soluções para automação de processos, utilizando principalmente Java, Spring Boot, React, PHP e bancos de dados SQL e NoSQL.
            </p>
            <p>
              Sou apaixonado por tecnologia e aprendizado contínuo. Gosto de entender como as soluções funcionam além da implementação, aplicando boas práticas de arquitetura, qualidade de software e automação para desenvolver aplicações escaláveis e bem estruturadas.
            </p>
          </div>
        </section>

        <hr></hr>

          <section id="Disclaimer"> 
            <p> <i className="fas fa-info-circle"></i> Os logotipos de empresas, tecnologias e demais marcas exibidos neste portfólio pertencem aos seus respectivos proprietários e são utilizados exclusivamente para fins informativos e de identificação da minha experiência profissional e das tecnologias empregadas nos projetos apresentados.</p>
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
