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

fetch (`${proxy}https://api.deezer.com/artist/860/top?index=0`)                                            
.then(function(response){
    return response.json();
})



.then(function(datos){
    console.log(datos)

cancionTop1 = document.querySelector('.cancionTop1')
cancionTop2 = document.querySelector('.cancionTop2')
cancionTop3 = document.querySelector('.cancionTop3')
cancionTop4 = document.querySelector('.cancionTop4')
cancionTop5 = document.querySelector('.cancionTop5')




cancionTop1.innerHTML +=`
<h3>${datos.data[0].title}<h3><img src=${datos.data[0].album.cover}>`

cancionTop2.innerHTML +=`
<h3>${datos.data[1].title}<h3><img src=${datos.data[1].album.cover}>`

cancionTop3.innerHTML +=`
<h3>${datos.data[2].title}<h3><img src=${datos.data[2].album.cover}>`

cancionTop4.innerHTML +=`
<h3>${datos.data[3].title}<h3><img src=${datos.data[3].album.cover}>`

cancionTop5.innerHTML +=`
<h3>${datos.data[4].title}<h3><img src=${datos.data[4].album.cover}>`


botonTrack = document.querySelector('.botom1')
botonTrack2 = document.querySelector('.botom2')
botonTrack3 = document.querySelector('.botom3')
botonTrack4 = document.querySelector('.botom4')
botonTrack5 = document.querySelector('.botom5')


botonTrack.addEventListener('click', function(){
localStorage.removeItem('Track');
localStorage.setItem('Track' , JSON.stringify(`${datos.data[0].id}`));
window.location.href = 'detail-track-busqueda.html';  


});
botonTrack2.addEventListener('click', function(){
localStorage.removeItem('Track');
localStorage.setItem('Track' , JSON.stringify(`${datos.data[1].id}`));
window.location.href = 'detail-track-busqueda.html';  

});

botonTrack3.addEventListener('click', function(){
localStorage.removeItem('Track');
localStorage.setItem('Track' , JSON.stringify(`${datos.data[2].id}`));
window.location.href = 'detail-track-busqueda.html';  

});

botonTrack4.addEventListener('click', function(){
localStorage.removeItem('Track');
localStorage.setItem('Track' , JSON.stringify(`${datos.data[3].id}`));
window.location.href = 'detail-track-busqueda.html';  

});

botonTrack5.addEventListener('click', function(){
localStorage.removeItem('Track');
localStorage.setItem('Track' , JSON.stringify(`${datos.data[4].id}`));
window.location.href = 'detail-track-busqueda.html';  

});





})
.catch(function(error){
console.log(error)
})


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
