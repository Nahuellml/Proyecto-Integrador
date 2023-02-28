/* Funcion de Iconos de Redes*/

function mostrarInfo(mostrarInfoId, ocultarInfoIds) {
    var mostrarInfo = document.getElementById(mostrarInfoId);
  
    if (mostrarInfo.style.display === "none") {
      mostrarInfo.style.display = "block";
  
      ocultarInfoIds.forEach(function(ocultarInfoId) {
        var ocultarInfo = document.getElementById(ocultarInfoId);
        ocultarInfo.style.display = "none";
      });
    } else {
      mostrarInfo.style.display = "none";
    }
}
/* Funcion de acordeon Formacion Academica*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}