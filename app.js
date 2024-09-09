let demostrativo = `<h3 style="color: black;">Armazenamos livros dos Cursos de:"</h3>
                    <ul>
                        <strong>
                        <li>Engenharia de Produção</li>
                        <li>Sistemas de Informação</li>
                        <li>Ciências de Dados</li>
                        <li>Cyberops (Operações Cibernéticas)</li>
                    </strong>
                      </ul>`;// Apresentação da página ao iniciar
const caracteresEspeciais = [
    // Espaços em branco
  ' ', '\t', '\n', '\r',
  // Pontuação
  '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~',
  // Outros caracteres especiais comuns
  '°', '¢', '£', '¥', '€', '§', '©', '®', '™', '•', '·', '–', '—', '‘','‘’', '‘’', '“”', '“”', '‹', '›', '«', '»'
];//Caracteres que indicam o fim de uma palavra
let palavras = [];//                                      Irá armazenar as palavras da caixa de texto
let palavraAtual = "";//                                  Usada para montar a palavra a cada interação
let i = 1;//                                              Contador de caracteres
let caractere = "";//                                     Variavel que representa o caracter em uma posição i
function separarPalavras(texto, caracteresEspeciais) {//  Separar as palavras e armazenar (dicionário) o numero de caracteres
  palavras = [];
  palavraAtual = "";
  i =1;
  while (i < texto.length) {//                            Faz a interação para cada caracter dentro de texto
      caractere = texto[i];
      if(caracteresEspeciais.includes(caractere)) {//     Verifica se o caractere é um delimitador
          if (palavraAtual.length > 3) {palavras.push({ palavra: palavraAtual.trim(), indice: i-1 });}
          palavraAtual = "";//                            Palavras sendo interadas
          i+=1;
          continue;}
      palavraAtual += caractere;//                        Formando palavras
      i+=1;}
      if (palavraAtual.trim() !== "" && (palavraAtual.length > 3)) {palavras.push({ palavra: palavraAtual.trim(), indice: i-1 });}
  return palavras;}

let input = document.getElementById('meuInput');//        Faz referência a campo de pesquisa da página
let AreaResultado = document.getElementById("Resultados");//Faz referência a seção da página onde o resultado será mostrado
let pivo = 0;//                                           Contador de letras, palavras, interações...
let BandoDeDados = Biblioteca;//                          É o banco de dados que será pesquisado

//Para armazenar os valores das propriedades dos objetos buscados
  let curso = "";
  let titulo = "";
  let descricao ="";
  let resumo = "";
  let palavrasChave = "";
  let disciplina = "";
  let autor ="";

let tamanhoPesquisa = 0;//                                É o dominio da pesquisa

let HistoricoPesquisa =[[]];//                            Registra a palavra pesquisada e o indice do objeto encontrado
let testeHistorico =false;//                              Afirma se a palavra já foi pesquisada
let corredor = 0;//                                       Usado para identificar os elementos de pesquisa

let obEncontrados = [];//                                 Objetos Já incluidos em resultado
let resultado="";//                                       É o produto resultante da pesquisa
let campoPesquisa = "";//                                 Irá armazenar os valores do campo de pesquisa
let resultadoPalavras = {};//                             É onde são armazenadas as palavras que serão pesquisadas e o seu tamanho !!(Será usado para Interação semelhante ao RX)!!

function Pesquisa(){

  campoPesquisa = input.value;//                          Pega o valor do campo de pesquisa

  if (campoPesquisa.trim() === ""){//                     Verifica se o campo de pesquisa está vazio
    AreaResultado.innerHTML = "<h2>Campo de pesquisa Vazio</h2>" + demostrativo;
    return;}

  resultadoPalavras = separarPalavras(campoPesquisa.toLowerCase(), caracteresEspeciais);//Faça a limpeza e separação das palavras do campo de pesquisa

  if (resultadoPalavras.length < 1){//                    Verifica e retorna mensagem se campo de pesquisa estiver vazio
    AreaResultado.innerHTML = "<h2>Campo de pesquisa não possui palavras-Chave</h2>" + demostrativo;
    return;}

  resultado="";//                                         Garante que a saida inicie limpa
  obEncontrados = [];//                                   Garante que a pesquisa anterior interfira nesta

  for (let Palavra of resultadoPalavras){//               Interage com todas as palavras relevantes do campo de pesquisa

    testeHistorico = false;//                             Garante que cada palavra seja verificada no historico de pesquisa
    pivo = 0;//                                           Pode Identificar o objeto encontrado ou ser o contador para ponto de parada do while
    if (HistoricoPesquisa[0].includes(Palavra["palavra"])){//Verifica se a palavra já foi pesquisada
      tamanhoPesquisa = HistoricoPesquisa[HistoricoPesquisa[0].indexOf(Palavra["palavra"])+1].length;//                                           Retorna o ponto de parada das interações da pesquisa atual
      testeHistorico = true;//                            Afirma que a palavra foi pesquisada antes
    }
    else{tamanhoPesquisa = Biblioteca.length;}//          Ponto de parada em função do banco de dados

    while (pivo < tamanhoPesquisa){
      
      if (!testeHistorico){//                             Transforma os dados de cada propriedade do objeto em letras minúsculas
        curso = BandoDeDados[pivo].curso.toLowerCase();
        titulo = BandoDeDados[pivo].titulo.toLowerCase();
        descricao = BandoDeDados[pivo].descricao.toLowerCase();
        resumo = BandoDeDados[pivo].resumo.toLowerCase();
        palavrasChave = BandoDeDados[pivo].palavrasChave.toLowerCase();
        disciplina = BandoDeDados[pivo].disciplina.toLowerCase();
        autor= BandoDeDados[pivo].autor.toLowerCase();
        corredor = pivo;
      }
      else{corredor = HistoricoPesquisa[HistoricoPesquisa[0].indexOf(Palavra["palavra"])+1][pivo];}//Isso garante que as interações sejam conforme o tamanho da lista de objetos encontrados anteriormente
      if(obEncontrados.includes(corredor)){//             Garante que não venha a ser pesquisado as palavras em objetos já encontrados, nos caso de buscas compostas (mais de uma palavra)
        pivo+=1;
        continue;}

      if(testeHistorico || curso.includes(Palavra["palavra"]) || titulo.includes(Palavra["palavra"]) || resumo.includes(Palavra["palavra"]) || descricao.includes(Palavra["palavra"]) || palavrasChave.includes(Palavra["palavra"]) || disciplina.includes(Palavra["palavra"]) || autor.includes(Palavra["palavra"])){//É a consulta propriamente dito ao objeto
        resultado += `
        <div class="item-resultado">
          <h2>
              <a href="#" target="_blank">${BandoDeDados[corredor].titulo}</a>
          </h2>
          <p class="descricao-meta">Curso: ${BandoDeDados[corredor].curso}</p>
          <p class="descricao-meta">Dsciplina: ${BandoDeDados[corredor].disciplina}</p>
          <p class="descricao-meta">Autor: ${BandoDeDados[corredor].autor}</p>
          <h3>Resumo:</h3>
          <p class="descricao-meta">${BandoDeDados[corredor].resumo}</p>
          <p class="descricao-meta"><strong>Palavras-Chave: </strong>${BandoDeDados[corredor].palavrasChave}</p>
          <p><strong>Link: </strong><a href="#" target="_blank">${BandoDeDados[corredor].link}</a></p>
        </div>
        `
        obEncontrados.push(corredor);//                   Adiciona o indice para filtro de pesquisa nos casos compostos
        if (!testeHistorico){//                           Só adiciona um registro no historico de pesquisa caso se trate da primeira pesquisa da palavra na biblioteca
          if(!(HistoricoPesquisa[0].includes(Palavra["palavra"]))){//Só adiciona se a palavra não tiver sido adicionada antes
            HistoricoPesquisa[0].push(Palavra["palavra"]);
            if(HistoricoPesquisa[0].length >= (HistoricoPesquisa.length-1)){HistoricoPesquisa.push([pivo]);}//                                  Só irá criar uma lista se o número de elementos da primeira lista for maior que o número de listas total menos a primeira
            else{HistoricoPesquisa[HistoricoPesquisa[0].indexOf(Palavra["palavra"])+1].push(pivo);}
          }
          else{HistoricoPesquisa[HistoricoPesquisa[0].indexOf(Palavra["palavra"])+1].push(pivo);}
        }
      }
      pivo+=1;}
  }
  if (!resultado){//Se não houver nada em resultado
    AreaResultado.innerHTML = "<h2>Pesquisa não Encontrada!</h2>" + demostrativo;
    return;
  }
  AreaResultado.innerHTML = resultado;//                  Incorpora o resultado da pesquisa na página
  input.value = " ";//                                    Limpa o campo de pesquisa
}

function Atualizacao(texto){//                            Atualiza a nuvem de palavras e insere as palavras no campo de pesquisa
  input.value += " "+texto;
  //(Ainda não atualiza a Nuvem de Pesquisa)
}
//==================================NUVEM======================================================
let nuvem = document.getElementById("nuvem");//           Faz referência a seção da página onde a nuvem será mostrada
let Posicao = [
  ["h5","h4","h3","h4","h5"],
  ["h5","h4","h3","h3","h4","h5"],
  ["h5","h4","h3","h4","h5"]
];//Identifica o tamanho das palavras por posição na nuvem

let linhas =["L1","L2","L3"];//                           Identifica as IDs de cada linha da Nuvem
let padrao = ["h3","h4","h5"];//                          Usado para converter o nivel de uma palavra a sua correspondencia em tamanho na nuvem
let Nuvempalavras = "";//                                 Será nossa Nuvem de Palavras
let controle = [[],[],[]];//                              Armazena as palavras pesquisadas, mas que o nivel não correspondeu a sequência da Posicao
pivo = 0;//                                               Contador das Colunas em controle
let linha = 0;//                                          Contador das Linhas
let tamanho_lista = Palavras.length;//                    Tamanho da Lista para interação
let cont = 0;//                                           Usado para interações
let noControle = false;//                                 Diz se uma palavra está armazenada ou não
let h =0;//                                               Usado como indice para identificar o padrão da letra

for (let L of Posicao){
  Nuvempalavras +=
  `<div class="Linhas" id=${"'"+linhas[linha]+"'"}>`;//    Cria as Linhas da Nuvem
  
  while (L.length > 0){//                                 Intera nas linhas definidas
    h=0;
    while ( cont < tamanho_lista){//                      Intera até o final da lista de palavras
      if (padrao[Palavras[cont].nivel-1] == L[h]){
        Nuvempalavras +=
        `
        <button class="no-border ${L[h]}" onclick="Atualizacao(${"'"+Palavras[cont].nome+"'"})">${Palavras[cont].nome}</button>
        `;//                                              Adiciona a palavra na linha
        L.splice(h,1);//                                  Retira o tamnho "h..." da linha
        cont+=1;
        break;}
      else{
        if (controle[0].length > 0){//                    Garante que só seja feito se a lista tiver elementos
          pivo = 0;
          for (let hArmazenado of controle[0]){//         Para cada "h..." na lista de controle
            if (hArmazenado == L[h]){//                   Se o tamnho "h" corresponde ao "h" da linha correspondente
              Nuvempalavras +=
              `
              <button class="no-border ${controle[0][pivo]}" onclick="Atualizacao(${"'"+controle[1][pivo]+"'"})">${controle[1][pivo]}</button>
              `;//                                        Adiciona Palavra na linha
              L.splice(h,1);
              controle[0].splice(pivo, 1);//              Retira o "h..." da lista de controle
              controle[1].splice(pivo, 1);//              Retira a palavra adicionada na nuvem da lista de controle
              noControle = true;//                        Garante que a Palavra estava na lista de controle
              break
            }
            pivo+=1;
          }
          if (noControle){
            noControle =false;//                          Garante que a proxima palavra não seja mal interpretada
            break;}
          else{
            controle[0].push(padrao[Palavras[cont].nivel-1]);//Inclui padrão de nivel na lista de controle
            controle[1].push(Palavras[cont].nome);//      Inclui palavra interada na lista de controle
          }}
        else{
          controle[0].push(padrao[Palavras[cont].nivel-1]);
          controle[1].push(Palavras[cont].nome);
        }
        cont+=1;
        break;}}
    h+=1;}
    Nuvempalavras += `</div>`;//                          Fecha a linha da Nuvem
    linha+=1;}
nuvem.innerHTML = Nuvempalavras;//                        Incluir nuvem na página