const loader = document.getElementById("loadingPage");

window.addEventListener('load', (event) => {

    setTimeout(function() {

        loader.classList.add('fadeOut');
    
        setTimeout(function() {
    
            loader.style.display = "none";
    
        },1000)
        
    
    }, 1000)

});