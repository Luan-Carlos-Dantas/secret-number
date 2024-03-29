function isValid(chute){
  const numero = +chute
  if(chuteInvalido(numero)){
    elChute.innerHTML += `
    <div class='not-valid'>
      Valor inválido
    </div>
    `
    return
  }

  if(numeroMaiorOuMenor(numero)){
    elChute.innerHTML += `
    <div class='not-valid'>
      O valor precisa estar entre ${menorValor} e ${maiorValor}
    </div>
    `
    return
  }

  if(chute === random){
    elChute.body.innerHTML = `
      <h1>Você Acertou !!!</h1>
      <h3>O número secreto era ${random}</h3>
      <br>
      <button id="playAgain" class="btn-jogar">Jogue novamente</button>
    `
  } else if(chute > random){
    elChute.body.innerHTML += `
    <div>O número secreto é menor <span><i class="fa-solid fa-arrow-down"></i></span></div>
    `
  } else if(chute < random){
    elChute.body.innerHTML += `
    <div>O número secreto é maior <span><i class="fa-solid fa-arrow-up"></i></span></div>
    `
  }
}
function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
  if(e.target.id === 'playAgain'){
    window.location.reload()
  }
})
