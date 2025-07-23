

async function listarLivros() {
  try {
    const response = await fetch(BASE_URL);

     if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const dados = await response.json();
    console.log(dados);
    exibirLivros(dados);

  } catch(erro) {
    console.error(erro);
  }
};


function exibirLivros(livros) {
  const livrosSection = document.querySelector('.livros');
  livrosSection.innerHTML = ''; // Limpa antes de inserir

  livros.forEach(livro => {
    const item = document.createElement('div');
    item.classList.add('livro-item');
    item.innerHTML = `<strong>ID:</strong> ${livro.id} <br><strong>Título:</strong> ${livro.titulo}`;
    livrosSection.appendChild(item);
  });

}


listarLivros();