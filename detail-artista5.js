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

apiArtista5 = `${proxy}https://api.deezer.com/artist/15166511/`


fetch(apiArtista5)
.then(function(response){
    return response.json()

})
.then(function(datos){
console.log(datos)

fotoAr5 = document.querySelector(".fotoAr5");
nombreAr5 = document.querySelector(".nombreAr5")
topAlbums5 = document.querySelector('.topalbums5')
fotoAr5.innerHTML +=`
<img src="${datos.picture_medium}">`;

nombreAr5.innerHTML +=`<h2>${datos.name}</h2>`;
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
