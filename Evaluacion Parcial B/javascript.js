$(document).ready(function(){
    $("p").text("Bienvenido a MiCartilla - Favor de registrarse si aún no lo ha hecho.");
});

var images = new Array();

function preloadImages(){

    for (i=0; i < preloadImages.arguments.length; i++){

         images[i] = new Image();

        images[i].src = preloadImages.arguments[i];

    }

}

function validateEmail(emailFormAccess) {
if (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/.test(emailFormAccess-id.value)){
return(true);
}
alert("Favor de introducir un correo electronico.");
return(false);
}

function f1() {
    if(document.all) { return false; }
  }
  function f2(e) {
    if(document.layers || (document.getElementById &! document.all)) {
      if(e.which==2 || e.which==3) { return false; }
    }
  }
  if(document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = f1;
  }
  else {
    document.onmouseup = f2;
    document.oncontextmenu = f1;
  }

  function showDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //months are zero based
    var curr_year = d.getFullYear();
    document.write(curr_date + "-" + curr_month + "-" + curr_year);
  }