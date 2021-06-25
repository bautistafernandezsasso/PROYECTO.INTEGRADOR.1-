window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

   let TrackBusqueda = JSON.parse(localStorage.getItem('Track'))

console.log(TrackBusqueda)


fetch (`${proxy}https://api.deezer.com/track/${TrackBusqueda}`)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)






   
    fotoAr6 = document.querySelector(".fotoartista6");
    nombreAr6 = document.querySelector(".nombreartista6");
    nombreCancion6 = document.querySelector(".nombrecancion6");
    nombreDisco6 = document.querySelector(".nombredisco6");
    musicPlayer6 = document.querySelector(".musicplayer6");
    botonPlay6 = document.querySelector(".btnPlay6")

  fotoAr6.innerHTML +=`
    <img src="${datos.album.cover_medium}">`;
    nombreAr6.innerHTML +=`<h2>${datos.artist.name}</h2>`;
    nombreCancion6.innerHTML +=`<h2>${datos.title}</h2>`;
    nombreDisco6.innerHTML +=`<h2>${datos.album.title}</h2>`;
  
    musicPlayer6.innerHTML += `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${datos.id}" width="1000" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`;

    botonPlay6.addEventListener('click', function(e){
    e.preventDefault();

    
    for (let index = 0; index < 10; index++) {
        if(localStorage.getItem('foto'+[index]) === null){
            localStorage.setItem('foto'+[index] , JSON.stringify(`${datos.album.cover_medium}`));
            localStorage.setItem('nombre'+[index] , JSON.stringify(`${datos.title}`));
            break;
        } else {
      console.log('foto'+[index])
        }
        
        
    
        
    }
    
})
    })
    .catch(function(error){
console.log(error)


    })


})