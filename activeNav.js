// Header navMenu activeClass after Click
let navLink = Array.from(document.getElementsByClassName('nav-link'));
navLink.forEach((item)=>{    
    item.addEventListener("click", (e)=>{ 
        let navActive = document.querySelector('.active');       
        if(navActive != null){
            navActive.classList.remove('active');
        }
        e.target.classList.add('active');
    });    
});