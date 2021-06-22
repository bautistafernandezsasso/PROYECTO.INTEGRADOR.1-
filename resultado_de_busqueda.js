   window.addEventListener("load", function(){               



     /*Funcion Para menu desplegable responsive*/
     const navToggle = document.querySelector(".nav-toggle")
     const navMenu =document.querySelector(".nav-menu")
     
     navToggle.addEventListener("click",() =>{
         navMenu.classList.toggle("nav-menu_visible");
     })
     
 
    const proxy = `https://cors-anywhere.herokuapp.com/`;
  









    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let Busqueda = queryStringObj.get("resultado");  

    console.log(Busqueda)
    palabraBuscada = document.querySelector(".palabraBuscada")
    palabraBuscada.innerHTML +=`<h3>${Busqueda}</h3>`;
    


    fetch (`${proxy}https://api.deezer.com/artist/${Busqueda}`)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)

    fotoAr = document.querySelector(".fotoAr");
    nombreAr = document.querySelector(".nombreAr")
    
    fotoAr.innerHTML +=`
    <img src="${datos.picture_medium}">`;
    
    nombreAr.innerHTML +=`<h2>${datos.name}</h2>`;



    })
    .catch(function(error){
console.log(error)
    })
  



  })