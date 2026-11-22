import BNDES from "../assets/icons/bndesIcon.webp";
import Serpro from '../assets/icons/serproIcon.webp';
import Riex from '../assets/icons/riexIcon.webp';

import Java from '../assets/icons/java.svg'
import SpringBoot from '../assets/icons/spring.webp'
import RabbitMQ from '../assets/icons/rabbitmq.svg'
import ReactIcon from '../assets/icons/react.svg'
import JavaScript from '../assets/icons/js.svg'
import Cypress from '../assets/icons/cypress.webp'
import Jquery from '../assets/icons/jquery.svg'
import Docker from '../assets/icons/docker.svg'
import PHP from '../assets/icons/php.svg'
import MySQL from '../assets/icons/mysql.svg'
import MongoDB from '../assets/icons/mongo.svg'
import Bootstrap from '../assets/icons/bootstrap.svg'
import HTML5 from '../assets/icons/html-5.svg'
import CSS3 from '../assets/icons/css-3.svg'
import Maven from '../assets/icons/maven.svg'
import GitHubActions from '../assets/icons/github-actions.svg'
import SkillUp from '../assets/projects/SkillUp.webp'
import Sentry from '../assets/projects/Sentry.png'
import ClinicaVet from '../assets/projects/ClinicaVetJavaFX.webp'
import Llg from '../assets/projects/LLG.webp'
import SocketArquivosCriptografados from '../assets/projects/SocketCriptografado.webp'
import RiexOS from '../assets/projects/RiexOS.webp'
import Central from '../assets/projects/Central.webp'

export const translations = {
  pt: {
    hero: {
      titulo: {
        cargo: "Desenvolvedor Full Stack Java Júnior",
        apresentacao: "Meu nome é"
      },
      subtitulo: "Desenvolvedor com foco em backend Java, experiência no desenvolvimento e manutenção de aplicações corporativas, APIs REST, integração de sistemas e automação de processos. Atuação com Spring Boot, React e práticas de qualidade de software.",
      experiencia: "Experiência em empresas como:",
      actions: {
        curriculo: "Baixar Currículo",
        curriculo_url: "https://res.cloudinary.com/dvzuxbm5h/image/upload/v1786496228/Gustavo_O_F_dos_Santos_eyy74v.pdf",
        habilidades: "Habilidades",
        projetos: "Projetos"
      }
    },

    sobre: {
      titulo: "Sobre mim",
      subtitulo: "Um pouco sobre a minha trajetória",
      paragrafoBold: "Sou Gustavo Santos, Desenvolvedor Full Stack com foco em backend Java, trabalhando com Spring Boot, Spring Security, JPA/Hibernate e APIs REST, além de experiência no desenvolvimento de interfaces com React.",
      paragrafo1: "Atualmente, atuo no desenvolvimento e manutenção de sistemas no BNDES, enquanto concluo minha graduação em Ciência da Computação na Universidade Veiga de Almeida (UVA). Trabalho com aplicações corporativas, portais institucionais, bancos de dados relacionais, CMS e integrações entre sistemas.",
      paragrafo2: "Ao longo da minha trajetória, também trabalhei com desenvolvimento web, automação de processos, testes automatizados com Cypress, integração de sistemas e microcontroladores. Busco aplicar boas práticas de desenvolvimento, organização de código e qualidade de software nas soluções que construo.",
      destaques: {
        experiencia: "anos de experiência em desenvolvimento e manutenção de soluções web",
        modelo: {
          titulo: "Modelo de atuação",
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
          periodo: "Julho 2025 - Presente",
          icone: BNDES,
          atividades: [
            "Substituí um processo legado em Mainframe por uma solução digital integrada ao Portal Institucional, automatizando a publicação de repasses a estados e municípios e garantindo conformidade com a Lei nº 9.452/1997.",
            "Contribuí para reduzir em 50% a indisponibilidade no processamento de mais de 4,8 milhões de documentos, por meio da otimização de consultas SQL e do processo de indexação Solr.",
            "Conduzi estudo técnico sobre Dados Estruturados (Schema.org/JSON-LD) para o Blog do Desenvolvimento, definindo padrões alinhados às diretrizes do Google para melhorar a indexação e a elegibilidade a Rich Results.",
            "Implementei e validei o serviço de notificações push (GCM) da Agência de Notícias do BNDES, com análises de segurança, auditabilidade e logging."
          ]
        },
        {
          empresa: "SERPRO",
          cargo: "Estagiário de Desenvolvimento",
          periodo: "Setembro 2024 - Julho 2025",
          icone: Serpro,
          atividades: [
            "Participei do desenvolvimento, refatoração, manutenção e depuração de aplicações Java/Spring Boot e sistemas legados em JSF.",
            "Desenvolvi uma suíte de testes automatizados com Cypress, cobrindo cenários de sucesso, falha e o ciclo de vida das principais funcionalidades do sistema.",
            "Integrei os testes à pipeline do GitLab, garantindo execução automática a cada commit e notificações sobre regressões. Também compartilhei conhecimento técnico e sugestões de implementação com outras equipes."
          ]
        },
        {
          empresa: "Riex Equips Contra Incêndio",
          cargo: "Desenvolvimento e Automação Interna | Auxiliar de Manutenção Predial",
          periodo: "Novembro 2021 - Agosto 2024",
          icone: Riex,
          atividades: [
            "Desenvolvi sistemas web internos para gestão de ordens de serviço, estoque e processos de inspeção e relatórios, utilizando PHP, MySQL, HTML, CSS e JavaScript.",
            "Implementei endpoints para integração entre sistemas web e dispositivos Arduino, além de administrar ambientes Linux, servidores web, FTP e infraestrutura das aplicações."
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
          titulo: "Sentry: Gestão de Vulnerabilidades e Segurança",
          descricao: "Plataforma full stack para descoberta de ativos e serviços de rede, identificação de vulnerabilidades com base na NVD/CVE e avaliação automatizada de configurações de segurança em ambientes autorizados.",
          image: Sentry,
          repo: "https://github.com/GustavoOlSantos/sentry",
          acesse: "",
          destaque: true,
          producao: false,
          desenvolvimento: false,
          stack: [Java, SpringBoot, RabbitMQ, ReactIcon, JavaScript, MySQL, Docker, Cypress]
        },
        {
          titulo: "SkillUp: Plataforma de Cursos Online",
          descricao: "Plataforma EAD full stack com autenticação JWT, gerenciamento de cursos e avaliações, persistência com MySQL e MongoDB, logging estruturado e pipeline CI/CD com testes automatizados.",
          image: SkillUp,
          repo: "https://github.com/GustavoOlSantos/skill-up",
          acesse: "https://skillup.gustavoolsantos.dev.br/",
          destaque: true,
          desenvolvimento: false,
          producao: false,
          stack: [ReactIcon, SpringBoot, JavaScript, MySQL, MongoDB, Cypress, Docker, GitHubActions]
        },
        {
            titulo: "ClinicaVet: Sistema de Gestão Veterinária",
            descricao: "Aplicação desktop para registro de clientes e pets de uma clínica veterinária, utilizando padrão MVC, JavaFX e arquitetura Database Agnostic.",
            image: ClinicaVet,
            repo: "https://github.com/GustavoOlSantos/ClinicaVet",
            acesse: "",
            destaque: false,
            desenvolvimento: false,
            producao: false,
            stack: [Java, MySQL, Maven, CSS3, Docker, GitHubActions] 
        },
        {
            titulo: "LLG_Sacoles: Gestão de Vendas de Sacolé",
            descricao: "Sistema web de gerenciamento de vendas e estoque de sacolés, desenvolvida com padrões MVC e clean code.",
            image: Llg,
            repo: "https://github.com/GustavoOlSantos/LLG_Sacoles",
            acesse: "https://llgsacoles.gustavoolsantos.dev.br",
            destaque: false,
            producao: false,
            stack: [PHP, MySQL, CSS3, Bootstrap, JavaScript, Cypress, Docker, GitHubActions]
        },
        // {
        //     titulo: "Socket Criptografados: Compartilhamento de Arquivos",
        //     descricao: "Sistema cliente-servidor para transferência segura de arquivos utilizando criptografia híbrida, auditoria de envio e Logs de observação.",
        //     image: SocketArquivosCriptografados,
        //     repo: "https://github.com/GustavoOlSantos/SocketArquivosCriptografados",
        //     acesse: "",
        //     destaque: false,
        //     producao: false,
        //     stack: [Java]
        // },
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
        desenvolvimento: "⚒️ Desenvolvimento",
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
    }, 

    seo: {
      title: 'Gustavo Santos | Desenvolvedor Full Stack Júnior',
      description: 'Portfólio de Gustavo Santos, Desenvolvedor Full Stack Júnior especializado em Java, Spring Boot e React. Experiência com BNDES, SERPRO, APIs REST, Cypress e bancos de dados.',
      ogTitle: 'Gustavo Santos | Desenvolvedor Full Stack Júnior',
      ogDescription: 'Portfólio de Gustavo Santos, Desenvolvedor Full Stack Júnior especializado em Java, Spring Boot e React.',
      locale: 'pt_BR'
    }
  },
    
 en: {
    hero: {
      titulo: {
        cargo: "Junior Full Stack Java Developer",
        apresentacao: "My name is"
      },
      subtitulo: "Backend-focused developer with experience in corporate applications, REST APIs, system integration and process automation. Working with Java, Spring Boot, React and software quality practices.",
      experiencia: "Experience at companies such as:",
      actions: {
        curriculo: "Download Resume",
        curriculo_url: "https://res.cloudinary.com/dvzuxbm5h/image/upload/v1786496209/Gustavo_O_F_dos_Santos_-_en_y47g7f.pdf",
        habilidades: "Skills",
        projetos: "Projects"
      }
    },

    sobre: {
      titulo: "About me",
      subtitulo: "A bit about my journey",
      paragrafoBold: "I am Gustavo Santos, a Full Stack Developer focused on Java backend development, working with Spring Boot, Spring Security, JPA/Hibernate and REST APIs, as well as frontend development with React.",
      paragrafo1: "I currently work with systems development and maintenance at BNDES while completing my Computer Science degree at Universidade Veiga de Almeida (UVA). My work involves corporate applications, institutional portals, relational databases, CMS platforms and system integrations.",
      paragrafo2: "Throughout my career, I have also worked with web development, process automation, Cypress automated testing, system integration and microcontrollers. I focus on applying software development best practices, code organization and quality assurance.",
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
          periodo: "July 2025 - Present",
          icone: BNDES,
          atividades: [
            "Replaced a legacy Mainframe process with a digital solution integrated into the Institutional Portal, automating the publication of transfers to states and municipalities while ensuring compliance with Law No. 9.452/1997.",
            "Contributed to a 50% reduction in downtime when processing over 4.8 million documents through SQL query optimization and improvements to the Solr indexing process.",
            "Conducted a technical study on Structured Data (Schema.org/JSON-LD) for the Development Blog, defining standards aligned with Google guidelines to improve indexing and eligibility for Rich Results.",
            "Implemented and validated the push notification service (GCM) for the BNDES News Agency, including security, auditability and logging analysis."
          ]
        },
        {
          empresa: "SERPRO",
          cargo: "Development Intern",
          periodo: "September 2024 - July 2025",
          icone: Serpro,
          atividades: [
            "Participated in the development, refactoring, maintenance and debugging of Java/Spring Boot applications and legacy JSF systems.",
            "Developed an automated Cypress test suite covering success and failure scenarios, as well as the lifecycle of the system's main functionalities.",
            "Integrated automated tests into the GitLab pipeline, ensuring execution on every commit and notifications about regressions. Also shared technical knowledge and implementation suggestions with other teams."
          ]
        },
        {
          empresa: "Riex Equips Contra Incêndio",
          cargo: "Internal Development and Automation | Building Maintenance Assistant",
          periodo: "November 2021 - August 2024",
          icone: Riex,
          atividades: [
            "Developed internal web systems for managing service orders, inventory, inspections and reporting processes using PHP, MySQL, HTML, CSS and JavaScript.",
            "Built endpoints to integrate web systems with Arduino-based devices, while also maintaining Linux environments, web servers, FTP and application infrastructure."
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
          titulo: "Sentry: Vulnerability and Security Management",
          descricao: "Full stack platform for discovering network assets and services, identifying vulnerabilities based on NVD/CVE data and automatically assessing security configurations in authorized environments.",
          image: Sentry,
          repo: "https://github.com/GustavoOlSantos/sentry",
          acesse: "",
          destaque: true,
          producao: false,
          desenvolvimento: false,
          stack: [Java, SpringBoot, RabbitMQ, ReactIcon, JavaScript, MySQL, Docker, Cypress]
        },
        {
          titulo: "SkillUp: Online Course Platform",
          descricao: "Full stack e-learning platform with JWT authentication, course and review management, MySQL and MongoDB persistence, structured logging, CI/CD pipeline and automated testing.",
          image: SkillUp,
          repo: "https://github.com/GustavoOlSantos/skill-up",
          acesse: "https://skillup.gustavoolsantos.dev.br/",
          destaque: true,
          producao: false,
          desenvolvimento: false,
          stack: [ReactIcon, SpringBoot, JavaScript, MySQL, MongoDB, Cypress, Docker, GitHubActions]
        },
        {
            titulo: "ClinicaVet: Veterinary Clinic Management System",
            descricao: "Desktop application for registering veterinary clinic clients and pets, built with the MVC pattern, JavaFX and Database Agnostic architecture.",
            image: ClinicaVet,
            repo: "https://github.com/GustavoOlSantos/ClinicaVet",
            acesse: "",
            destaque: false,
            producao: false,
            stack: [Java, MySQL, Maven, CSS3, Docker, GitHubActions] 
        },
        {
            titulo: "LLG_Sacoles: Popsicle Sales Management",
            descricao: "Web application for managing popsicle sales, developed with the MVC pattern.",
            image: Llg,
            repo: "https://github.com/GustavoOlSantos/LLG_Sacoles",
            acesse: "https://llgsacoles.gustavoolsantos.dev.br",
            destaque: false,
            producao: false,
            stack: [PHP, MySQL, CSS3, Bootstrap, JavaScript, Cypress, Docker, GitHubActions]
        },
        // {
        //     titulo: "Encrypted Sockets: File Sharing",
        //     descricao: "Client-server system for secure file transfer using hybrid encryption, transfer auditing and observability logs.",
        //     image: SocketArquivosCriptografados,
        //     repo: "https://github.com/GustavoOlSantos/SocketArquivosCriptografados",
        //     acesse: "",
        //     destaque: false,
        //     producao: false,
        //     stack: [Java]
        // },
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
        desenvolvimento: "⚒️ In Development",
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
    },

    seo: {
      title: 'Gustavo Santos | Junior Full Stack Developer',
      description: 'Portfolio of Gustavo Santos, Junior Full Stack Developer specialized in Java, Spring Boot and React. Experience with BNDES, SERPRO, REST APIs, Cypress and databases.',
      ogTitle: 'Gustavo Santos | Junior Full Stack Developer',
      ogDescription: 'Portfolio of Gustavo Santos, Junior Full Stack Developer specialized in Java, Spring Boot and React.',
      locale: 'en_US'
    },
  },
};
