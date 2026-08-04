import BNDES from "../assets/icons/bndesIcon.webp";
import Serpro from '../assets/icons/serproIcon.webp';
import Riex from '../assets/icons/riexIcon.webp';

export const experiencias = [
  {
    empresa: "BNDES",
    cargo: "Estagiário em Análise de Sistemas",
    periodo: "Agosto 2025 - Presente",
    icone: BNDES,
    atividades: [
      "Substituí um processo legado em Mainframe por uma solução digital integrada ao Portal Institucional, automatizando a publicação de repasses a estados e municípios — eliminando dependências legadas e garantindo conformidade com a Lei nº 9.452/1997.",
      "Reduzi de 4h para 1h30 a indisponibilidade no processamento de +4,8 milhões de documentos, otimizando queries SQL, JOINs e indexação SOLR na camada de banco de dados do BNDES.",
      "Conduzi estudo técnico sobre Dados Estruturados (Schema.org/JSON-LD) para o Portal e Blog Institucional, definindo padrões alinhados ao Google para melhorar indexação e elegibilidade a Rich Results.",
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
    cargo: "Estagiário de Desenvolvimento",
    periodo: "Novembro 2021 - Julho 2024",
    icone: Riex,
    atividades: [
      "Desenvolvimento de sistemas internos web para gestão e controle de Ordens de serviço, Estoque, e processos de teste, conferência e relatórios de Extintores e Mangueiras de incêndio, utilizando PHP, MySQL, HTML, CSS e JavaScript.",
      "Criação de endpoints para integração entre o sistema web e dispositivos baseados em Arduino, automatizando o acompanhamento de ordens de serviço da oficina.",
      "Instalação, administração e manutenção de ambientes Linux, servidores web, FTP e infraestrutura relacionada às aplicações internas.",
    ]
  }
];