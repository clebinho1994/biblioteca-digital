const BASE_URL = "http://localhost:8080/api/livros";

async function atualizarLivro(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if(!response.ok){
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }
    const dados = await response.json();
    console.log(dados);

    const atualizar = {
      titulo: "OS 30 ",
      categoria: "infantil",
      autor: "Cleber Gomes",
      sinopse: "000000000000000000."
    };

    const responseAtualizado = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(atualizar),
    });
    if(!responseAtualizado.ok){
      throw new Error(`Erro na requisição: ${responseAtualizado.status} ${responseAtualizado.statusText}`);
    };

    const atualizado = await responseAtualizado.json();
    console.log(atualizado);
    return atualizado;

  }catch(erro){
    console.error(erro);
  }
};
atualizarLivro(3);