window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let IdAlbumm = JSON.parse(localStorage.getItem('Album'))
let apiAlbums = `${proxy}https://api.deezer.com/album/${IdAlbumm}`;


fetch (`${apiAlbums}`)                                           
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
    nombreArt1.innerHTML +=`<a href="resultado_de_busqueda.html?resultado=${datos.artist.name}"><h2>${datos.artist.name}</h2></a>`;
    nombreGen1.innerHTML += `<a href="genero.html"><h2>${datos.genres.data[0].name}</h2></a>`;
    fechaAlb.innerHTML += `<h2>${datos.release_date}</h2>`;
    for (let index = 0; index < 7; index++) {
        listaTemas.innerHTML += `<li>${datos.tracks.data[index].title}</li>`
        
    }
    

    })
    .catch(function(error){
console.log(error)
    })

})