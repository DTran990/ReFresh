const pagesections = document.querySelectorAll('.pagesection');
const navitem = document.querySelectorAll('nav ul li a');
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let current = '';

    pagesections.forEach( pagesection => {
        const pagesectionTop = pagesection.offsetTop;
        const pagesectionHeight = pagesection.clientHeight;

        if (pageYOffset > (pagesectionTop - pagesectionHeight / 3)){
            current = pagesection.getAttribute('id');
        }

    });

    navitem.forEach( li => {
        li.classList.remove('active');

        if (li.classList.contains(current)){
            li.classList.add('active');
        }
    });
    
    navbar.classList.toggle('scrolling-active', window.scrollY > 0);

});


