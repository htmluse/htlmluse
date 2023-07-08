// Smooth scrolling to section on menu click
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.navigation-menu li a');

    function handleClick(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', handleClick);
    }
});
