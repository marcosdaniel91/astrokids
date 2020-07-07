
      
    

function mostrarSection(num){
  //var sonido = document.getElementById("audio_instru");
  //sonido.play();
  switch(num){
    case 0:document.getElementById("nom").innerHTML="Mercurio";
      var sonido = document.getElementById("audio_instru");
      sonido.src ="../audios/mercurio.mp3";
      sonido.play();
    break;
          case 1: document.getElementById("nom").innerHTML = "Venus";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/venus.mp3";
      sonido.play();
      break;
    case 2: document.getElementById("nom").innerHTML = "Tierra";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/tierra.mp3";
      sonido.play();
      break;
    case 3: document.getElementById("nom").innerHTML = "Marte";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/marte.mp3";
      sonido.play();
      break;
    case 4: document.getElementById("nom").innerHTML = "Jupiter";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/jupiter.mp3";
      sonido.play();
      break;
    case 5: document.getElementById("nom").innerHTML = "Saturno";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/saturno.mp3";
      sonido.play();
      break;
    case 6: document.getElementById("nom").innerHTML = "Urano";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/urano.mp3";
      sonido.play();
      break;
    case 7: document.getElementById("nom").innerHTML = "Neptuno";
      var sonido = document.getElementById("audio_instru");
      sonido.src = "../audios/neptuno.mp3";
      sonido.play();
      break;

  }
}


function sonidoI() {
  var sonido = document.getElementById("audio_instru");
  sonido.src = "../audios/instrucción.mp3";
  sonido.play();
}