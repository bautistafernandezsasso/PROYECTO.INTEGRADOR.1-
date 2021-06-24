window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiGenres = `${proxy}https://api.deezer.com/genre`;

fetch (apiGenres)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoGen = document.querySelector(".genrefoto");
    nombreGen = document.querySelector(".genrename");
    infoGen = document.querySelector(".genreinfo");
    
  fotoAr2.innerHTML +=`
    <img src="${datos.tracks.data[0].album.cover_medium}">`;
    
    nombreCancion2.innerHTML +=`<h2>${datos.tracks.data[0].title}</h2>`;
    nombreAr2.innerHTML +=`<a href="detail-artista.html"><h2>${datos.tracks.data[0].artist.name}</h2></a>`;
    nombreDisco2.innerHTML += `<a href="detail-album2.html"><h2>${datos.tracks.data[0].album.title}</h2></a>`;
   
    
})
    

    
    .catch(function(error){
console.log(error)
    })



});