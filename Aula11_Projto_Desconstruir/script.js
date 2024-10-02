//1 construir um objeto

let pessoa = {
    nome:'Gustavo',
    sobrenome:'Shaikoski',
    empresa:"CESF",
    cargo:'Estudante',
}
//2 consumindo o objeto

console.log(pessoa)

//3 consumo de caracteristicas do objeto

console.log(pessoa.nome)
console.log(pessoa.cargo)

//4 desconstruindo o objeto

// const{nome,cargo,empresa}=pessoa
// console.log(nome)
// console.log(empresa)
// console.log(cargo)

let nome = 'TESTE'

const{nome:nomePessoa,cargo,empresa}=pessoa

console.log(nome)
console.log(nomePessoa)
console.log(cargo)
console.log(empresa)

//5 desconstruir um arrey

let nomes = ['Aparicio','Bernadete','Cremilda']
console.log(nomes)
console.log(nomes[2])

let{0:priNome,1:secNome,2:tecNome}=nomes
console.log(priNome)
console.log(secNome)

//outras formas de desconstruir um array
let [nomeA,nomeB,nomeC]=nomes
console.log(nomeA)
console.log(nomeC)
