// variables 
// for converting the background to dark mode or light mode
let whiteBgToggle=document.getElementById("whiteBgToggle");
let blackBgToggle=document.getElementById("blackBgToggle");



//functions 
// to change the background to light mode
function bodyBgWhite(){
    document.body.classList.remove('blackBg');
    document.body.classList.add('whiteBg');
}

// to change the background to dark mode
function bodyBgBlack(){
    document.body.classList.remove('whiteBg');
    document.body.classList.add('blackBg');
}


//event listners
whiteBgToggle.addEventListener("click",()=>{
    bodyBgWhite();
})

blackBgToggle.addEventListener("click",()=>{
    bodyBgBlack();
});