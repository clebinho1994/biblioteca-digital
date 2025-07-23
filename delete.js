
async function deletarLivro(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, 
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }
    console.log(`Livro com o id ${id} deletado com sucesso!`)
  }catch(erro) {
    console.error(erro);
  }
}

deletarLivro();