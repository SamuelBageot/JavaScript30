const header = document.querySelector('header');
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (scrollY > header.getBoundingClientRect().height) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.getBoundingClientRect().height + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }

})