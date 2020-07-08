/* 
Importante!
  Caso precise mexer em algo aqui, é necessário minificar o código, e colar no arquivo script.min.js
  Este arquivo é apenas para dev, está em produção o arquivo minificado.

  Utilize este site para fazer a minificação 
  https://javascript-minifier.com/
*/

// Contador
const contador = () => {
  let now = new Date(),
      eventDate = new Date("July 09, 2020 20:00:00"),
      currentTime = now.getTime(),
      eventTime = eventDate.getTime(),
      remTime = eventTime - currentTime,
      seg = Math.floor(remTime / 1000),
      min = Math.floor(seg / 60),
      hora = Math.floor(min / 60),
      dia = Math.floor(hora / 24);

  hora %= 24;
  min %= 60;
  seg %= 60;

  if (dia <= 0 && hora <= 0 && min <= 0 && seg <= 0) {
    dia = '-';
    hora = '--';
    min = '--';
    seg = '--';
  }

  hora = (hora < 10) ? "0" + hora : hora;
  min = (min < 10) ? "0" + min : min;
  seg = (seg < 10) ? "0" + seg : seg;

  document.getElementById("days").textContent = dia;
  document.getElementById("days").innerText = dia;
  document.getElementById("hours").textContent = hora;
  document.getElementById("minutes").textContent = min;
  document.getElementById("seconds").textContent = seg;
  setTimeout(contador, 1000);
}


//Popup de saída
var cont = 0;
var maxContador = 1;

document.addEventListener('mouseleave', function () {
  if (cont < maxContador) {
    document.querySelector('.mask-modal').classList.add('show-modal');
    cont++;
  }
});


// Envia Formulário pro mailchimp caso e-mail e nome estejam preenchidos
const enviarForm = () => {
  let nome = document.getElementById("mce-FNAME");
  let email = document.getElementById("mce-EMAIL");

  if(nome.value != "" && email.value != "") { 
    document.getElementById("mc-embedded-subscribe-form").submit(); 
    
    nome.value = "";
    email.value = ""
  }
}


// Fecha modal e scroll para o form como tentativa de fazer a pessoa preencher antes de ir
const scrollToForm = () => { 
  document.getElementById("mc-embedded-subscribe-form").scrollIntoView();
  document.querySelector('.mask-modal').classList.remove('show-modal');
}


//Chamadas
contador();