window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiAlbums = `${proxy}https://api.deezer.com/album/217281`;

fetch (apiAlbums)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
   
    fotoAlb3= document.querySelector(".fotoartist3");
    nombreAlb3 = document.querySelector(".nombrealbum3");
    nombreArt3 = document.querySelector(".nombreart3");
    nombreGen3 = document.querySelector(".nombregen3");
    fechaAlb3 = document.querySelector(".fechaalb3");
    listaTemas3 = document.querySelector(".temasalbum3")

  fotoAlb3.innerHTML +=`
    <img src="${datos.cover_medium}">`;
    
    nombreAlb3.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreArt3.innerHTML +=`<a href="detail-artista-2.html"><h2>${datos.artist.name}</h2></a>`;
    nombreGen3.innerHTML += `<h2>${datos.genres.data[0].name}</h2>`;
    fechaAlb3.innerHTML += `<h2>${datos.release_date}</h2>`;
    listaTemas3.innerHTML += `<li>${datos.tracks.data[0].title}</li>
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
    <li>${datos.tracks.data[11].title}</li>`;
    
    

    })
    .catch(function(error){
console.log(error)
    })

})