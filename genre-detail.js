window.addEventListener('load',function(){

    /*Funcion Para menu desplegable responsive*/
    const navToggle = document.querySelector(".nav-toggle")
    const navMenu =document.querySelector(".nav-menu")
    
    navToggle.addEventListener("click",() =>{
        navMenu.classList.toggle("nav-menu_visible");
    })
    

   const proxy = `https://cors-anywhere.herokuapp.com/`;

let apiGenres = `${proxy}https://api.deezer.com/genre`;

fetch (apiGenres)                                           
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
    console.log(datos)
  /*alternativo*/ 
    Gen = document.querySelector(".genrename");
    infoGen = document.querySelector(".genreinfo");
    
   Gen.innerHTML +=`<h2>${datos.data[7].name}</h2> <img src="${datos.data[7].picture_medium}">`;
    
   /*pop*/
   Gen2 = document.querySelector(".genrename2");
   infoGen2 = document.querySelector(".genreinfo2");
   
  Gen2.innerHTML +=`<h2>${datos.data[1].name}</h2> <img src="${datos.data[1].picture_medium}">`;
    
   /*rock*/
   Gen3 = document.querySelector(".genrename3");
   infoGen3 = document.querySelector(".genreinfo3");
   
  Gen3.innerHTML +=`<h2>${datos.data[4].name}</h2> <img src="${datos.data[4].picture_medium}">`;
    /*latin*/
    Gen4 = document.querySelector(".genrename4");
    infoGen4 = document.querySelector(".genreinfo4");
    
   Gen4.innerHTML +=`<h2>${datos.data[2].name}</h2> <img src="${datos.data[2].picture_medium}">`;


    
   
    
})
    

    
    .catch(function(error){
console.log(error)
    })



});