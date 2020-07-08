function contador(){
    let now = new Date();
    let eventDate = new Date("July 09, 2020 20:00:00");
  
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
  
    let remTime = eventTime - currentTime;
  
    let seg = Math.floor(remTime / 1000);
    let min = Math.floor(seg / 60);
    let hora = Math.floor(min / 60);
    let dia = Math.floor(hora / 24);
  
    hora %= 24;
    min %= 60;
    seg %= 60;
  
    if (dia <= 0 && hora <= 0 && min <= 0 && seg <= 0) {
      
      dia = '-'
      hora = '--'
      min = '--'
      seg = '--'
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

  /***/
  const enviarForm = () => {
    let nome = document.getElementById("mce-FNAME");
    let email = document.getElementById("mce-EMAIL");

    if(nome.value != "" && email.value != "") { 
      document.getElementById("mc-embedded-subscribe-form").submit(); 
      
      nome.value = "";
      email.value = ""
    }
  }

  // init
  (() => {
    contador();
  })();
