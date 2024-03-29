window.addEventListener("load", function() {
    document.getElementById("anuncio").style.display = "block";
    fadeIn(document.getElementById("anuncio"));
  
});


document.getElementById("cerrar-anuncio").addEventListener("click", function() {
    document.getElementById("anuncio").style.display = "none";
});

document.querySelector('.anuncio-flotante').style.display = 'block';