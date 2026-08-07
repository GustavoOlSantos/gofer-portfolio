import BNDES from "../assets/icons/bndesIcon.webp";
import Serpro from '../assets/icons/serproIcon.webp';
import Riex from '../assets/icons/riexIcon.webp';

import Java from '../assets/icons/java.svg'
import SpringBoot from '../assets/icons/spring.webp'
import ReactIcon from '../assets/icons/react.svg'
import JavaScript from '../assets/icons/js.svg'
import TypeScript from '../assets/icons/ts.svg'
import Cypress from '../assets/icons/cypress.webp'
import Jquery from '../assets/icons/jquery.svg'
import Docker from '../assets/icons/docker.svg'
import PHP from '../assets/icons/php.svg'
import MySQL from '../assets/icons/mysql.svg'
import MongoDB from '../assets/icons/mongo.svg'
import Git from '../assets/icons/git.svg'
import GitHub from '../assets/icons/github.svg'
import Bootstrap from '../assets/icons/bootstrap.svg'
import HTML5 from '../assets/icons/html-5.svg'
import CSS3 from '../assets/icons/css-3.svg'
import Maven from '../assets/icons/maven.svg'
import OracleDB from '../assets/icons/oracle-db.svg'
import SQLServer from '../assets/icons/sql-server.svg'
import Gitlab from '../assets/icons/gitlab.svg'
import Python from '../assets/icons/python.svg'
import SkillUp from '../assets/projects/SkillUp.webp'
import ClinicaVet from '../assets/projects/ClinicaVetJavaFX.webp'
import Llg from '../assets/projects/LLG.webp'
import SocketArquivosCriptografados from '../assets/projects/SocketCriptografado.webp'
import RiexOS from '../assets/projects/RiexOS.webp'
import Central from '../assets/projects/Central.webp'

export const translations = {
  pt: {
    hero: {
      titulo: {
        cargo: "Desenvolvedor Full Stack",
        apresentacao: "Meu nome é"
      },
      subtitulo: "Especializado em Java, Spring Boot e React, com experiência em desenvolvimento de aplicações corporativas, automação de processos e testes automatizados.",
      experiencia: "Experiência em empresas como:",
      actions: {
        curriculo: "Baixar Currículo",
        sobre: "Sobre mim",
        projetos: "Projetos"
      }
    },

    sobre: {
      titulo: "Sobre mim",
      subtitulo: "Um pouco sobre a minha trajetória",
      paragrafoBold: "Sou Gustavo Santos, Desenvolvedor Full Stack com foco em back-end Java/Spring, atuando com Spring Boot, Spring Security, JPA/Hibernate e APIs REST, além de experiência em front-end com React.",
      paragrafo1: "Atualmente atuo como estagiário em desenvolvimento de sistemas no BNDES, enquanto concluo meu curso de Ciência da Computação na Universidade Veiga de Almeida (UVA), utilizando, evoluindo, mantendo e desenvolvendo sistemas e portais institucionais utilizando Java, Bancos de Dados SQL, Gerenciadores de conteúdo (CMS) e integrando APIs REST.",
      paragrafo2: "Na minha atuação, também trabalhei com desenvolvimento de sistemas web, APIs REST, testes automatizados em Cypress, integração de sistemas e microcontroladores, automação de processos e tratamento de vulnerabilidades, aplicando boas práticas de desenvolvimento, arquitetura e qualidade de software.",
      destaques: {
        experiencia: "anos de experiência em desenvolvimento e manutenção de soluções web",
        modelo: {
            titulo:"Modelo de atuação",
            dado: "Remoto, Híbrido e Presencial"
        },
        metodos: {
            titulo: "Métodos de desenvolvimento",
            dado: "Scrum e Kanban"
        },
        foco: {
            titulo: "Foco de Atuação",
            dado: "Sistemas Web, CMS, APIs REST, Testes Automatizados e Integrações entre Sistemas."
        }
      }
    },

    experiencia: {
      titulo: "Carreira",
      subtitulo: "Uma visão geral das minhas experiências profissionais",

      experiencias: [
        {
            empresa: "BNDES",
            cargo: "Estagiário em Análise de Sistemas",
            periodo: "Agosto 2025 - Presente",
            icone: BNDES,
            atividades: [
              "Substituí um processo legado em Mainframe por uma solução digital integrada ao Portal Institucional, automatizando a publicação de repasses a estados e municípios — eliminando dependências legadas e garantindo conformidade com a Lei nº 9.452/1997.",
              "Reduzi em 50% a indisponibilidade no processamento de +4,8 milhões de documentos, otimizando queries SQL na camada de banco de dados e no processo de indexação SOLR no Portal Institucional.",
              "Conduzi estudo técnico sobre Dados Estruturados (Schema.org/JSON-LD) para o Blog do Desenvolvimento, definindo padrões alinhados ao Google para melhorar indexação e elegibilidade a Rich Results.",
              "Implementei e validei o serviço de notificações push (GCM) da Agência de Notícias do BNDES, com análises de segurança, auditabilidade e logging — entregando uma solução monitorável e aderente a governança.",
            ]
          },
          {
            empresa: "SERPRO",
            cargo: "Estagiário de Desenvolvimento",
            periodo: "Setembro 2024 - Julho 2025",
            icone: Serpro,
            atividades: [
              "Desenvolvi uma suíte completa de testes automatizados com Cypress para um sistema JSF, cobrindo todos os casos de uso — sucesso, falha e todo o ciclo de vida da entidade principal.",
              "Integrei os testes à pipeline do GitLab, garantindo execução automática a cada commit e notificação imediata ao dev quando uma alteração quebrasse alguma funcionalidade existente.",
              "Compartilhei conhecimento técnico com estagiários de outras equipes com a mesma missão de testes automatizados, sugerindo implementações e integrações.",
            ]
          },
          {
            empresa: "Riex Equips Contra Incêndio",
            cargo: "Desenvolvimento e Automação interna | Auxiliar de manutenção predial",
            periodo: "Novembro 2021 - Julho 2024",
            icone: Riex,
            atividades: [
              "Desenvolvimento de sistemas internos web para gestão e controle de Ordens de serviço, Estoque, e processos de teste, conferência e relatórios de Extintores e Mangueiras de incêndio, utilizando PHP, MySQL, HTML, CSS e JavaScript.",
              "Criação de endpoints para integração entre o sistema web e dispositivos baseados em Arduino, automatizando o acompanhamento de ordens de serviço da oficina.",
              "Instalação, administração e manutenção de ambientes Linux, servidores web, FTP e infraestrutura relacionada às aplicações internas.",
            ]
          }
      ],
    },

    habilidades: {
      titulo: "Habilidades",
      subtitulo: "Tecnologias que utilizo no dia a dia"
    },

    projetos: {
      titulo: "Projetos",
      subtitulo: "Alguns dos projetos que desenvolvi",

      listaProjetos: [
        {
            titulo: "SkillUp: Plataforma de Cursos",
            descricao: "Plataforma EAD full stack com autenticação JWT, persistência híbrida,logs estruturados, pipeline e arquitetura escalável.",
            image: SkillUp,
            repo: "https://github.com/GustavoOlSantos/plataforma-de-cursos",
            acesse: "https://project-pritz.vercel.app/",
            destaque: true,
            producao: false,
            stack: [ReactIcon, SpringBoot, Cypress, MySQL, MongoDB, Docker, JavaScript]
        },
        {
            titulo: "ClinicaVet: Gestão de Clínica Veterinária",
            descricao: "Aplicação desktop para registro de clientes e pets de uma clínica veterinária, utilizando padrão MVC, JavaFX e arquitetura escalável.",
            image: ClinicaVet,
            repo: "https://github.com/GustavoOlSantos/ClinicaVet",
            acesse: "",
            destaque: false,
            producao: false,
            stack: [Java, MySQL, Maven, CSS3] 
        },
        {
            titulo: "LLG: Gestão de Vendas de Sacolé",
            descricao: "Aplicação web para gestão de vendas de sacolé, desenvolvida com padrões MVC.",
            image: Llg,
            repo: "https://github.com/GustavoOlSantos/vendasSacole",
            acesse: "https://vendas-sacole.infinityfreeapp.com",
            destaque: false,
            producao: false,
            stack: [PHP, MySQL, HTML5, CSS3, Jquery, JavaScript]
        },
        {
            titulo: "Socket Criptografados: Compartilhamento de Arquivos",
            descricao: "Sistema cliente-servidor para transferência segura de arquivos utilizando criptografia híbrida, auditoria de envio e Logs de observação.",
            image: SocketArquivosCriptografados,
            repo: "https://github.com/GustavoOlSantos/SocketArquivosCriptografados",
            acesse: "",
            destaque: false,
            producao: false,
            stack: [Java]
        },
        {
            titulo: "Riex: Controle de Ordens de Serviço",
            descricao: "Sistema web local para gestão e controle de ordens de serviço, integrado à microcontroladores, desenvolvido com PHP, MySQL e Arduinos.",
            image: RiexOS,
            repo: "",
            acesse: "",
            destaque: false,
            producao: true,
            stack: [PHP, MySQL, HTML5, CSS3, Jquery, JavaScript, Bootstrap]
        },
        {
            titulo: "Riex: Central de combate à incêndios",
            descricao: "Sistema de monitoramento e controle de incêndios, desenvolvido com Arduino, em C++.",
            image: Central,
            repo: "",
            acesse: "",
            destaque: false,
            producao: true,
            stack: []
        }
      ],

      highlights: {
        principal: "⭐ Projeto Principal",
        producao: "🟢 Em Produção"
      },

      actions: {
        repositorio: "Ver repositório",
        acessar: "Acessar Projeto",
        tooltips: {
          semRepo: "Sem repositório disponível",
          semDeploy: "Sem deploy, apenas execução local"
        }
      }
    },

    disclaimer: {
      mensagem: "Os logotipos de empresas, tecnologias e marcas exibidos neste portfólio pertencem aos seus respectivos proprietários e são utilizados exclusivamente para fins informativos e de identificação da minha experiência profissional e das tecnologias empregadas nos projetos apresentados.",
    }
  },
    
 en: {
    hero: {
      titulo: {
        cargo: "Full Stack Developer",
        apresentacao: "My name is"
      },
      subtitulo: "Specialized in Java, Spring Boot and React, with experience in developing corporate applications, process automation and automated testing.",
      experiencia: "Experience in companies such as:",
      actions: {
        curriculo: "Download Resume",
        sobre: "About Me",
        projetos: "Projects"
      }
    },

    sobre: {
      titulo: "About me",
      subtitulo: "A bit about my journey",
      paragrafoBold: "I am Gustavo Santos, a Full Stack Developer with a focus on back-end Java/Spring, working with Spring Boot, Spring Security, JPA/Hibernate and REST APIs, as well as experience in front-end with React.",
      paragrafo1: "Currently, I work as an intern in system development at BNDES, while completing my Computer Science degree at Universidade Veiga de Almeida (UVA), using, evolving, maintaining and developing institutional systems and portals with Java, SQL Databases, Content Management Systems (CMS) and REST API integrations.",
      paragrafo2: "In my career, I have also worked with web system development, REST APIs, automated testing with Cypress, system and microcontroller integration, process automation and vulnerability handling, applying good development practices, architecture and software quality.",
      destaques: {
        experiencia: "years of experience developing and maintaining web solutions",
        modelo: {
          titulo: "Work Model",
          dado: "Remote, Hybrid and In-Person"
        },
        metodos: {
          titulo: "Development Methods",
          dado: "Scrum and Kanban"
        },
        foco: {
          titulo: "Focus Areas",
          dado: "Web Systems, CMS, REST APIs, Automated Testing and System Integrations."
        }
      }
    },

    experiencia: {
      titulo: "Career",
      subtitulo: "An overview of my professional experience",

      experiencias: [
        {
            empresa: "BNDES",
            cargo: "Systems Analysis Intern",
            periodo: "August 2025 - Present",
            icone: BNDES,
            atividades: [
              "Replaced a legacy Mainframe process with a digital solution integrated into the Institutional Portal, automating the publication of transfers to states and municipalities — eliminating legacy dependencies and ensuring compliance with Law No. 9.452/1997.",
              "Reduced downtime by 50% when processing over 4.8 million documents, by optimizing SQL queries at the database layer and the SOLR indexing process on the Institutional Portal.",
              "Conducted a technical study on Structured Data (Schema.org/JSON-LD) for the Development Blog, defining standards aligned with Google guidelines to improve indexing and eligibility for Rich Results.",
              "Implemented and validated the push notification service (GCM) for the BNDES News Agency, with security, auditability and logging analysis — delivering a monitorable solution compliant with governance requirements.",
            ]
          },
          {
            empresa: "SERPRO",
            cargo: "Development Intern",
            periodo: "September 2024 - July 2025",
            icone: Serpro,
            atividades: [
                "Developed a complete automated test suite with Cypress for a JSF system, covering all use cases — success, failure, and the full lifecycle of the main entity.",
                "Integrated the tests into the GitLab pipeline, ensuring automatic execution on every commit and immediate developer notification when a change broke existing functionality.",
                "Shared technical knowledge with interns from other teams working on the same automated testing mission, suggesting implementations and integrations.",
            ]
         },
        {
            empresa: "Riex Equips Contra Incêndio",
            cargo: "Internal Development and Automation | Building Maintenance Assistant",
            periodo: "November 2021 - July 2024",
            icone: Riex,
            atividades: [
              "Developed internal web systems for managing Service Orders, Inventory, and testing, inspection and reporting processes for fire extinguishers and fire hoses, using PHP, MySQL, HTML, CSS and JavaScript.",
              "Built endpoints to integrate the web system with Arduino-based devices, automating service order tracking in the workshop.",
              "Installed, administered and maintained Linux environments, web servers, FTP and infrastructure supporting internal applications.",
            ]
          }
      ],
    },

    habilidades: {
      titulo: "Skills",
      subtitulo: "Technologies I use on a daily basis",
    },

    projetos: {
      titulo: "Projects",
      subtitulo: "Some of the projects I've developed",

      listaProjetos: [
        {
            titulo: "SkillUp: Course Platform",
            descricao: "Full stack e-learning platform with JWT authentication, hybrid persistence, structured logging, CI/CD pipeline and scalable architecture.",
            image: SkillUp,
            repo: "https://github.com/GustavoOlSantos/plataforma-de-cursos",
            acesse: "https://project-pritz.vercel.app/",
            destaque: true,
            producao: false,
            stack: [ReactIcon, SpringBoot, Cypress, MySQL, MongoDB, Docker, JavaScript]
        },
        {
            titulo: "ClinicaVet: Veterinary Clinic Management",
            descricao: "Desktop application for registering veterinary clinic clients and pets, built with the MVC pattern, JavaFX and scalable architecture.",
            image: ClinicaVet,
            repo: "https://github.com/GustavoOlSantos/ClinicaVet",
            acesse: "",
            destaque: false,
            producao: false,
            stack: [Java, MySQL, Maven, CSS3] 
        },
        {
            titulo: "LLG: Popsicle Sales Management",
            descricao: "Web application for managing popsicle sales, developed with the MVC pattern.",
            image: Llg,
            repo: "https://github.com/GustavoOlSantos/vendasSacole",
            acesse: "https://vendas-sacole.infinityfreeapp.com",
            destaque: false,
            producao: false,
            stack: [PHP, MySQL, HTML5, CSS3, Jquery, JavaScript]
        },
        {
            titulo: "Encrypted Sockets: File Sharing",
            descricao: "Client-server system for secure file transfer using hybrid encryption, transfer auditing and observability logs.",
            image: SocketArquivosCriptografados,
            repo: "https://github.com/GustavoOlSantos/SocketArquivosCriptografados",
            acesse: "",
            destaque: false,
            producao: false,
            stack: [Java]
        },
        {
            titulo: "Riex: Service Order Control",
            descricao: "Local web system for managing and controlling service orders, integrated with microcontrollers, built with PHP, MySQL and Arduino.",
            image: RiexOS,
            repo: "",
            acesse: "",
            destaque: false,
            producao: true,
            stack: [PHP, MySQL, HTML5, CSS3, Jquery, JavaScript, Bootstrap]
        },
        {
            titulo: "Riex: Fire Suppression Control Panel",
            descricao: "Fire monitoring and control system, built with Arduino in C++.",
            image: Central,
            repo: "",
            acesse: "",
            destaque: false,
            producao: true,
            stack: []
        }
      ],

      highlights: {
        principal: "⭐ Featured Project",
        producao: "🟢 In Production"
      },

      actions: {
        repositorio: "View Repository",
        acessar: "View Project",
        tooltips: {
          semRepo: "No repository available",
          semDeploy: "No deployment, runs locally only"
        }
      }
    },

    disclaimer: {
      mensagem: "The logos of companies, technologies and brands displayed in this portfolio belong to their respective owners and are used solely for informational purposes and to identify my professional experience and the technologies employed in the projects presented.",
    }
  },
};
