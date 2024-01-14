const elChute = document.querySelector('#chute');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();


function showChuteOnScreen(chute){
  elChute.innerHTML = `
      <div>
        Você disse:
      </div>
      <span class="box">${chute}</span>
  `
}

function onSpeak(e){
  const chute = e.results[0][0].transcript
  isValid(chute)
  showChuteOnScreen(chute)
}

recognition.addEventListener('result', onSpeak)

recognition.addEventListener('end', ()=> recognition.start())
