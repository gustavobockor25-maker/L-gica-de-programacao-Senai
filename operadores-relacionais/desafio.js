// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:
//  const ler = require('readline-sync')
//  const pessoa1 = {
//  nome:ler.question("Nome da pessoa 1? "),
//  idade:ler.questionInt("Idade da pessoa 1? ")
//  }
//  const pessoa2 = {
//  nome: ler.question("Nome da pessoa 2? "),
//  idade: ler.questionInt("Idade da pessoa 2? ")
//  }
//  const pessoa3 = {
//  nome:ler.question("Nome da pessoa 3? "),
//  idade:ler.questionInt("Idade da pessoa 3? ")
//      }
//  const pessoas = [pessoa1,pessoa2,pessoa3]
//  console.table(pessoas)
//  const maiordeIdade = pessoa1.idade>pessoa2.idade >=18
//  const maiordeIdade2 = pessoa2.idade<pessoa3.idade >=18
//  const maiordeIdade3 = pessoa1.idade === pessoa3.idade >=18
//  console.log(`${pessoa1.nome} e mais velho que ${pessoa2.nome}? ${maiordeIdade}`);
//  console.log(`${pessoa2.nome} e mais novo que ${pessoa3.nome}? ${maiordeIdade2}`);
//  console.log(`${pessoa1.nome} e ${pessoa3.nome} tem a mesma idade? ${maiordeIdade3}`);



// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:
// const ler = require('readline-sync')
// const produto = {
//   nome: ler.question("Produto 1? "),
//   preco: ler.questionFloat("Preco do produto 1? ")
// }

// const produto2 = {
//   nome: ler.question("Produto 2? "),
//   preco: ler.questionFloat("Preco do produto 2? ")
// }

// console.table([produto, produto2])

// const diferenca = Math.abs(produto.preco - produto2.preco)

// const maisCaro1 = produto.preco > produto2.preco
// const precoIgual = produto.preco === produto2.preco

// let maisBarato, maisCaro

// if (precoIgual) {
//   maisBarato = maisCaro = produto
// } else if (produto.preco < produto2.preco) {
//   maisBarato = produto
//   maisCaro = produto2
// } else {
//   maisBarato = produto2
//   maisCaro = produto
// }

// const baratoMenor50 = maisBarato.preco < 50
// const caroMaior200 = maisCaro.preco > 200

// console.log(`\nDiferença de preço: R$ ${diferenca.toFixed(2)}`)
// console.log(`${produto.nome} é mais caro que ${produto2.nome}? ${maisCaro1}`)
// console.log(`Os dois têm o mesmo preço? ${precoIgual}`)

// console.log(`O produto mais barato (${maisBarato.nome}) custa menos de R$ 50? ${baratoMenor50}`)
// console.log(`O produto mais caro (${maisCaro.nome}) custa mais de R$ 200? ${caroMaior200}`)


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:
//  const ler = require('readline-sync')

//  const nome = ler.question("Nome do aluno? ")

//  const n1 = ler.questionFloat("Nota 1? ")
//  const n2 = ler.questionFloat("Nota 2? ")
//  const n3 = ler.questionFloat("Nota 3? ")
//  const n4 = ler.questionFloat("Nota 4? ")

//  let media = (((n1 + n2 + n3 + n4) / 4).toFixed(2))

//  const boletim = {
//    nome: nome,
//    notas: [n1, n2, n3, n4],
//    media: media
//  }

//  console.table([boletim])

//  const aprovado = media >= 6
//  const recuperacao = media >= 4 && media < 6
//  const maiorQue9 = boletim.notas.some(n => n > 9)

//  const maior = Math.max(n1, n2, n3, n4)
//  const menor = Math.min(n1, n2, n3, n4)
//  const diferenca = (maior - menor) > 3

//  console.log(`Aprovado? ${aprovado}`)
//  console.log(`Recuperação? ${recuperacao}`)
//  console.log(`Alguma nota maior que 9? ${maiorQue9}`)
//  console.log(`Diferença maior que 3 pontos? ${diferenca}`)



// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:
const ler = require('readline-sync')

let produto1 = {
  nome: ler.question("Nome do produto 1? "),
  preco: ler.questionFloat("Preco do produto 1? "),
  quantidade: ler.questionInt("Quantidade do produto 1? ")
}

let produto2 = {
  nome: ler.question("Nome do produto 2? "),
  preco: ler.questionFloat("Preco do produto 2? "),
  quantidade: ler.questionInt("Quantidade do produto 2? ")
}

let produto3 = {
  nome: ler.question("Nome do produto 3? "),
  preco: ler.questionFloat("Preco do produto 3? "),
  quantidade: ler.questionInt("Quantidade do produto 3? ")
}

let estoque = [produto1, produto2, produto3]

console.table(estoque)

let temEstoque1 = produto1.quantidade > 0
let estoqueBaixo1 = produto1.quantidade <= 5
let caro1 = produto1.preco > 100
let barato1 = produto1.preco < 50

console.log(`Produto: ${produto1.nome}`)
console.log(`Tem estoque? ${temEstoque1}`)
console.log(`Estoque baixo? ${estoqueBaixo1}`)
console.log(`E caro? ${caro1}`)
console.log(`Preço abaixo de 50? ${barato1}`)

let temEstoque2 = produto2.quantidade > 0
let estoqueBaixo2 = produto2.quantidade <= 5
let caro2 = produto2.preco > 100
let barato2 = produto2.preco < 50

console.log(`\nProduto: ${produto2.nome}`)
console.log(`Tem estoque? ${temEstoque2}`)
console.log(`Estoque baixo? ${estoqueBaixo2}`)
console.log(`E caro? ${caro2}`)
console.log(`Preço abaixo de 50? ${barato2}`)

let temEstoque3 = produto3.quantidade > 0
let estoqueBaixo3 = produto3.quantidade <= 5
let caro3 = produto3.preco > 100
let barato3 = produto3.preco < 50

console.log(`\nProduto: ${produto3.nome}`)
console.log(`Tem estoque? ${temEstoque3}`)
console.log(`Estoque baixo? ${estoqueBaixo3}`)
console.log(`É caro? ${caro3}`)
console.log(`Preço abaixo de 50? ${barato3}`)

