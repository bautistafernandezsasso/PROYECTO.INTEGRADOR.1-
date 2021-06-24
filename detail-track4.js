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
   
    fotoAr4 = document.querySelector(".fotoartista4");
    nombreAr4 = document.querySelector(".nombreartista4");
    nombreCancion4 = document.querySelector(".nombrecancion4");
    nombreDisco4 = document.querySelector(".nombredisco4");
    musicPlayer4 = document.querySelector(".musicplayer4");
    botonPlay4 = document.querySelector(".btnPlay4")

  fotoAr4.innerHTML +=`
    <img src="${datos.tracks.data[3].album.cover_medium}">`;
    
    nombreCancion4.innerHTML +=`<h2>${datos.tracks.data[3].title}</h2>`;
    nombreAr4.innerHTML +=`<a href="detail-artista-3.html"><h2>${datos.tracks.data[3].artist.name}</a></h2>`;
    nombreDisco4.innerHTML += `<a href="detail-album1.html"><h2>${datos.tracks.data[3].album.title}</h2></a>`;
    musicPlayer4.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.tracks.data[3].id}" width="1000" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;


    

    })
    .catch(function(error){
console.log(error)
    })

})