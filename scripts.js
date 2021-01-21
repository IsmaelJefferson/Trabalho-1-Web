document.querySelector("#laranja").addEventListener("click" , function(){
    document.querySelector("body").classList.remove("background-color");
    document.querySelector("body").classList.remove("backgound-verde");
    document.querySelector("body").classList.remove("backgound-Vermelho");

    document.querySelector("body").classList.add("backgound-laranja");
    


});

document.querySelector("#verde").addEventListener("click" , function(){
    document.querySelector("body").classList.remove("background-color");
    document.querySelector("body").classList.remove("backgound-Vermelho");
    document.querySelector("body").classList.remove("backgound-laranja");
    
    document.querySelector("body").classList.add("backgound-verde");
    
});


document.querySelector("#Vermelho").addEventListener("click" , function(){
    document.querySelector("body").classList.remove("background-color");
    document.querySelector("body").classList.remove("backgound-laranja");
    document.querySelector("body").classList.remove("backgound-verde");
    
    document.querySelector("body").classList.add("backgound-Vermelho");
    
});


document.querySelector("#Creditos").addEventListener("click" , function(){
    document.querySelector("#area-modal").classList.add("actived");
});


document.querySelector("#close-modal").addEventListener("click" , function(){
    document.querySelector("#area-modal").classList.remove("actived");
});
