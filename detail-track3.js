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
   
    fotoAr3 = document.querySelector(".fotoartista3");
    nombreAr3 = document.querySelector(".nombreartista3");
    nombreCancion3 = document.querySelector(".nombrecancion3");
    nombreDisco3 = document.querySelector(".nombredisco3");
    musicPlayer3 = document.querySelector(".musicplayer3");
    botonPlay3 = document.querySelector(".btnPlay3")

  fotoAr3.innerHTML +=`
    <img src="${datos.tracks.data[2].album.cover_medium}">`;
    
    nombreCancion3.innerHTML +=`<h2>${datos.tracks.data[2].title}</h2>`;
    nombreAr3.innerHTML +=`<a href="detail-artista-2.html"><h2>${datos.tracks.data[2].artist.name}</h2></a>`;
    nombreDisco3.innerHTML += `<a href="detail-album3.html"><h2>${datos.tracks.data[2].album.title}</h2></a>`;
    musicPlayer3.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.tracks.data[2].id}" width="1000" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;
    botonPlay3.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.setItem('foto3' , JSON.stringify(`${datos.tracks.data[2].album.cover_medium}`));
        localStorage.setItem('nombre3' , JSON.stringify(`${datos.tracks.data[2].title}`));
    })

    

    })
    .catch(function(error){
console.log(error)
    })

})