const arrows =document.querySelectorAll(".slider");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    let btnCounter=0;
    arrow.addEventListener("click",(e)=>{
        btnCounter++;
        let movieList=movieLists[i];
        if(btnCounter<=2){
        movieList.style.transform=`translateX(${movieList.computedStyleMap().get("transform")[0].x.value-550}px)`;
        }
        else{
            movieList.style.transform="translate(0)";
            btnCounter=0;
        }
    })
})

const toggleBall=document.querySelector(".toggle-ball");
const toggleMode=document.querySelector(".toggle-mode");
const body=document.querySelector("body");
toggleMode.addEventListener("click",()=>{
    body.classList.toggle("dark-theme");
    if(body.classList.contains("dark-theme")){
        toggleBall.style.transform="translateX(-21px)";
    }
    else{
        toggleBall.style.transform="translateX(0)";
    }
})