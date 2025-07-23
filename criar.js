

const livro = {
  titulo: "A trança do Careca",
  categoria: "Funny",
  autor: "Jim",
  sinopse: "A trança do Careca OSOKOSAKOASKOSAKOKSA"
};

async function criarLivro(dadosLivro) {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosLivro),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    if (response.ok) {
      console.log('livro registrado com sucesso')
    }

    return await response.json();
  } catch (error) {
    console.error('Falha ao criar livro:', error);
    throw error;
  }
}

criarLivro(livro);