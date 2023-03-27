const arrows =document.querySelectorAll(".slider");
const movieLists = document.querySelectorAll(".movie-list");
arrows.forEach((arrow,i)=>{
    let btnCounter=0;
    arrow.addEventListener("click",(e)=>{
        btnCounter++;
        let movieList=movieLists[i];
        let ratio = window.innerWidth-60-10;
        let totalItems = Math.floor(ratio/426.656);
        console.log(totalItems)
        if(6-(totalItems+btnCounter)>=0){
            let translateValue=0;
            switch(totalItems){
                case 4 : translateValue =380;
                        break;
                case 3 : translateValue =395;
                        break;
                case 2 : translateValue =400;
                        break;
                case 1 : translateValue =390;
                        break;
                default : translateValue =380;            
            }
            movieList.style.transform=`translateX(${movieList.computedStyleMap().get("transform")[0].x.value-translateValue}px)`;
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