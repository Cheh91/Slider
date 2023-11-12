window.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");
    const btnPrew = document.querySelector(".btn-prew");
    const btnNext = document.querySelector(".btn-next");
    let i = 0;

    btnPrew.addEventListener("click", () => {
        images[i].style.opacity = "0";
        i--;
        
        if(i < 0){
            i = images.length - 1;
        }
        images[i].style.opacity = "1";
    });

    btnNext.addEventListener("click", () => {
        images[i].style.opacity = "0";
        i++;
        if(i >= images.length){
            i = 0;
        }
        images[i].style.opacity = "1";
        
    });


});



