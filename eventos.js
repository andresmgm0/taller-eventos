document.getElementById("boton").addEventListener("click", function(){
    alert("Hola! Soy el div");
});

document.getElementById("saludar").addEventListener("click", (event) => {
    event.stopPropagation();
});