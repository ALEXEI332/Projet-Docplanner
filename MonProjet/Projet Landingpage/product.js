
const openPopup= () => {
    const popup=document.querySelector(".overlay-popup");
       popup.classList.toggle('active-popup'); 
}


document.addEventListener("DOMContentLoaded",()=>{
    const buton= document.querySelectorAll(".popbtn");
    buton.forEach((elemt)=>elemt.addEventListener("click",openPopup));
})