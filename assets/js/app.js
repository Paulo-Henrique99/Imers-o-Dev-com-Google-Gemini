function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa uma string sem nada
    if (!campoPesquisa) {
      section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome do artista ou música"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se tituloincludes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.linkSpotify}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Instagran oficial 🎯</a>
        </div>
      `;
    }
  }

  if(!resultados) {
    resultados = "<p>Nada foi encontrado. Tente outra vez!</p>"
  }
  
    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
  }

  