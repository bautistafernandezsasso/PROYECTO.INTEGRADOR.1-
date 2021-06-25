window.addEventListener('load', function(){

/*Funcion Para menu desplegable responsive*/
const navToggle = document.querySelector(".nav-toggle")
const navMenu =document.querySelector(".nav-menu")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
})


<<<<<<< HEAD
const proxy = 'https://cors-anywhere.herokuapp.com/';
let api = `${proxy}https://api.deezer.com/genre/152`; /*genero: rock */

let botonBuscarrr = document.querySelector("#btnbuscar")
let buscador = document.querySelector("#form2")
botonBuscarrr.addEventListener('click', function(e) {
    e.preventDefault();
 if (buscador.value === ""){ 
    alert ("Debes escribir!");  
 } else if(buscador.value < 3){ 
    alert ("Debes escribir más de 3 caracteres");
}else{
    window.location.href= 'resultadode_busqueda.html'
}

 
    
 
=======
let botomBuscar = document.getElementById("btnbuscar")
let buscador = document.getElementById("form2")
botomBuscar.addEventListener('click', function(e) {
    e.preventDefault();
    if (buscador.value === ""){ 
    alert ("Debes escribir!");
>>>>>>> 59856d92fafdb66aabfbe29b47b96a46423c28cc

 }else{ 
    window.location.href= `resultado_de_busqueda.html?resultado=${buscador.value}`; 
console.log(buscador.lenght)
 }
  
 


})

})
