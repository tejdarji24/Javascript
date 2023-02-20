let tabTech = document.querySelector('.tech-tabbing-main');
let tabName = document.querySelectorAll('.tab-content');
let contents = document.querySelectorAll('.tech-social');

tabTech.onclick = e => {
    let id = e.target.dataset.id;
    if (id) {
        tabName.forEach(btn => {            
            btn.classList.remove("active");
        });
        e.target.classList.add('active');

        contents.forEach(content => {
            content.classList.remove('active');
        });
        let element = document.getElementById(id);
        element.classList.add('active');
    }
}