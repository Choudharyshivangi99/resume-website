document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    var stickyOffset = document.querySelector('header').offsetTop;

    window.addEventListener('scroll', function() {
        var sticky = document.querySelector('header'),
            scroll = window.pageYOffset || document.documentElement.scrollTop;

        if (scroll >= stickyOffset) {
            sticky.classList.add('fixed');
        } else {
            sticky.classList.remove('fixed');
        }
    });
});
