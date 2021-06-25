window.addEventListener('load', function(){

/*Funcion Para menu desplegable responsive*/
const navToggle = document.querySelector(".nav-toggle")
const navMenu =document.querySelector(".nav-menu")

navToggle.addEventListener("click",() =>{
    navMenu.classList.toggle("nav-menu_visible");
})




let botomBuscar = document.getElementById("btnbuscar")
let buscador = document.getElementById("form2")
botomBuscar.addEventListener('click', function(e) {
    e.preventDefault();
    if (buscador.value === ""){ 
    alert ("Debes escribir!");

 }else{ 
    window.location.href= `resultado_de_busqueda.html?resultado=${buscador.value}`; 
console.log(buscador.lenght)
 }
  
 


})




id=[
    `699056202`,
    `710164302`,
    `452047912`,
    `669380082`,
    `116914122`
]
id2=[

    `221141352`,
    `15478674`,
    `217281`,
    `100896762`,
    `12114240`
]

navMenuItem0 = document.querySelector(".nav-menu-ite0");
navMenuItem1 = document.querySelector(".nav-menu-ite1");
navMenuItem2 = document.querySelector(".nav-menu-ite2");
navMenuItem3 = document.querySelector(".nav-menu-ite3");
navMenuItem4 = document.querySelector(".nav-menu-ite4");

navMenuItem0.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('Album');
    localStorage.setItem('Album' , JSON.stringify(`${id2[0]}`));
    window.location.href = 'detail-album-busqueda.html';  
})
navMenuItem1.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('Album');
    localStorage.setItem('Album' , JSON.stringify(`${id2[1]}`));
    window.location.href = 'detail-album-busqueda.html';  

})
navMenuItem2.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('Album');
    localStorage.setItem('Album' , JSON.stringify(`${id2[2]}`));
    window.location.href = 'detail-album-busqueda.html';  
})

navMenuItem3.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.removeItem('Album');
        localStorage.setItem('Album' , JSON.stringify(`${id2[3]}`));
        window.location.href = 'detail-album-busqueda.html';  
})

navMenuItem4.addEventListener('click', function(e){
    e.preventDefault();
    localStorage.removeItem('Album');
    localStorage.setItem('Album' , JSON.stringify(`${id2[4]}`));
    window.location.href = 'detail-album-busqueda.html';  
})



for (let index = 0; index <= 4; index++) {
    navMenuItem = document.querySelector(".nav-menu-item"+[index])
    navMenuItem.addEventListener('click', function(e){
        e.preventDefault();
        localStorage.removeItem('Track');
        localStorage.setItem('Track' , JSON.stringify(`${id[index]}`));
        window.location.href = 'detail-track-busqueda.html';  
     })
}

 
 


 















})

