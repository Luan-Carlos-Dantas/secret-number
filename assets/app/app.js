const min = 1
const max = 100
const random = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
  return parseInt(Math.random() * ((max + 1)))
}

console.log(random)
console.log('Hello World')

const menorValor = document.querySelector('#menor-valor');
menorValor.innerHTML = min
const maiorValor = document.querySelector('#maior-valor');
maiorValor.innerHTML = max
