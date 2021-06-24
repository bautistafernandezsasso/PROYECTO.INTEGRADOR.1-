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

    Fav1 = document.querySelector(".fav1")
   
let botonSacar = document.querySelector('.sacarfav1');

    let fotoFav1 = JSON.parse(localStorage.getItem('foto1'));
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre1'));
    console.log(nombreFav1)

    if(nombreFav1 === null){
        Fav1.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
    }else{
        Fav1.innerHTML += ` <h2>${nombreFav1}</h2> <a href="detail-track-1.html"> <img src="${fotoFav1}"> </a> ` 
    }
    
    if(nombreFav1 === null){
        Fav1.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
    }else{
        Fav1.innerHTML += ` <h2>${nombreFav1}</h2> <a href="detail-track-1.html"> <img src="${fotoFav1}"> </a> ` 
    }

    if(nombreFav1 === null){
        Fav1.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
    }else{
        Fav1.innerHTML += ` <h2>${nombreFav1}</h2> <a href="detail-track-1.html"> <img src="${fotoFav1}"> </a> ` 
    }
   
    
     botonSacar.addEventListener('click', function(){
        localStorage.removeItem('foto1');
        localStorage.removeItem('nombre1');
        (window.location.reload())
       botonSacar.innerText = "Removed!";
        botonSacar.style.color = "red";
    });

    Fav2 = document.querySelector(".fav2")
   
    let fotoFav2 = JSON.parse(localStorage.getItem('foto2'))
    let nombreFav2 = JSON.parse(localStorage.getItem('nombre2'))
    Fav2.innerHTML += ` <h2>${nombreFav2}</h2> <a href="detail-track-2.html"> <img src="${fotoFav2}"> </a> `

    Fav3 = document.querySelector(".fav3")
   
    let fotoFav3 = JSON.parse(localStorage.getItem('foto3'))
    let nombreFav3 = JSON.parse(localStorage.getItem('nombre3'))
    Fav3.innerHTML += ` <h2>${nombreFav3}</h2> <a href="detail-track-3.html"> <img src="${fotoFav3}"> </a> `

    
    

    })
    .catch(function(error){
console.log(error)
    })
})
