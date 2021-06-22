window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiPlaylist = `${proxy}https://api.deezer.com/playlist/9201140242`;

fetch (apiPlaylist)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAr = document.querySelector(".fotoartista");
    nombreAr = document.querySelector(".nombreartista");
    nombreCancion = document.querySelector(".nombrecancion");
    nombreDisco = document.querySelector(".nombredisco");
    musicPlayer = document.querySelector(".musicplayer")
    fotoAr.innerHTML +=`
    <img src="${datos.tracks.data[1].album.cover_medium}">`;
    
    nombreCancion.innerHTML +=`<h2>${datos.tracks.data[1].title}</h2>`;
    nombreAr.innerHTML +=`<h2>${datos.tracks.data[1].artist.name}</h2>`;
    nombreDisco.innerHTML += `<h2>${datos.tracks.data[1].album.title}</h2>`;
    musicPlayer.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.tracks.data[1].id}" width="410" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;



    

    })
    .catch(function(error){
console.log(error)
    })














































})