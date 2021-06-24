window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiAlbums = `${proxy}https://api.deezer.com/album/15478674`;

fetch (apiAlbums)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAlb2= document.querySelector(".fotoartist2");
    nombreAlb2 = document.querySelector(".nombrealbum2");
    nombreArt2 = document.querySelector(".nombreart2");
    nombreGen2 = document.querySelector(".nombregen2");
    fechaAlb2 = document.querySelector(".fechaalb2");
    listaTemas2 = document.querySelector(".temasalbum2")

  fotoAlb2.innerHTML +=`
    <img src="${datos.cover_medium}">`;
    
    nombreAlb2.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreArt2.innerHTML +=`<h2>${datos.artist.name}</h2>`;
    nombreGen2.innerHTML += `<h2>${datos.genres.data[0].name}</h2>`;
    fechaAlb2.innerHTML += `<h2>${datos.release_date}</h2>`;
    listaTemas2.innerHTML += `<li>${datos.tracks.data[0].title}</li>
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