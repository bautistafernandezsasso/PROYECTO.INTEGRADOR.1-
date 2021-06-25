window.addEventListener('load', function(){

/*Funcion Para menu desplegable responsive*/
const navToggle = document.querySelector(".nav-toggle")
const navMenu =document.querySelector(".nav-menu")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
})


let botomBuscar = document.getElementById("btnbuscar")
let buscador = document.getElementById("form2")
botomBuscar.addEventListener('click', function(e) {
    e.preventDefault();
    if (buscador.value === ""){ 
    alert ("Debes escribir!");

 }else{ 
    window.location.href= `resultado_de_busqueda.html?resultado=${buscador.value}`; 
console.log(buscador.lenght)
 }
  
 


})

})
