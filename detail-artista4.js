window.addEventListener('load', function(){

/*Funcion Para menu desplegable responsive*/
const navToggle = document.querySelector(".nav-toggle")
const navMenu =document.querySelector(".nav-menu")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
})

const proxy = 'https://cors-anywhere.herokuapp.com/';



/*    artistas   */

/* apiArtista = `${proxy}https://api.deezer.com/artist/${IdArtista}/`
apiArtistaCanciones = `${proxy}https://api.deezer.com/artist/${IdArtista}/top` */

apiArtista4 = `${proxy}https://api.deezer.com/artist/860/`


fetch(apiArtista4)
.then(function(response){
    return response.json()

})
.then(function(datos){
console.log(datos)

fotoAr4 = document.querySelector(".fotoAr4");
nombreAr4 = document.querySelector(".nombreAr4")
topAlbums4 = document.querySelector('.topalbums4')
fotoAr4.innerHTML +=`
<img src="${datos.picture_medium}">`;

nombreAr4.innerHTML +=`<h2>${datos.name}</h2>`;
/*topAlbums.innerHTML += `<li>${}`*/




})
.catch(function(error){
console.log(error)
})
















let busqueda = document.querySelector("#form1");
let valor = busqueda.value;
busqueda.addEventListener('blur', function(){
if (valor === '' || valor.lenght < 3){
    busqueda.style.color = 'red';
}else{
    busqueda.style.color = 'green';
}
})

})
