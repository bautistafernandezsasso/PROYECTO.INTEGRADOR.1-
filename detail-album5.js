window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiAlbums = `${proxy}https://api.deezer.com/album/12114240`;

fetch (apiAlbums)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAlb5= document.querySelector(".fotoartist5");
    nombreAlb5 = document.querySelector(".nombrealbum5");
    nombreArt5 = document.querySelector(".nombreart5");
    nombreGen5 = document.querySelector(".nombregen5");
    fechaAlb5 = document.querySelector(".fechaalb5");
    listaTemas5 = document.querySelector(".temasalbum5")

  fotoAlb5.innerHTML +=`
    <img src="${datos.cover_medium}">`;
    
    nombreAlb5.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreArt5.innerHTML +=`<a href="detail-artista-4.html"><h2>${datos.artist.name}</h2></a>`;
    nombreGen5.innerHTML += `<h2>${datos.genres.data[0].name}</h2>`;
    fechaAlb5.innerHTML += `<h2>${datos.release_date}</h2>`;
    listaTemas5.innerHTML += `<li>${datos.tracks.data[0].title}</li>
    <li>${datos.tracks.data[1].title}</li>
    <li>${datos.tracks.data[2].title}</li>
    <li>${datos.tracks.data[3].title}</li>
    <li>${datos.tracks.data[4].title}</li>
    <li>${datos.tracks.data[5].title}</li>
    <li>${datos.tracks.data[6].title}</li>
    <li>${datos.tracks.data[7].title}</li>
    <li>${datos.tracks.data[8].title}</li>
    <li>${datos.tracks.data[9].title}</li>`;
    
    

    })
    .catch(function(error){
console.log(error)
    })

})