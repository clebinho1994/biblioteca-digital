



async function buscarLivro(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if(!response.ok){
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const dados = await response.json();
    console.log(dados);
    return dados.id;

    const btn = document.querySelector('.btn-busca');
    const buscarId = document.querySelector('.id-busca');
    console.log(btn);

  }catch(erro){
    console.error(erro)
  }
} 
buscarLivro(1);