const BASE_URL = "http://localhost:8080/api/livros";

async function listarLivros() {
  try {
    const response = await fetch(BASE_URL);
     if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }
    const dados = await response.json();
    console.log(dados);
    return dados;
  } catch(erro) {
    console.error(erro);
  }
};

listarLivros();