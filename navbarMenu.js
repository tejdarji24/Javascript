// Hamburger Menu
const toggleButton = document.getElementById('toggleNavbar');
let navbarNav = document.getElementById('navbarNav');
toggleButton.addEventListener("click", ()=>{
    navbarNav.classList.add("toggle-active");
});
document.getElementById('close-icon').addEventListener("click",()=>{
    navbarNav.classList.remove('toggle-active');
});
// navbarNav.addEventListener('click',(e)=>{
//     let hasClass = navbarNav.classList.contains('toggle-active');
//     console.log(hasClass);
//     if(hasClass){
//         navbarNav.classList.remove('toggle-active');
//     }    
// });