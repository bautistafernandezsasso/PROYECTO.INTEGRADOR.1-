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
   
    fotoAr2 = document.querySelector(".fotoartista2");
    nombreAr2 = document.querySelector(".nombreartista2");
    nombreCancion2 = document.querySelector(".nombrecancion2");
    nombreDisco2 = document.querySelector(".nombredisco2");
    musicPlayer2 = document.querySelector(".musicplayer2");
    botonPlay2 = document.querySelector(".btnPlay2")

  fotoAr2.innerHTML +=`
    <img src="${datos.tracks.data[0].album.cover_medium}">`;
    
    nombreCancion2.innerHTML +=`<h2>${datos.tracks.data[0].title}</h2>`;
    nombreAr2.innerHTML +=`<h2>${datos.tracks.data[0].artist.name}</h2>`;
    nombreDisco2.innerHTML += `<h2>${datos.tracks.data[0].album.title}</h2>`;
    musicPlayer2.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.tracks.data[0].id}" width="1000" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;


    

    })
    .catch(function(error){
console.log(error)
    })

})