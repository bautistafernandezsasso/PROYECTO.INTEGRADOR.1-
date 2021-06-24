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
   
    fotoAr5 = document.querySelector(".fotoartista5");
    nombreAr5 = document.querySelector(".nombreartista5");
    nombreCancion5 = document.querySelector(".nombrecancion5");
    nombreDisco5 = document.querySelector(".nombredisco5");
    musicPlayer5 = document.querySelector(".musicplayer5");
    botonPlay5 = document.querySelector(".btnPlay5")

  fotoAr5.innerHTML +=`
    <img src="${datos.tracks.data[4].album.cover_medium}">`;
    
    nombreCancion5.innerHTML +=`<h2>${datos.tracks.data[4].title}</h2>`;
    nombreAr5.innerHTML +=`<a href="detail-artista-4.html"><h2>${datos.tracks.data[4].artist.name}</a></h2>`;
    nombreDisco5.innerHTML += `<a href="detail-album5.html"><h2>${datos.tracks.data[4].album.title}</h2></a>`;
    musicPlayer5.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.tracks.data[4].id}" width="1000" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
    botonPlay5.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.setItem('foto5' , JSON.stringify(`${datos.tracks.data[4].album.cover_medium}`));
        localStorage.setItem('nombre5' , JSON.stringify(`${datos.tracks.data[4].title}`));
    })

    

    })
    .catch(function(error){
console.log(error)
    })

})