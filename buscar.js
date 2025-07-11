const BASE_URL = "http://localhost:8080/api/livros";

async function buscarLivro(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if(!response.ok){
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const dados = await response.json();
    console.log(dados);
    return dados.id;

  }catch(erro){
    console.error(erro)
  }
} 
buscarLivro(3);