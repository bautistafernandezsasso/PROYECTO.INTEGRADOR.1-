window.addEventListener('load', function(){

/*Funcion Para menu desplegable responsive*/
const navToggle = document.querySelector(".nav-toggle")
const navMenu =document.querySelector(".nav-menu")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
})

/*generos*/

const proxy = 'https://cors-anywhere.herokuapp.com/';
let api = `${proxy}https://api.deezer.com/genre/152`; /*genero: rock */


/*

fetch(api)
.then(function(response){
    return response.json()

})
.then(function(datos){
console.log(datos)
caja1 = document.querySelector(".cajaRock");
generoPagina = document.querySelector(".generoNombre")

caja1.innerHTML +=`
<img src="${datos.picture_medium}">`;

generoPagina.innerHTML +=`<h2>${datos.name}</h2>`;


})
.catch(function(error){
console.log(error)
})









/*

let busqueda = document.querySelector("#form1");
let valor = busqueda.value;
busqueda.addEventListener('blur', function(){
if (valor === '' || valor.lenght < 3){
    busqueda.style.color = 'red';
}else{
    busqueda.style.color = 'green';
}
}) */

})