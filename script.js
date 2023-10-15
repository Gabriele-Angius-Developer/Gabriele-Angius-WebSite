const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const section = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars.wrapper')



window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if(window.pageYOffset >= 
        navbarOffsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

    
    section.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop -10) {
            navbarLinks.forEach(navbarLinks => {
            ("change");
            })
            navbarLinks[i].classList.add
            ("change");
        }
    });
}

mainFn();

    window.addEventListener('resize', () => {
        window.location.reload();
    });