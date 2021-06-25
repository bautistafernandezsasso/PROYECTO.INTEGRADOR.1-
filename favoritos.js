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
    Fav2 = document.querySelector(".fav2")
    Fav3 = document.querySelector(".fav3")
    Fav4 = document.querySelector(".fav4")
    Fav5 = document.querySelector(".fav5")

   sacarFav1 =document.querySelector(".sacarfav1")
   sacarFav2 =document.querySelector(".sacarfav2")
   sacarFav3 =document.querySelector(".sacarfav3")
   sacarFav4 =document.querySelector(".sacarfav4")
   sacarFav5 =document.querySelector(".sacarfav5")
   

    let fotoFav1 = JSON.parse(localStorage.getItem('foto1'));
    let nombreFav1 = JSON.parse(localStorage.getItem('nombre1'));
    console.log(nombreFav1)

    let fotoFav2 = JSON.parse(localStorage.getItem('foto2'));
    let nombreFav2 = JSON.parse(localStorage.getItem('nombre2'));
    console.log(nombreFav2)

    let fotoFav3 = JSON.parse(localStorage.getItem('foto3'));
    let nombreFav3 = JSON.parse(localStorage.getItem('nombre3'));
    console.log(nombreFav3)

    let fotoFav4 = JSON.parse(localStorage.getItem('foto4'));
    let nombreFav4 = JSON.parse(localStorage.getItem('nombre4'));
    console.log(nombreFav4)

    let fotoFav5 = JSON.parse(localStorage.getItem('foto5'));
    let nombreFav5 = JSON.parse(localStorage.getItem('nombre5'));
    console.log(nombreFav5)

    if(nombreFav1 === null){
        Fav1.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
        sacarFav1.innerHTML = `<h2></h2>`
    }else{
        Fav1.innerHTML += ` <h2>${nombreFav1}</h2> <a href="detail-track-1.html"> <img src="${fotoFav1}"> </a> ` 
        sacarFav1.innerHTML = `<button>Remove</button>`
    }
    
    if(nombreFav2 === null){
        Fav2.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
        sacarFav2.innerHTML = `<h2></h2>`
    }else{
        Fav2.innerHTML += ` <h2>${nombreFav2}</h2> <a href="detail-track-2.html"> <img src="${fotoFav2}"> </a> ` 
        sacarFav2.innerHTML = `<button>Remove</button>`
    }

    if(nombreFav3 === null){
        Fav3.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
        sacarFav3.innerHTML = `<h2></h2>`
    }else{
        Fav3.innerHTML += ` <h2>${nombreFav3}</h2> <a href="detail-track-3.html"> <img src="${fotoFav3}"> </a> ` 
        sacarFav3.innerHTML = `<button>Remove</button>`
    }

    if(nombreFav4 === null){
        Fav4.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
        sacarFav4.innerHTML = `<h2></h2>`
    }else{
        Fav4.innerHTML += ` <h2>${nombreFav4}</h2> <a href="detail-track-4.html"> <img src="${fotoFav4}"> </a> ` 
        sacarFav4.innerHTML = `<button>Remove</button>`
    }

    if(nombreFav5 === null){
        Fav5.innerHTML += ` <h2></h2> <a href=""> <img src=""> </a> `
        sacarFav5.innerHTML = `<h2></h2>`
    }else{
        Fav5.innerHTML += ` <h2>${nombreFav5}</h2> <a href="detail-track-5.html"> <img src="${fotoFav5}"> </a> ` 
        sacarFav5.innerHTML = `<button>Remove</button>`
    }
   
    let botonSacar = document.querySelector('.sacarfav1');
    let botonSacar2 = document.querySelector('.sacarfav2');
    let botonSacar3 = document.querySelector('.sacarfav3');
    let botonSacar4 = document.querySelector('.sacarfav4');
    let botonSacar5 = document.querySelector('.sacarfav5');
    
     botonSacar.addEventListener('click', function(){
        localStorage.removeItem('foto1');
        localStorage.removeItem('nombre1');
        (window.location.reload());
       botonSacar.innerText = "Removed!";
        botonSacar.style.color = "red";
    });
    botonSacar2.addEventListener('click', function(){
        localStorage.removeItem('foto2');
        localStorage.removeItem('nombre2');
        (window.location.reload());
       botonSacar2.innerText = "Removed!";
        botonSacar2.style.color = "red";
    });
   
    botonSacar3.addEventListener('click', function(){
        localStorage.removeItem('foto3');
        localStorage.removeItem('nombre3');
        (window.location.reload());
       botonSacar3.innerText = "Removed!";
        botonSacar3.style.color = "red";
    });

    botonSacar4.addEventListener('click', function(){
        localStorage.removeItem('foto4');
        localStorage.removeItem('nombre4');
        (window.location.reload());
       botonSacar4.innerText = "Removed!";
        botonSacar4.style.color = "red";
    });

    botonSacar5.addEventListener('click', function(){
        localStorage.removeItem('foto5');
        localStorage.removeItem(`nombre5`);
        (window.location.reload());
       botonSacar5.innerText = "Removed!";
        botonSacar5.style.color = "red";
    });
    
    

    })
    .catch(function(error){
console.log(error)
    })
})
