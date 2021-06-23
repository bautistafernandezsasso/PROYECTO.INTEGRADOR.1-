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
   
    fotoAr = document.querySelector(".fotoartista");
    nombreAr = document.querySelector(".nombreartista");
    nombreCancion = document.querySelector(".nombrecancion");
    nombreDisco = document.querySelector(".nombredisco");
    musicPlayer = document.querySelector(".musicplayer");
    botonPlay = document.querySelector(".btnPlay");

    Fav1 = document.querySelector(".fav1")
    Fav2 = document.querySelector(".fav2")
    Fav3 = document.querySelector(".fav3")
    Fav4 = document.querySelector(".fav4")


    let fotoFav1 = JSON.parse(localStorage.getItem('foto1'))
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre1'))
    Fav1.innerHTML += ` <h2>${nombreFav1}</h2> <img src="${fotoFav1}">`

    let fotoFav1 = JSON.parse(localStorage.getItem('foto2'))
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre2'))
    Fav2.innerHTML += ` <h2>${nombreFav2}</h2> <img src="${fotoFav2}">`

    let fotoFav1 = JSON.parse(localStorage.getItem('foto3'))
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre3'))
    Fav3.innerHTML += ` <h2>${nombreFav3}</h2> <img src="${fotoFav3}">`

    let fotoFav1 = JSON.parse(localStorage.getItem('foto4'))
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre4'))
    Fav4.innerHTML += ` <h2>${nombreFav4}</h2> <img src="${fotoFav4}">`





    

    })
    .catch(function(error){
console.log(error)
    })
})
