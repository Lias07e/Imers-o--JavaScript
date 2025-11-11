// 1 - Crie uma função (livro) que possui 3 parâmetros: nome, ano e autor.
function livro(nome, ano, autor) {

  // 2.1 - Transforma o nome para letras maiúsculas
  const nomeMaiusculo = nome.toUpperCase();

  // 2.2 - Calcula o total de anos desde o lançamento até 2050
  const anosDesdeLancamento = 2050 - ano;

  // 2.3 - Cria uma variável com a frase: nome + ' por ' + autor
  const frase = nome + ' por ' + autor;

  // 2.4 - Coloca os 3 valores acima em um objeto
  const objetoLivro = {
    nomeMaiusculo: nomeMaiusculo,
    anosDesdeLancamento: anosDesdeLancamento,
    frase: frase
  };

  // 3 - Retorna o objeto definido
  return objetoLivro;
}

// 4 - Executa a função com os seguintes argumentos
const resultado = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

// 5 - Guarda o retorno da função executada em uma variável (já é resultado)

// 6 - Loga a frase final da função executada no console
console.log(resultado.frase);
