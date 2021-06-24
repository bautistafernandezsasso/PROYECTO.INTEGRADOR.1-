window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiAlbums = `${proxy}https://api.deezer.com/album/221141352`;

fetch (apiAlbums)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAlb1= document.querySelector(".fotoartist");
    nombreAlb1 = document.querySelector(".nombrealbum");
    nombreArt1 = document.querySelector(".nombreart");
    nombreGen1 = document.querySelector(".nombregen");
    fechaAlb = document.querySelector(".fechaalb");
    listaTemas = document.querySelector(".temasalbum")

  fotoAlb1.innerHTML +=`
    <img src="${datos.cover_medium}">`;
    
    nombreAlb1.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreArt1.innerHTML +=`<a href="detail-artista-3.html"><h2>${datos.artist.name}</h2></a>`;
    nombreGen1.innerHTML += `<a href="genero.html"><h2>${datos.genres.data[1].name}</h2></a>`;
    fechaAlb.innerHTML += `<h2>${datos.release_date}</h2>`;
    listaTemas.innerHTML += `<li>${datos.tracks.data[0].title}</li>
    <li>${datos.tracks.data[1].title}</li>
    <li>${datos.tracks.data[2].title}</li>
    <li>${datos.tracks.data[3].title}</li>
    <li>${datos.tracks.data[4].title}</li>
    <li>${datos.tracks.data[5].title}</li>
    <li>${datos.tracks.data[6].title}</li>
    <li>${datos.tracks.data[7].title}</li>
    <li>${datos.tracks.data[8].title}</li>
    <li>${datos.tracks.data[9].title}</li>
    <li>${datos.tracks.data[10].title}</li>
    <li>${datos.tracks.data[11].title}</li>
    <li>${datos.tracks.data[12].title}</li>
    <li>${datos.tracks.data[13].title}</li>
    <li>${datos.tracks.data[14].title}</li>
    <li>${datos.tracks.data[15].title}</li>
    <li>${datos.tracks.data[16].title}</li>
    <li>${datos.tracks.data[17].title}</li>`;
    
    

    })
    .catch(function(error){
console.log(error)
    })

})