
   var audio1=document.getElementById("audio1");     
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
var con=0;

function drop1(ev) {
       var audio1=document.getElementById("audio1");  
      var apla=document.getElementById("apla"); 
     var audio2=document.getElementById("audio2"); 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="drag1"){
        document.getElementById("div1").src="../img/mercurio.png"
    ev.target.appendChild(document.getElementById(data));
         audio1.play();
            //$(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
    }
        else
    {
         audio2.play();  
    }
}
function drop2(ev) {
       var audio1=document.getElementById("audio1");  
      var apla=document.getElementById("apla");
     var audio2=document.getElementById("audio2"); 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
     if(data=="drag2"){
        document.getElementById("div2").src="../img/venus.png"
    ev.target.appendChild(document.getElementById(data));
           audio1.play();
               //$(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
         con++;
           
}
     else
    {
          audio2.play(); 
    }
}
function drop3(ev) {
        var audio1=document.getElementById("audio1");  
      var apla=document.getElementById("apla");
     var audio2=document.getElementById("audio2"); 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
     if(data=="drag3"){
        document.getElementById("div3").src="../img/tierra.png"
    ev.target.appendChild(document.getElementById(data));
            audio1.play();
         // $(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
         con++;
       
}
     else
    {
           audio2.play();
    }
}
function drop4(ev) {
    var audio1=document.getElementById("audio1");  
      var apla=document.getElementById("apla"); 
     var audio2=document.getElementById("audio2"); 
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data=="drag4"){
        document.getElementById("div4").src="../img/marte.png"
    ev.target.appendChild(document.getElementById(data));
           audio1.play();
            // $(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
     
}
     else
    {
        audio2.play();
    }
}

function drop5(ev) {
    var audio1 = document.getElementById("audio1");
    var apla = document.getElementById("apla");
    var audio2 = document.getElementById("audio2");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "drag5") {
        document.getElementById("div5").src = "../img/jupiter.png"
        ev.target.appendChild(document.getElementById(data));
        audio1.play();
        //$(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
       
    }
    else {
        audio2.play();
    }

}

function drop6(ev) {
    var audio1 = document.getElementById("audio1");
    var apla = document.getElementById("apla");
    var audio2 = document.getElementById("audio2");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "drag6") {
        document.getElementById("div6").src = "../img/saturno.png"
        ev.target.appendChild(document.getElementById(data));
        audio1.play();
        //$(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
       
    }
    else {
        audio2.play();
    }
}
function drop7(ev) {
    var audio1 = document.getElementById("audio1");
    var apla = document.getElementById("apla");
    var audio2 = document.getElementById("audio2");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "drag7") {
        document.getElementById("div7").src = "../img/urano.png"
        ev.target.appendChild(document.getElementById(data));
        audio1.play();
        //$(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
      
    }
    else {
        audio2.play();
    }
}
function drop8(ev) {
    var audio1 = document.getElementById("audio1");
    var apla = document.getElementById("apla");
    var audio2 = document.getElementById("audio2");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "drag8") {
        document.getElementById("div8").src = "../img/neptuno.png"
        ev.target.appendChild(document.getElementById(data));
        audio1.play();
       // $(".espacioC").append("<img src='../img/caraF.png' class='img-car'>");
        con++;
    }
    else {
        audio2.play();
    }
}
