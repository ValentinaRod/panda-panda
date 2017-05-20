// Ocultar Imagenes
var img = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('x');

for (var i = 0; i < eliminarElem.length; i++) {
  img[i].addEventListener("click",ocultarImagen);
}
function ocultarImagen() {
  this.style.display = "none";
}

// Restaurar Imagenes
var botonRestaurar = document.getElementById('restaurando');
botonRestaurar.addEventListener("click",restaurar);

function restaurar(){
  for(var i=0; i < eliminarElem.length;i++){
      img[i].style.display="inline-block";
    }
}

// Origen ... ocultar texto izquierdo

function origen(){
  var textoIzquierda = document.getElementById("textIzq");
  if (textoIzquierda.style.display == "none") {
    textoIzquierda.style.display = "inline-block"
  } else {
      textoIzquierda.style.display = "none"
  }
}

// Extincion ... ocultar texto derecho

function extincion(){
  var textoDerecha = document.getElementById("textDer");
  if (textoDerecha.style.display == "none") {
    textoDerecha.style.display = "inline-block"
  } else {
      textoDerecha.style.display = "none"
  }
}
