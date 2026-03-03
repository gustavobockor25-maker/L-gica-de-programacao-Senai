// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let cores= ["amarelo","verde","azul","roxo"]
console.log (cores[0])
console.log (cores[3])



// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:
cores.push("rosa")
cores.shift("amarelo")
console.log(cores)
console.log(`Quantidade de itens na lista cores: ${cores.length}`);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let  numeros = ["11","7","10","8","2"]
console.log(numeros)
console.log(`Quantidade de itens na lista numeros: ${numeros.length}`);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:
let tiposdedados =[7,"teste",true,undefined,null]
console.log(tiposdedados)
console.log(`Quantidade de itens na lista tipos de dados: ${tiposdedados.length}`)





// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let Tiposdedados = [8, "qualquer coisa", true, undefined, null]
console.log(Tiposdedados)
Tiposdedados.shift()
Tiposdedados.pop()
console.log(Tiposdedados)
Tiposdedados.push("futebol")
console.log(Tiposdedados)
