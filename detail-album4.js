window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiAlbums = `${proxy}https://api.deezer.com/album/100896762`;

fetch (apiAlbums)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAlb4= document.querySelector(".fotoartist4");
    nombreAlb4 = document.querySelector(".nombrealbum4");
    nombreArt4 = document.querySelector(".nombreart4");
    nombreGen4 = document.querySelector(".nombregen4");
    fechaAlb4 = document.querySelector(".fechaalb4");
    listaTemas4 = document.querySelector(".temasalbum4")

  fotoAlb4.innerHTML +=`
    <img src="${datos.cover_medium}">`;
    
    nombreAlb4.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreArt4.innerHTML +=`<h2>${datos.artist.name}</h2>`;
    nombreGen4.innerHTML += `<h2>${datos.genres.data[0].name}</h2>`;
    fechaAlb4.innerHTML += `<h2>${datos.release_date}</h2>`;
    listaTemas4.innerHTML += `<li>${datos.tracks.data[0].title}</li>
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
    <li>${datos.tracks.data[15].title}</li>`;
    
    

    })
    .catch(function(error){
console.log(error)
    })

})