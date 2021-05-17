const box = document.querySelectorAll('.box');

window.addEventListener('scroll', animateFunc);

function animateFunc() {
    const triggerBottom = window.innerHeight * (4/5);
    box.forEach(item => {
        const location = item.getBoundingClientRect().top;
        if(triggerBottom > location) {
           item.classList.add('show');
        }else{
            item.classList.remove('show');
        }
    }) 
}