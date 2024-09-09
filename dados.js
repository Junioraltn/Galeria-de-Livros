/*const palavras = ["Engenharia de Produção","Sistemas de Informação","Ciências de Dados","Cyberops (Operações Cibernéticas)",
    "Análise e Gerenciamento de Riscos","Análise Gerencial de Custos","Engenharia da Qualidade","Economia dos Transportes","Empreendedorismo e Inovação","Ciência de Dados em Engenharia de Produção",
    "Algoritmos e Estruturas de Dados","Banco de Dados","Engenharia de Software","Redes de Computadores","Sistemas Distribuídos","Segurança da Informação",
    "Algoritmos e Programação","Estatística e Probabilidade","Aprendizado de Máquina","Mineração de Dados","Visualização de Dados","Inteligência Artificial",
    "Fundamentos de Segurança Cibernética","Criptografia","Análise de Vulnerabilidades","Resposta a Incidentes","Segurança em Redes","Forense Digital",
    "Nigel Howard", "Ronald A. Howard", "Douglas Hubbard", "Carlone & Lopes", "Horngren", "Foster", "Datar","Deming", "Juran", "Crosby", "Feigenbaum","Samuelson", "Nordhaus", "Teixeira","Peter Drucker", "Dornelas", "Hisrich","Hastie", "Tibshirani", "Friedman", "James", "Witten", "Hastie", "Tibshirani"]
*/
let Cursos = [
    {
        Disciplinas: ["Engenharia de Produção","Sistemas de Informação","Ciências de Dados","Cyberops (Operações Cibernéticas)"],
    }
];
let Disciplinas = [
    {
        nome: "Engenharia de Produção",
        descricao:"", //Tempo de Curso;
        disciplinas: ["Análise e Gerenciamento de Riscos","Análise Gerencial de Custos","Engenharia da Qualidade","Economia dos Transportes","Empreendedorismo e Inovação","Ciência de Dados em Engenharia de Produção"],
    },
    {
        nome:"Sistemas de Informação",
        descricao:"",
        disciplinas:["Algoritmos e Estruturas de Dados","Banco de Dados","Engenharia de Software","Redes de Computadores","Sistemas Distribuídos","Segurança da Informação"]
    },
    {
        nome:"Ciências de Dados",
        descricao:"",
        disciplinas:["Algoritmos e Programação","Estatística e Probabilidade","Aprendizado de Máquina","Mineração de Dados","Visualização de Dados","Inteligência Artificial"]
    },
    {
        nome:"Cyberops (Operações Cibernéticas)",
        descricao:"",
        disciplinas:["Fundamentos de Segurança Cibernética","Criptografia","Análise de Vulnerabilidades","Resposta a Incidentes","Segurança em Redes","Forense Digital"]
    }
];
let AutoresClassicos = [
    {
        Nome: ["Nigel Howard", "Ronald A. Howard"],
        Curso:"Engenharia de Produção",
        Disciplina:"Análise e Gerenciamento de Riscos"
    }
];
let AutoresContemporâneos = [
    {
        Nome: ["Douglas Hubbard", "Carlone & Lopes"],
        Curso:"Engenharia de Produção",
        Disciplina:"Análise e Gerenciamento de Riscos"
    }
];
let Autores = [
    {
        Nome: ["Horngren", "Foster", "Datar"],
        Curso:"Engenharia de Produção",
        Disciplina:"Análise Gerencial de Custos"
    },
    {
        Nome: ["Deming", "Juran", "Crosby", "Feigenbaum"],
        Curso:"Engenharia de Produção",
        Disciplina:"Engenharia da Qualidade"
    },
    {
        Nome: ["Samuelson", "Nordhaus", "Teixeira"],
        Curso:"Engenharia de Produção",
        Disciplina:"Economia dos Transportes"
    },
    {
        Nome: ["Peter Drucker", "Dornelas", "Hisrich"],
        Curso:"Engenharia de Produção",
        Disciplina:"Empreendedorismo e Inovação"
    },
    {
        Nome: ["Hastie", "Tibshirani", "Friedman", "James", "Witten", "Hastie", "Tibshirani"],
        Curso:"Engenharia de Produção",
        Disciplina:"Ciência de Dados em Engenharia de Produção"
    }
];
//Busca por Titulos; Autores; Disciplinas; plavra-chave, curso
//Filtro por ano de publicação; Editora; assunto
//Ao clicar no livro, apresentar uma página com informações mais detalhadas, como resumo, índice, capítulos
//===================================================
let Palavras = [
    {nome:'Dados',nivel:1},
    {nome:'Cyberops',nivel:1},
    {nome:'Produção',nivel:1},
    {nome:'Sistemas',nivel:1},
    {nome:'Ciências',nivel:1},
    {nome:'Engenharia',nivel:1},
    {nome:'Informação',nivel:1},
    {nome:'Banco',nivel:2},
    {nome:'Redes',nivel:2},
    {nome:'Riscos',nivel:2},
    {nome:'Custos',nivel:2},
    {nome:'Análise',nivel:2},
    {nome:'Forense',nivel:2},
    {nome:'Digital',nivel:2},
    {nome:'Economia',nivel:2},
    {nome:'Inovação',nivel:2},
    {nome:'Resposta',nivel:2},
    {nome:'Gerencial',nivel:2},
    {nome:'Qualidade',nivel:2},
    {nome:'Segurança',nivel:2},
    {nome:'Mineração',nivel:2},
    {nome:'Operações',nivel:2},
    {nome:'Algoritmos',nivel:2},
    {nome:'Estruturas',nivel:2},
    {nome:'Artificial',nivel:2},
    {nome:'Incidentes',nivel:2},
    {nome:'Transportes',nivel:2},
    {nome:'Programação',nivel:2},
    {nome:'Estatística',nivel:2},
    {nome:'Aprendizado',nivel:2},
    {nome:'Fundamentos',nivel:2},
    {nome:'Cibernética',nivel:2},
    {nome:'Computadores',nivel:3},
    {nome:'Distribuídos',nivel:3},
    {nome:'Cibernética',nivel:3},
    {nome:'Criptografia',nivel:3},
    {nome:'Gerenciamento',nivel:3},
    {nome:'Software',nivel:3},
    {nome:'Empreendedorismo',nivel:3},
    {nome:'Vulnerabilidades',nivel:3},
    ];

    let Dados = [];
